import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { MarketingContentService } from '../../core/services/marketing-content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  template: `<section class="container" *ngIf="post$ | async as post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.publishedOn }}</p>
    <p *ngFor="let paragraph of post.content">{{ paragraph }}</p>
  </section>`,
  styles: ['.container{padding:2rem 1rem;max-width:900px;}']
})
export class BlogDetailComponent implements OnInit {
  readonly post$;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly marketingService: MarketingContentService,
    private readonly seoService: SeoService
  ) {
    this.post$ = combineLatest([this.marketingService.blogPosts$, this.route.paramMap]).pipe(
      map(([posts, params]) => posts.find((post) => post.slug === params.get('slug')) ?? posts[0])
    );
  }
  ngOnInit(): void {
    this.post$.subscribe((post) => {
      this.seoService.update({
        title: `${post.title} | Trisha Tours Blog`,
        description: post.excerpt,
        keywords: post.keywords,
        path: `/blog/${post.slug}`
      });
    });
  }
}
