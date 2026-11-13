import { ImageResponse } from 'next/og';
export const alt = 'NMR Properties — construction and property development';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
 return new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',background:'#19252a',color:'#f5f2ec',padding:'70px 85px',flexDirection:'column',justifyContent:'space-between',fontFamily:'sans-serif'}}><div style={{display:'flex',alignItems:'center',gap:20,color:'#b48a58',fontSize:25,letterSpacing:8}}>NMR <span style={{color:'#f5f2ec',fontSize:16,letterSpacing:5}}>PROPERTIES</span></div><div style={{display:'flex',flexDirection:'column'}}><div style={{fontSize:65,letterSpacing:-2,lineHeight:1.05}}>WE BRING VISIONS</div><div style={{fontSize:65,letterSpacing:-2,lineHeight:1.05,color:'#b48a58'}}>TO LIFE.</div><div style={{fontSize:23,color:'#cbd2cc',marginTop:30}}>Architecture · Construction · Development</div></div><div style={{fontSize:15,letterSpacing:3,color:'#b6c0b9'}}>SOUTH AFRICA & ACROSS AFRICA</div></div>,size);
}
