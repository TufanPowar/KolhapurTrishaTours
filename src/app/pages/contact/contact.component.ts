import { AsyncPipe, NgIf } from '@angular/common';
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
import { formError, indianMobileValidators, normalizeMobile } from '../../core/validators/form-validators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, AsyncPipe, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  readonly content$;
  readonly form;
  readonly languageService = inject(LanguageService);
  readonly formError = (control: AbstractControl | null, field: Parameters<typeof formError>[2]) =>
    formError(control, this.languageService.language(), field);

  constructor(
    private readonly fb: FormBuilder,
    private readonly contentService: ContentService,
    private readonly leadService: LeadService,
    private readonly snackBar: MatSnackBar,
    private readonly seoService: SeoService
  ) {
    this.content$ = this.contentService.content;
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', indianMobileValidators],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      honeypot: ['']
    });
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.contact, path: '/contact' }));
  }

  onMobileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const normalized = normalizeMobile(input.value);
    input.value = normalized;
    this.form.patchValue({ mobile: normalized });
  }

  async submit(): Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.invalid || this.form.value.honeypot) {
      this.snackBar.open(
        this.languageService.language() === 'mr'
          ? 'कृपया सर्व फील्ड योग्यरित्या भरा.'
          : 'Please fill all fields correctly.',
        this.languageService.language() === 'mr' ? 'बंद' : 'Close',
        { duration: 3500 }
      );
      return;
    }

    const result = await this.leadService.sendLead({ source: 'contact', ...this.form.getRawValue() });
    this.snackBar.open(
      result.ok
        ? this.languageService.language() === 'mr'
          ? 'संदेश यशस्वीपणे पाठवला. आम्ही लवकरच संपर्क करू.'
          : 'Message sent successfully. We will contact you soon.'
        : this.languageService.language() === 'mr'
          ? 'संदेश पाठवता आला नाही. कृपया कॉल करा.'
          : 'Could not send message. Please call us directly.',
      this.languageService.language() === 'mr' ? 'बंद' : 'Close',
      { duration: 3500 }
    );
    if (result.ok) {
      this.form.reset();
    }
  }
}
