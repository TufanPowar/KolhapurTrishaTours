import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LeadService {
  private readonly formSubmitEndpoint = 'https://formsubmit.co/ajax/tufanpowar@gmail.com';

  async sendLead(payload: Record<string, unknown>): Promise<void> {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    formData.append('_subject', 'New Inquiry - Trisha Tours & Cab Services');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    if (payload['email']) {
      formData.append(
        '_autoresponse',
        'Thank you for contacting Trisha Tours & Cab Services. We received your inquiry and will contact you shortly.'
      );
    }

    await fetch(this.formSubmitEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });
  }

  createWhatsappInquiryMessage(from: string, destination: string, days: string): string {
    return `Hello Trisha Tours & Cab Services, I have submitted an inquiry for a trip from ${from} to ${destination} for ${days} days.`;
  }
}
