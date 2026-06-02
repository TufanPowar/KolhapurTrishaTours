import { computed, inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { LanguageService } from './language.service';
import { SiteContent } from '../models/content.model';
import enContent from '../../../assets/data/content.en.json';
import mrContent from '../../../assets/data/content.mr.json';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly languageService = inject(LanguageService);
  readonly isLoading = signal(true);
  readonly contentSignal = computed<SiteContent>(() =>
    this.languageService.language() === 'mr' ? (mrContent as SiteContent) : (enContent as SiteContent)
  );

  readonly content = toObservable(this.contentSignal);

  readonly currentLanguage = computed(() => this.languageService.language());
}
