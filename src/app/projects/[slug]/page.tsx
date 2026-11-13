import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { projects } from '@/data/site';
import { PageHero, FinalCTA } from '@/components/Sections';
import { Visual } from '@/components/Visual';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(x=>x.slug===slug);return p ? pageMetadata(p.title, p.description, `/projects/${p.slug}`, p.cover) : {}}
export default async function Project({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();return <><PageHero eyebrow={p.category} title={p.title} copy={p.description}/>
<section className="section-pad project-feature"><Visual src={p.cover} alt={`${p.title} exterior`} className="wide-visual"/></section><section className="section-pad editorial"><div className="editorial-grid"><h2>Project <em>details.</em></h2><div><p>{p.scope}</p></div></div>{p.gallery.map((src,i)=><Visual key={src} src={src} alt={`${p.title}, view ${i+1}`} className="wide-visual"/>)}</section><FinalCTA/></>}
