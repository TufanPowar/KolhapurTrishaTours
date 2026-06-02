import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { MarketingContentService } from '../../core/services/marketing-content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-location-seo',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink],
  template: `<section class="container" *ngIf="page$ | async as page">
    <h1>{{ page.heading }}</h1>
    <p>{{ page.description }}</p>
    <p *ngFor="let paragraph of page.content">{{ paragraph }}</p>
    <a routerLink="/request-quotation">Get Instant Quote</a>
  </section>`,
  styles: ['.container{padding:2rem 1rem;max-width:900px;}']
})
export class LocationSeoComponent implements OnInit {
  readonly page$;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly marketingService: MarketingContentService,
    private readonly seoService: SeoService
  ) {
    const slug = (this.route.snapshot.data['slug'] as string | undefined) ?? 'kolhapur-taxi-service';
    this.page$ = this.marketingService.locationPages$.pipe(
      map((pages) => pages.find((page) => page.slug === slug) ?? pages[0])
    );
  }

  ngOnInit(): void {
    this.page$.subscribe((page) => {
      this.seoService.update({
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        path: `/${page.slug}`
      });
    });
  }
}
