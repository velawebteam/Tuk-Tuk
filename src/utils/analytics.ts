/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export const trackBookViaWhatsApp = (tourId: string, tourName: string, tourType?: string) => {
  trackEvent('book_via_whatsapp_click', {
    event_category: 'engagement',
    event_label: tourName,
    tour_id: tourId,
    tour_name: tourName,
    ...(tourType ? { tour_type: tourType } : {}),
  });
};
