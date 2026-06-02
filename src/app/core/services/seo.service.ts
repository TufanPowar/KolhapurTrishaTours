import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(config: { title: string; description: string; keywords: string; path: string }): void {
    const absoluteUrl = `https://trishatourskolhapur.com${config.path}`;
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: absoluteUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.setCanonical(absoluteUrl);
    this.setSchema([
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Kolhapur Trisha Tours',
        areaServed: 'Kolhapur, Maharashtra',
        telephone: '+919579858666',
        url: absoluteUrl
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Kolhapur Trisha Tours',
        serviceType: 'Cab Rental and Tour Packages',
        url: absoluteUrl
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kolhapur Trisha Tours',
        url: absoluteUrl
      }
    ]);
  }

  setSchema(schemaObjects: unknown[]): void {
    this.document.querySelectorAll("script[data-schema='dynamic']").forEach((el) => el.remove());
    schemaObjects.forEach((schemaObject) => {
      const script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema', 'dynamic');
      script.text = JSON.stringify(schemaObject);
      this.document.head.appendChild(script);
    });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
