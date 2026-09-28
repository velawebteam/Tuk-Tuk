/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const GA_TRACKING_ID = 'AW-18443286620';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event for booking clicks
export const trackBookingClick = (tourName: string, method: 'FareHarbor' | 'WhatsApp') => {
  trackEvent('click_booking', 'Engagement', `${method}: ${tourName}`);
  
  // Also track as a conversion if needed for Google Ads
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GA_TRACKING_ID}/booking_click`,
      'event_category': 'Booking',
      'event_label': tourName,
    });
  }
};
