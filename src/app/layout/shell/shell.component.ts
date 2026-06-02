import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeadService } from '../../core/services/lead.service';
import { TrackingService } from '../../core/services/tracking.service';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterLinkActive, ReactiveFormsModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  readonly content: () => SiteContent;
  readonly languageService = inject(LanguageService);
  readonly whatsappMessage = encodeURIComponent(
    'Hello Trisha Tours & Cab Services, I would like to know more about your services.'
  );
  readonly quickLeadForm;
  callbackMessage = '';
  showWhatsappPopup = false;
  showInstallPrompt = false;
  private deferredInstallPrompt: (Event & { prompt?: () => Promise<void>; userChoice?: Promise<{ outcome: string }> }) | null = null;

  constructor(
    private readonly contentService: ContentService,
    private readonly fb: FormBuilder,
    private readonly leadService: LeadService,
    private readonly trackingService: TrackingService
  ) {
    this.content = this.contentService.contentSignal;
    this.quickLeadForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        this.deferredInstallPrompt = event as Event & { prompt?: () => Promise<void>; userChoice?: Promise<{ outcome: string }> };
        this.showInstallPrompt = true;
      });
      setTimeout(() => {
        this.showWhatsappPopup = true;
      }, 20000);
    }
  }

  async submitQuickLead(): Promise<void> {
    if (this.quickLeadForm.invalid) {
      return;
    }
    await this.leadService.sendLead({
      source: 'quick-lead',
      ...this.quickLeadForm.value
    });
    this.trackingService.track('quick_lead_submitted');
    this.callbackMessage =
      this.languageService.language() === 'mr'
        ? 'आमचे प्रतिनिधी 10 मिनिटांत तुम्हाला कॉल करतील.'
        : 'Our representative will call you within 10 minutes.';
    this.quickLeadForm.reset();
  }

  trackClick(eventName: string): void {
    this.trackingService.track(eventName);
  }

  closeWhatsappPopup(): void {
    this.showWhatsappPopup = false;
  }

  async installApp(): Promise<void> {
    if (!this.deferredInstallPrompt?.prompt) {
      return;
    }
    await this.deferredInstallPrompt.prompt();
    await this.deferredInstallPrompt.userChoice;
    this.showInstallPrompt = false;
    this.deferredInstallPrompt = null;
  }
}
