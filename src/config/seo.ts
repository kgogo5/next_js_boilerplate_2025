// src/config/seo.ts
import type { Metadata } from 'next';

export const SITE_NAME = 'Boilerplate 2025';
export const SITE_URL = 'https://www.sitename.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export const defaultMetadata: Metadata = {
  title: SITE_NAME,
  description: 'Next.js 15 기반 프론트엔드 보일러플레이트입니다.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: 'Next.js 15 기반 프론트엔드 보일러플레이트입니다.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Next.js 15 기반 프론트엔드 보일러플레이트입니다.',
    images: [DEFAULT_OG_IMAGE],
  },
};
