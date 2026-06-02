import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, MatCardModule],
  template: `<section class="container" *ngIf="content$ | async as content">
    <h1>{{ content.companyName === 'त्रिशा टूर्स अँड कॅब सर्व्हिसेस' ? 'फ्लीट / वाहने' : 'Fleet / Vehicles' }}</h1>
    <div class="grid">
      <mat-card *ngFor="let vehicle of content.vehicles">
        <img [src]="vehicle.image" [alt]="vehicle.name" loading="lazy" />
        <h3>{{ vehicle.name }}</h3>
        <p>{{ vehicle.seating }} | {{ vehicle.ac }} | {{ vehicle.luggage }}</p>
        <ul><li *ngFor="let feature of vehicle.features">{{ feature }}</li></ul>
      </mat-card>
    </div>
  </section>`,
  styles: ['.container{padding:2rem 1rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;} img{width:100%;border-radius:8px;}']
})
export class FleetComponent implements OnInit {
  readonly content$: Observable<SiteContent>;
  constructor(private readonly contentService: ContentService, private readonly seoService: SeoService) {
    this.content$ = this.contentService.content;
  }
  ngOnInit(): void {
    this.content$.subscribe((content) => this.seoService.update({ ...content.meta.fleet, path: '/fleet' }));
  }
}
