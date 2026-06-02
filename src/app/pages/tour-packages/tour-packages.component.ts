import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { SiteContent, TourPackage } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { BRAND_NAME } from '../../core/validators/form-validators';

@Component({
  selector: 'app-tour-packages',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './tour-packages.component.html',
  styleUrl: './tour-packages.component.scss'
})
export class TourPackagesComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  readonly content$: Observable<SiteContent>;

  constructor(
    private readonly contentService: ContentService,
    private readonly seoService: SeoService
  ) {
    this.content$ = this.contentService.content;
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.packages, path: '/tour-packages' }));
  }

  quoteQueryParams(pkg: TourPackage): Record<string, string | number> {
    const destination = pkg.locations.split(',')[0]?.trim() || pkg.name;
    return {
      pickup: 'Kolhapur',
      destination,
      vehicleType: pkg.vehicleType,
      days: this.extractDays(pkg.duration)
    };
  }

  whatsappUrl(pkg: TourPackage): string {
    const text = encodeURIComponent(
      `Hello ${BRAND_NAME}, I am interested in package: ${pkg.name} (${pkg.vehicleType}). Please share quotation.`
    );
    return `https://wa.me/919579858666?text=${text}`;
  }

  private extractDays(duration: string): number {
    const match = duration.match(/(\d+)\s*Days?/i);
    return match ? Number(match[1]) : 3;
  }
}
