import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, MatCardModule],
  template: `<section class="container" *ngIf="content$ | async as content">
    <h1>{{ languageService.isMarathi() ? 'गॅलरी' : 'Gallery' }}</h1>
    <div class="grid">
      <mat-card *ngFor="let image of content.gallery">
        <img [src]="image.image" [alt]="image.title" loading="lazy" />
        <h3>{{ image.title }}</h3>
        <p>{{ image.category }}</p>
      </mat-card>
    </div>
  </section>`,
  styles: ['.container{padding:2rem 1rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;} img{width:100%;border-radius:8px;}']
})
export class GalleryComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  readonly content$: Observable<SiteContent>;
  constructor(private readonly contentService: ContentService, private readonly seoService: SeoService) {
    this.content$ = this.contentService.content;
  }
  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.gallery, path: '/gallery' }));
  }
}
