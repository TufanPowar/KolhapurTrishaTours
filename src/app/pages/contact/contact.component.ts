import { AsyncPipe, NgIf } from '@angular/common';
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

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, AsyncPipe, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styles: ['.container{padding:2rem 1rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;} iframe{width:100%;height:280px;border:0;}']
})
export class ContactComponent implements OnInit {
  readonly content$;
  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly contentService: ContentService,
    readonly languageService: LanguageService,
    private readonly leadService: LeadService,
    private readonly snackBar: MatSnackBar,
    private readonly seoService: SeoService
  ) {
    this.content$ = this.contentService.content;
    this.form = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      honeypot: ['']
    });
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.contact, path: '/contact' }));
  }

  async submit(): Promise<void> {
    if (this.form.invalid || this.form.value.honeypot) {
      return;
    }
    await this.leadService.sendLead({ source: 'contact', ...this.form.getRawValue() });
    this.snackBar.open(
      this.languageService.language() === 'mr'
        ? 'संदेश यशस्वीपणे पाठवला. आम्ही लवकरच संपर्क करू.'
        : 'Message sent successfully. We will contact you soon.',
      this.languageService.language() === 'mr' ? 'बंद' : 'Close',
      { duration: 3500 }
    );
    this.form.reset();
  }
}
