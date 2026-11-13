import type { MetadataRoute } from 'next';
import { projects } from '@/data/site';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'https://example.com';return ['','/about','/services','/process','/projects','/contact','/privacy',...projects.map(p=>`/projects/${p.slug}`)].map(path=>({url:`${base}${path}`}))}
