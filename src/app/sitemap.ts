import type { MetadataRoute } from 'next';
import { projects } from '@/data/site';
import { siteUrl } from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap { return ['','/about','/services','/process','/projects','/contact','/privacy',...projects.map(p=>`/projects/${p.slug}`)].map(path=>({url:`${siteUrl}${path}`})); }
