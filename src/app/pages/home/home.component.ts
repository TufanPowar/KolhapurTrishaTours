import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { SiteContent } from '../../core/models/content.model';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  readonly content$: Observable<SiteContent>;

  constructor(
    private readonly contentService: ContentService,
    private readonly seoService: SeoService
  ) {
    this.content$ = this.contentService.content;
  }

  ngOnInit(): void {
    this.content$.subscribe((content) => {
      this.seoService.update({ ...content.meta.home, path: '/' });
    });
  }
}
