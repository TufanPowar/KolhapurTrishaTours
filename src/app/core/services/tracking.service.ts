import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  track(event: string, payload: Record<string, unknown> = {}): void {
    const windowRef = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
    windowRef.dataLayer = windowRef.dataLayer ?? [];
    windowRef.dataLayer.push({ event, ...payload });
    if (windowRef.gtag) {
      windowRef.gtag('event', event, payload);
    }
    if (windowRef.fbq) {
      windowRef.fbq('trackCustom', event, payload);
    }
  }
}
