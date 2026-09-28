/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};
