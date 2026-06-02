import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatCardModule],
  template: `<section class="container" *ngIf="content$ | async as content">
    <h1>{{ languageService.isMarathi() ? 'आमच्याबद्दल' : 'About Us' }}</h1>
    <mat-card>{{ content.about.intro }}</mat-card>
    <mat-card>{{ content.about.mission }}</mat-card>
    <mat-card>{{ content.about.vision }}</mat-card>
    <mat-card>{{ content.about.experience }}</mat-card>
    <mat-card>{{ content.about.areas }}</mat-card>
    <mat-card>{{ content.about.commitment }}</mat-card>
  </section>`,
  styles: ['.container{padding:2rem 1rem;display:grid;gap:1rem;}']
})
export class AboutComponent implements OnInit {
  readonly languageService = inject(LanguageService);
  readonly content$: Observable<SiteContent>;
  constructor(private readonly contentService: ContentService, private readonly seoService: SeoService) {
    this.content$ = this.contentService.content;
  }
  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.about, path: '/about' }));
  }
}
