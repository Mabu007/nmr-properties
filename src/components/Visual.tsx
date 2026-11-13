import Image from 'next/image';
export function Visual({src,alt='',className='',priority=false}:{src:string;alt?:string;className?:string;priority?:boolean}){return <div className={`visual ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 70vw" style={{objectFit:'cover'}}/></div>}
