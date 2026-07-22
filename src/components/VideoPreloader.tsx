import { useEffect, useState } from 'react';

/**
 * Silent preloader for YouTube background videos.
 * Renders hidden iframes to trigger browser connection and caching
 * after the main page has settled.
 */
export function VideoPreloader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Wait for the initial site load to finish before preloading extra assets
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <div 
      className="fixed pointer-events-none opacity-0 -z-50 overflow-hidden w-px h-px" 
      aria-hidden="true"
    >
      {/* Tuk Tuk Video Preload */}
      <iframe
        src="https://www.youtube.com/embed/8ZDu00ylXKY?autoplay=0&mute=1&controls=0"
        title="preload-tuktuk"
      />
      {/* Jeep Video Preload */}
      <iframe
        src="https://www.youtube.com/embed/SMnjhz8hjaY?autoplay=0&mute=1&controls=0"
        title="preload-jeep"
      />
    </div>
  );
}
