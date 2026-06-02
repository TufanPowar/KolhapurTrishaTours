import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContentService } from '../../core/services/content.service';
import { LanguageService } from '../../core/services/language.service';
import { LeadService } from '../../core/services/lead.service';
import { SeoService } from '../../core/services/seo.service';
import { TrackingService } from '../../core/services/tracking.service';
import { ActivatedRoute } from '@angular/router';
import { formError, indianMobileValidators, normalizeMobile } from '../../core/validators/form-validators';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.scss'
})
export class QuotationComponent implements OnInit {
  readonly content$;
  readonly form;
  readonly languageService = inject(LanguageService);
  readonly formError = (control: AbstractControl | null, field: Parameters<typeof formError>[2]) =>
    formError(control, this.languageService.language(), field);

  constructor(
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly contentService: ContentService,
    private readonly leadService: LeadService,
    private readonly trackingService: TrackingService,
    private readonly seoService: SeoService,
    private readonly route: ActivatedRoute
  ) {
    this.content$ = this.contentService.content;
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', indianMobileValidators],
      email: ['', [Validators.required, Validators.email]],
      pickup: ['', [Validators.required, Validators.minLength(2)]],
      destination: ['', [Validators.required, Validators.minLength(2)]],
      days: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
      journeyDate: ['', Validators.required],
      returnDate: [''],
      adults: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
      children: ['0', [Validators.min(0), Validators.max(30)]],
      vehicleType: ['', Validators.required],
      specialRequirements: [''],
      honeypot: ['']
    });
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.quotation, path: '/request-quotation' }));

    this.route.queryParams.subscribe((params) => {
      const destination = params['destination'] ? params['destination'].toString().trim() : '';
      const pickup = params['pickup'] ? params['pickup'].toString().trim() : 'Kolhapur';
      const journeyDate = params['journeyDate'] ? params['journeyDate'].toString() : '';
      const returnDate = params['returnDate'] ? params['returnDate'].toString() : '';

      const adultsRaw = params['adults'] ?? params['travelers'];
      const adults = adultsRaw !== undefined && adultsRaw !== null ? Number(adultsRaw) : NaN;

      const children = params['children'] !== undefined ? params['children'].toString() : '0';
      const daysRaw = params['days'];
      const daysFromParam = daysRaw !== undefined ? Number(daysRaw) : NaN;

      const computedDays = this.computeDays(journeyDate, returnDate);
      const days = !isNaN(daysFromParam) ? daysFromParam : computedDays ?? NaN;

      const vehicleTypeParam = params['vehicleType'] ? params['vehicleType'].toString() : '';
      const vehicleType =
        vehicleTypeParam ||
        (isNaN(adults) || adults <= 5
          ? '5 Seater AC Cab'
          : adults <= 7
            ? '7 Seater SUV'
            : '10 Seater Cab');

      this.form.patchValue({
        pickup,
        destination,
        journeyDate,
        returnDate,
        adults: !isNaN(adults) ? String(adults) : this.form.value.adults,
        children,
        vehicleType,
        days: !isNaN(days) ? String(days) : this.form.value.days
      });
    });
  }

  onMobileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const normalized = normalizeMobile(input.value);
    input.value = normalized;
    this.form.patchValue({ mobile: normalized });
  }

  async submit(): Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.value.honeypot) {
      return;
    }

    if (this.form.invalid) {
      this.snackBar.open(
        this.languageService.language() === 'mr'
          ? 'कृपया सर्व आवश्यक माहिती योग्यरित्या भरा.'
          : 'Please fill all required fields correctly.',
        this.languageService.language() === 'mr' ? 'बंद' : 'Close',
        { duration: 3500 }
      );
      return;
    }

    const value = this.form.getRawValue();
    const whatsappText = this.leadService.createWhatsappInquiryMessage(
      value.pickup ?? 'Kolhapur',
      value.destination ?? 'Goa',
      String(value.days ?? '2')
    );

    await this.leadService.sendLead({ source: 'quotation', ...value });

    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/919579858666?text=${encodeURIComponent(whatsappText)}`, '_blank', 'noopener');
    }

    this.trackingService.track('quotation_submitted', { pickup: value.pickup, destination: value.destination });
    this.snackBar.open(
      this.languageService.language() === 'mr'
        ? 'चौकशी पाठवली. व्हॉट्सअॅप उघडले आहे — पुढे तिथे पाठवा.'
        : 'Inquiry sent. WhatsApp opened — please send the message there.',
      this.languageService.language() === 'mr' ? 'बंद' : 'Close',
      { duration: 4500 }
    );
    this.form.reset({ children: '0', honeypot: '' });
  }

  private computeDays(journeyDate: string, returnDate: string): number | null {
    const j = new Date(`${journeyDate}T00:00:00`);
    if (!journeyDate || isNaN(j.getTime())) return null;
    if (!returnDate) return null;
    const r = new Date(`${returnDate}T00:00:00`);
    if (isNaN(r.getTime())) return null;
    const diffMs = r.getTime() - j.getTime();
    if (diffMs <= 0) return null;
    return Math.min(60, Math.max(1, Math.round(diffMs / 86400000) + 1));
  }
}
