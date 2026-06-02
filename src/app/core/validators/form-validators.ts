import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export const INDIAN_MOBILE_PATTERN = /^[6-9]\d{9}$/;
export const BRAND_NAME = 'Kolhapur Trisha Tours';

export const indianMobileValidators = [Validators.required, Validators.pattern(INDIAN_MOBILE_PATTERN)];

export function normalizeMobile(value: string | null | undefined): string {
  return (value ?? '').replace(/\D/g, '').slice(0, 10);
}

export function formError(
  control: AbstractControl | null,
  lang: 'en' | 'mr',
  field: 'name' | 'mobile' | 'email' | 'pickup' | 'destination' | 'days' | 'journeyDate' | 'adults' | 'vehicleType' | 'message'
): string | null {
  if (!control || !control.errors || !(control.touched || control.dirty)) {
    return null;
  }

  const errors = control.errors;
  const isMr = lang === 'mr';

  if (errors['required']) {
    const labels: Record<typeof field, [string, string]> = {
      name: ['Name is required.', 'नाव आवश्यक आहे.'],
      mobile: ['Mobile number is required.', 'मोबाईल नंबर आवश्यक आहे.'],
      email: ['Email is required.', 'ईमेल आवश्यक आहे.'],
      pickup: ['Pickup location is required.', 'पिकअप ठिकाण आवश्यक आहे.'],
      destination: ['Destination is required.', 'गंतव्य आवश्यक आहे.'],
      days: ['Number of days is required.', 'दिवसांची संख्या आवश्यक आहे.'],
      journeyDate: ['Journey date is required.', 'प्रवास तारीख आवश्यक आहे.'],
      adults: ['Number of adults is required.', 'प्रौढांची संख्या आवश्यक आहे.'],
      vehicleType: ['Vehicle type is required.', 'वाहन प्रकार आवश्यक आहे.'],
      message: ['Message is required.', 'संदेश आवश्यक आहे.']
    };
    return isMr ? labels[field][1] : labels[field][0];
  }

  if (errors['pattern'] && field === 'mobile') {
    return isMr ? '10 अंकी वैध मोबाईल नंबर टाका (6-9 पासून सुरू).' : 'Enter a valid 10-digit mobile number (starting with 6-9).';
  }

  if (errors['email']) {
    return isMr ? 'वैध ईमेल पत्ता टाका.' : 'Enter a valid email address.';
  }

  if (errors['min']) {
    return isMr ? `किमान ${errors['min'].min} आवश्यक आहे.` : `Minimum value is ${errors['min'].min}.`;
  }

  if (errors['minlength']) {
    return isMr
      ? `किमान ${errors['minlength'].requiredLength} अक्षरे लिहा.`
      : `Enter at least ${errors['minlength'].requiredLength} characters.`;
  }

  return isMr ? 'कृपया योग्य माहिती भरा.' : 'Please enter a valid value.';
}
