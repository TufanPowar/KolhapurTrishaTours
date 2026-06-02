import { computed, inject, Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { LanguageService } from './language.service';
import { BlogPost, LocationSeoPage } from '../models/marketing.model';
import locationEn from '../../../assets/data/location-pages.en.json';
import locationMr from '../../../assets/data/location-pages.mr.json';
import blogEn from '../../../assets/data/blog.en.json';
import blogMr from '../../../assets/data/blog.mr.json';

@Injectable({ providedIn: 'root' })
export class MarketingContentService {
  private readonly languageService = inject(LanguageService);

  readonly locationPages$ = toObservable(
    computed(() => (this.languageService.language() === 'mr' ? (locationMr as LocationSeoPage[]) : (locationEn as LocationSeoPage[])))
  );

  readonly blogPosts$ = toObservable(
    computed(() => (this.languageService.language() === 'mr' ? (blogMr as BlogPost[]) : (blogEn as BlogPost[])))
  );
}
