import { Injectable } from '@angular/core';
import { BRAND_NAME } from '../validators/form-validators';

export interface LeadSendResult {
  ok: boolean;
}

@Injectable({ providedIn: 'root' })
export class LeadService {
  private readonly formSubmitEndpoint = 'https://formsubmit.co/ajax/tufanpowar@gmail.com';

  async sendLead(payload: Record<string, unknown>): Promise<LeadSendResult> {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null && key !== 'honeypot') {
        formData.append(key, String(value));
      }
    });
    formData.append('_subject', `New Inquiry - ${BRAND_NAME}`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    if (payload['email']) {
      formData.append(
        '_autoresponse',
        `Thank you for contacting ${BRAND_NAME}. We received your inquiry and will contact you shortly.`
      );
    }

    try {
      const response = await fetch(this.formSubmitEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      return { ok: response.ok };
    } catch {
      return { ok: false };
    }
  }

  createWhatsappInquiryMessage(from: string, destination: string, days: string): string {
    return `Hello ${BRAND_NAME}, I need a quotation for a trip from ${from} to ${destination} for ${days} day(s).`;
  }
}
