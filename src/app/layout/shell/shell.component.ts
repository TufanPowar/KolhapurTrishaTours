import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BRAND_NAME, formError, indianMobileValidators, normalizeMobile } from '../../core/validators/form-validators';
import { LeadService } from '../../core/services/lead.service';
import { TrackingService } from '../../core/services/tracking.service';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { LanguageService } from '../../core/services/language.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  readonly content: () => SiteContent;
  readonly languageService = inject(LanguageService);
  readonly whatsappMessage = encodeURIComponent(
    `Hello ${BRAND_NAME}, I would like to know more about your cab and tour services.`
  );
  readonly quickLeadForm;
  readonly formError = (control: AbstractControl | null, field: Parameters<typeof formError>[2]) =>
    formError(control, this.languageService.language(), field);

  callbackMessage = '';
  showWhatsappPopup = false;
  showInstallPrompt = false;
  mobileMenuOpen = false;
  inquiryCollapsed = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  private deferredInstallPrompt: (Event & { prompt?: () => Promise<void>; userChoice?: Promise<{ outcome: string }> }) | null =
    null;

  constructor(
    private readonly contentService: ContentService,
    private readonly fb: FormBuilder,
    private readonly leadService: LeadService,
    private readonly trackingService: TrackingService,
    private readonly snackBar: MatSnackBar
  ) {
    this.content = this.contentService.contentSignal;
    this.quickLeadForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', indianMobileValidators]
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        this.deferredInstallPrompt = event as Event & {
          prompt?: () => Promise<void>;
          userChoice?: Promise<{ outcome: string }>;
        };
        this.showInstallPrompt = true;
      });
      setTimeout(() => {
        this.showWhatsappPopup = true;
      }, 20000);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      this.mobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  toggleInquiry(): void {
    this.inquiryCollapsed = !this.inquiryCollapsed;
  }

  onMobileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const normalized = normalizeMobile(input.value);
    input.value = normalized;
    this.quickLeadForm.patchValue({ mobile: normalized });
  }

  async submitQuickLead(): Promise<void> {
    this.quickLeadForm.markAllAsTouched();
    if (this.quickLeadForm.invalid) {
      this.snackBar.open(
        this.languageService.language() === 'mr'
          ? 'कृपया नाव आणि 10 अंकी मोबाईल नंबर भरा.'
          : 'Please enter your name and a valid 10-digit mobile number.',
        this.languageService.language() === 'mr' ? 'बंद' : 'Close',
        { duration: 3500 }
      );
      return;
    }

    const result = await this.leadService.sendLead({
      source: 'quick-lead',
      ...this.quickLeadForm.value
    });

    this.trackingService.track('quick_lead_submitted');

    if (result.ok) {
      this.callbackMessage =
        this.languageService.language() === 'mr'
          ? 'आमचे प्रतिनिधी 10 मिनिटांत तुम्हाला कॉल करतील.'
          : 'Our representative will call you within 10 minutes.';
      this.quickLeadForm.reset();
    } else {
      this.snackBar.open(
        this.languageService.language() === 'mr'
          ? 'सबमिट अयशस्वी. कृपया कॉल करा किंवा व्हॉट्सअॅप करा.'
          : 'Could not submit right now. Please call or WhatsApp us.',
        this.languageService.language() === 'mr' ? 'बंद' : 'Close',
        { duration: 4000 }
      );
    }
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
