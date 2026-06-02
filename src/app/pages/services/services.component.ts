import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, MatCardModule],
  template: `<section class="container" *ngIf="content$ | async as content">
    <h1>{{ languageService.isMarathi() ? 'सेवा' : 'Services' }}</h1>
    <h2>{{ languageService.isMarathi() ? 'कॅब रेंटल' : 'Cab Rental' }}</h2>
    <div class="grid"><mat-card *ngFor="let i of content.services.cabRental">{{ i }}</mat-card></div>
    <h2>{{ languageService.isMarathi() ? 'टूर सेवा' : 'Tour Services' }}</h2>
    <div class="grid"><mat-card *ngFor="let i of content.services.tours">{{ i }}</mat-card></div>
    <h2>{{ languageService.isMarathi() ? 'कॉर्पोरेट' : 'Corporate' }}</h2>
    <div class="grid"><mat-card *ngFor="let i of content.services.corporate">{{ i }}</mat-card></div>
    <h2>{{ languageService.isMarathi() ? 'इव्हेंट ट्रान्सपोर्ट' : 'Event Transportation' }}</h2>
    <div class="grid"><mat-card *ngFor="let i of content.services.eventTransportation">{{ i }}</mat-card></div>
  </section>`,
  styles: ['.container{padding:2rem 1rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;}']
})
export class ServicesComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  readonly content$: Observable<SiteContent>;
  constructor(private readonly contentService: ContentService, private readonly seoService: SeoService) {
    this.content$ = this.contentService.content;
  }
  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.services, path: '/services' }));
  }
}
