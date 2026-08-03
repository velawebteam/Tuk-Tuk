import { useEffect, useState } from 'react';

/**
 * Silent preloader for YouTube background videos.
 * Renders hidden iframes to trigger browser connection and caching
 * after the main page has settled.
 */
export function VideoPreloader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Faster preloading for better initial experience
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <div 
      className="fixed pointer-events-none opacity-0 -z-50 overflow-hidden w-px h-px" 
      aria-hidden="true"
    >
      {/* Home Hero Video Preload */}
      <iframe
        src="https://www.youtube.com/embed/kd1Y8XVpAvI?autoplay=0&mute=1&controls=0&vq=hd1080"
        title="preload-home-hero"
      />
      {/* Tuk Tuk Video Preload */}
      <iframe
        src="https://www.youtube.com/embed/8ZDu00ylXKY?autoplay=0&mute=1&controls=0&vq=hd1080"
        title="preload-tuktuk"
      />
      {/* Jeep Video Preload */}
      <iframe
        src="https://www.youtube.com/embed/SMnjhz8hjaY?autoplay=0&mute=1&controls=0&vq=hd1080"
        title="preload-jeep"
      />
    </div>
  );
}
