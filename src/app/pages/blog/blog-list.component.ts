import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MarketingContentService } from '../../core/services/marketing-content.service';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink, MatCardModule],
  template: `<section class="container" *ngIf="posts$ | async as posts">
    <h1>{{ languageService.language() === 'mr' ? 'प्रवास ब्लॉग' : 'Travel Blog' }}</h1>
    <div class="grid">
      <mat-card *ngFor="let post of posts">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <a [routerLink]="['/blog', post.slug]">{{ languageService.language() === 'mr' ? 'लेख वाचा' : 'Read Article' }}</a>
      </mat-card>
    </div>
  </section>`,
  styles: ['.container{padding:2rem 1rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;}']
})
export class BlogListComponent implements OnInit {
  readonly posts$;
  constructor(
    private readonly marketingService: MarketingContentService,
    private readonly seoService: SeoService,
    readonly languageService: LanguageService
  ) {
    this.posts$ = this.marketingService.blogPosts$;
  }
  ngOnInit(): void {
    this.seoService.update({
      title: 'Travel Blog | Trisha Tours & Cab Services',
      description: 'Fresh travel articles for Kolhapur, Goa and Maharashtra tours.',
      keywords: 'kolhapur travel blog, goa travel guide',
      path: '/blog'
    });
  }
}
