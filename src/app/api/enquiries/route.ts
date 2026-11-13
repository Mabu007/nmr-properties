import { NextResponse } from 'next/server';
export const runtime='nodejs';
const keys=['name','email','phone','location','service','budget','contactMethod','description'] as const;
export async function POST(request:Request){
 const type=request.headers.get('content-type')||''; if(!type.includes('application/json'))return NextResponse.json({error:'Invalid request.'},{status:415});
 const length=Number(request.headers.get('content-length')||0);if(length>16000)return NextResponse.json({error:'Your enquiry is too long.'},{status:413});
 let data:Record<string,unknown>;try{data=await request.json()}catch{return NextResponse.json({error:'Invalid request.'},{status:400})}
 if(!data||typeof data!=='object'||Array.isArray(data))return NextResponse.json({error:'Invalid request.'},{status:400});
 if(data.website)return NextResponse.json({error:'Unable to submit enquiry.'},{status:400});
 const clean:Record<string,string>={};for(const key of keys){const value=data[key];if(typeof value!=='string' || value.length>(key==='description'?5000:254))return NextResponse.json({error:'Please check your form entries.'},{status:400});clean[key]=value.trim();}
 if(keys.filter(k=>k!=='budget').some(k=>!clean[k])||!/^\S+@\S+\.\S+$/.test(clean.email)||!['Email','Phone','WhatsApp'].includes(clean.contactMethod))return NextResponse.json({error:'Please complete all required fields with a valid email address.'},{status:400});
 const endpoint=process.env.LEAD_WEBHOOK_URL;if(!endpoint)return NextResponse.json({error:'Online enquiries are not configured yet. Please call us on +27 78 265 1476.'},{status:503});
 let url:URL;try{url=new URL(endpoint);if(url.protocol!=='https:')throw Error()}catch{return NextResponse.json({error:'Online enquiries are unavailable. Please call us.'},{status:503})}
 try{const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.LEAD_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({...clean,submittedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000),cache:'no-store'});if(!response.ok)throw Error();return NextResponse.json({ok:true})}catch{return NextResponse.json({error:'We could not send your enquiry. Please try again or call +27 78 265 1476.'},{status:502})}
}
