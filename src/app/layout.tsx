import type { Metadata } from 'next';
import { Header, Footer } from '@/components/Shell';
import { siteUrl } from '@/lib/seo';
import './globals.css';
const description = 'NMR Properties provides architectural design, residential and commercial construction, renovations and turnkey building solutions from Sandton across South Africa and Africa.';
export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: { default: 'NMR Properties | Construction & Property Development South Africa', template: '%s | NMR Properties' },
 description,
 alternates: { canonical: '/' },
 openGraph: { type: 'website', siteName: 'NMR Properties', title: 'NMR Properties | Construction & Property Development', description, url: '/', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'NMR Properties architectural construction' }] },
 twitter: { card: 'summary_large_image', title: 'NMR Properties | Construction & Property Development', description, images: ['/opengraph-image'] },
 robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 const structured = {'@context':'https://schema.org','@graph':[
  {'@type':'WebSite','@id':`${siteUrl}/#website`,url:siteUrl,name:'NMR Properties',inLanguage:'en-ZA'},
  {'@type':'GeneralContractor','@id':`${siteUrl}/#business`,name:'NMR Properties',url:siteUrl,telephone:'+27782651476',image:`${siteUrl}/images/architecture/EMCAF2.webp`,description:'Architectural design, construction and property development services.',address:{'@type':'PostalAddress',streetAddress:'155 West Street',addressLocality:'Sandton',addressRegion:'Gauteng',addressCountry:'ZA'},areaServed:[{'@type':'Country',name:'South Africa'},{'@type':'Place',name:'Africa'}]}
 ]};
 return <html lang="en-ZA"><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,'\\u003c')}}/></body></html>;
}
