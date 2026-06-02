import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-tour-packages',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, MatCardModule, MatButtonModule],
  template: `<section class="container" *ngIf="content$ | async as content">
    <h1>{{ languageService.isMarathi() ? 'टूर पॅकेजेस' : 'Tour Packages' }}</h1>
    <div class="grid">
      <mat-card *ngFor="let pkg of content.packages">
        <img [src]="pkg.image" [alt]="pkg.name" loading="lazy" />
        <h3>{{ pkg.name }}</h3>
        <p>{{ pkg.category }} | {{ pkg.duration }}</p>
        <p>{{ pkg.locations }}</p>
        <ul><li *ngFor="let inc of pkg.inclusions">{{ inc }}</li></ul>
        <div class="actions">
          <a
            mat-stroked-button
            color="primary"
            [href]="'https://wa.me/919579858666?text=Hello%20Trisha%20Tours,%20I%20need%20details%20for%20package:%20' + pkg.name"
            target="_blank"
            rel="noreferrer"
          >
            {{ languageService.isMarathi() ? 'व्हॉट्सअॅप चौकशी' : 'WhatsApp Inquiry' }}
          </a>
          <a
            mat-button
            href="https://www.facebook.com/sharer/sharer.php?u=https://trishatourskolhapur.com/tour-packages"
            target="_blank"
            rel="noreferrer"
          >
            {{ languageService.isMarathi() ? 'शेअर' : 'Share' }}
          </a>
        </div>
      </mat-card>
    </div>
  </section>`,
  styles: [
    '.container{padding:2rem 1rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;} img{width:100%;border-radius:8px;aspect-ratio:16/10;object-fit:cover;} .actions{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem;}'
  ]
})
export class TourPackagesComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  readonly content$: Observable<SiteContent>;
  constructor(private readonly contentService: ContentService, private readonly seoService: SeoService) {
    this.content$ = this.contentService.content;
  }
  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.packages, path: '/tour-packages' }));
  }
}
