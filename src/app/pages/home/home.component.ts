import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink, MatButtonModule, MatCardModule, MatExpansionModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  readonly content$: Observable<SiteContent>;
  readonly languageService = inject(LanguageService);
  readonly heroSearchForm;

  constructor(
    private readonly router: Router,
    private readonly contentService: ContentService,
    private readonly fb: FormBuilder,
    private readonly seoService: SeoService
  ) {
    this.content$ = this.contentService.content;
    this.heroSearchForm = this.fb.group({
      destination: ['', [Validators.required, Validators.minLength(2)]],
      journeyDate: ['', Validators.required],
      returnDate: [''],
      travelers: [2, [Validators.required, Validators.min(1), Validators.max(50)]]
    });
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => {
      this.seoService.update({ ...content.meta.home, path: '/' });
    });
  }

  onExploreNow(): void {
    this.heroSearchForm.markAllAsTouched();
    if (this.heroSearchForm.invalid) return;

    const value = this.heroSearchForm.value;
    const destination = (value.destination ?? '').toString().trim();
    const journeyDate = value.journeyDate ?? '';
    const returnDate = value.returnDate ?? '';
    const adults = Number(value.travelers ?? 2);

    const days = this.computeDays(journeyDate, returnDate) ?? 2;

    const vehicleType =
      adults <= 5 ? '5 Seater AC Cab' : adults <= 7 ? '7 Seater SUV' : '10 Seater Cab';

    this.router.navigate(['/request-quotation'], {
      queryParams: {
        pickup: 'Kolhapur',
        destination,
        journeyDate,
        returnDate: returnDate || '',
        adults,
        children: 0,
        days,
        vehicleType
      }
    });
  }

  private computeDays(journeyDate: string, returnDate: string): number | null {
    const j = new Date(`${journeyDate}T00:00:00`);
    if (isNaN(j.getTime())) return null;
    if (!returnDate) return null;
    const r = new Date(`${returnDate}T00:00:00`);
    if (isNaN(r.getTime())) return null;
    const diffMs = r.getTime() - j.getTime();
    if (diffMs <= 0) return null;
    // +1 to include both travel start and end day (simple estimate).
    return Math.min(60, Math.max(1, Math.round(diffMs / 86400000) + 1));
  }
}
