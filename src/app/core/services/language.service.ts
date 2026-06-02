import { Injectable, signal } from '@angular/core';
import { SupportedLanguage } from '../models/content.model';

const LANGUAGE_KEY = 'trisha.language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly defaultLang: SupportedLanguage = 'en';
  readonly language = signal<SupportedLanguage>(this.readLanguage());

  setLanguage(lang: SupportedLanguage): void {
    this.language.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LANGUAGE_KEY, lang);
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.language() === 'en' ? 'mr' : 'en');
  }

  isMarathi(): boolean {
    return this.language() === 'mr';
  }

  private readLanguage(): SupportedLanguage {
    if (typeof localStorage === 'undefined') {
      return this.defaultLang;
    }
    const stored = localStorage.getItem(LANGUAGE_KEY);
    return stored === 'mr' ? 'mr' : 'en';
  }
}
