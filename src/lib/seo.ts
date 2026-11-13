import type { Metadata } from 'next';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://nmr-properties.vercel.app').replace(/\/$/, '');
export function pageMetadata(title: string, description: string, path: string, image = '/opengraph-image'): Metadata {
  const fullTitle = `${title} | NMR Properties`;
  return { title, description, alternates: { canonical: path }, openGraph: { type: 'website', siteName: 'NMR Properties', title: fullTitle, description, url: path, images: [{ url: image, alt: 'NMR Properties architectural construction and property development' }] }, twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] } };
}
