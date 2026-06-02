import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContentService } from '../../core/services/content.service';
import { LanguageService } from '../../core/services/language.service';
import { LeadService } from '../../core/services/lead.service';
import { SeoService } from '../../core/services/seo.service';
import { TrackingService } from '../../core/services/tracking.service';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.scss'
})
export class QuotationComponent implements OnInit {
  readonly content$;
  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly contentService: ContentService,
    readonly languageService: LanguageService,
    private readonly leadService: LeadService,
    private readonly trackingService: TrackingService,
    private readonly seoService: SeoService
  ) {
    this.content$ = this.contentService.content;
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      pickup: ['', Validators.required],
      destination: ['', Validators.required],
      days: ['', Validators.required],
      journeyDate: ['', Validators.required],
      returnDate: [''],
      adults: ['', Validators.required],
      children: ['0'],
      vehicleType: ['', Validators.required],
      specialRequirements: [''],
      honeypot: ['']
    });
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.quotation, path: '/request-quotation' }));
  }

  async submit(): Promise<void> {
    if (this.form.invalid || this.form.value.honeypot) {
      return;
    }
    const value = this.form.getRawValue();
    await this.leadService.sendLead({ source: 'quotation', ...value });
    const message = this.leadService.createWhatsappInquiryMessage(value.pickup ?? 'Kolhapur', value.destination ?? 'Goa', value.days ?? '2');
    window.open(`https://wa.me/919579858666?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    this.trackingService.track('quotation_submitted', { pickup: value.pickup, destination: value.destination });
    this.snackBar.open(
      this.languageService.language() === 'mr' ? 'चौकशी यशस्वीपणे पाठवली.' : 'Inquiry submitted successfully.',
      this.languageService.language() === 'mr' ? 'बंद' : 'Close',
      { duration: 3500 }
    );
    this.form.reset();
  }
}
