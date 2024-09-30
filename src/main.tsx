import '@/instrument.js';
import * as Sentry from '@sentry/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App';

import { ToastProvider } from 'lib/toast';

import './index.css';
import { mswWorker } from './mocks';

if (import.meta.env.DEV && import.meta.env.VITE_MSW_MODE === 'on') {
  mswWorker.start();
}

ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
ReactGA.send('pageview');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Sentry.ErrorBoundary>
    <React.StrictMode>
      <main className='flex h-[100dvh] flex-col bg-grey-100 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] scrollbar-hide sm:mx-auto sm:w-[375px]'>
        <ToastProvider>
          <App />
        </ToastProvider>
      </main>

      <div id='_toast' />
    </React.StrictMode>
  </Sentry.ErrorBoundary>,
);
