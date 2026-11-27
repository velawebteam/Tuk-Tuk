import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n/i18n';

// Remove static pre-rendered SEO tags before React mounts dynamic Helmet tags (prevents React 19 duplicate JSON-LD / meta tags)
document.querySelectorAll('[data-static-seo="true"]').forEach((el) => el.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
