export const site = { name: 'NMR Properties', phone: '+27 78 265 1476', address: '155 West Street, Sandton, Johannesburg, South Africa', whatsapp: 'https://wa.me/27782651476?text=Hi%20NMR%20Properties%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project.' };
// Photographs supplied for use by the client, stored locally for easy replacement.
export const images = { hero: '/images/architecture/EMCAF2.webp', about: '/images/architecture/Ntlatleng2.webp', services: '/images/architecture/Bamberger1.webp', detail: '/images/architecture/Lam2.webp', project: '/images/architecture/Biyela1.webp' };
export const services = [
 { title:'Architectural Design', text:'Concepts and architectural plans shaped around how a space looks, feels and functions.', detail:'From first sketches to considered building plans, we explore aesthetics, practical requirements and energy efficiency.' },
 { title:'Structural Planning', text:'Thoughtful structural planning coordinated with appropriately qualified professionals.', detail:'Structural drawings and planning are coordinated with suitably qualified professionals for the needs of each project.' },
 { title:'Turnkey Construction', text:'One connected journey from the initial idea to the finishing touches.', detail:'Design, construction, finishing and handover are brought together in a coordinated project journey.' },
 { title:'Residential Construction', text:'New homes and residential spaces made for the way you live.', detail:'From foundations to final finishes, we help turn residential ideas into carefully considered spaces.' },
 { title:'Commercial Construction', text:'Construction solutions for spaces built around business.', detail:'Practical construction solutions shaped around the requirements of commercial properties and their users.' },
 { title:'Foundations & Structural Works', text:'The essential groundwork for lasting spaces.', detail:'Foundation construction and structural building work form the basis for the next stages of your project.' },
 { title:'Electrical Installations', text:'Building electrical infrastructure planned for everyday use.', detail:'Electrical installations and infrastructure are coordinated as part of the wider building process.' },
 { title:'Plumbing', text:'Water, drainage and plumbing systems integrated with care.', detail:'Plumbing, drainage and water installations are considered as part of the complete project.' },
 { title:'Roofing', text:'Roof construction, installation and on-site truss manufacturing.', detail:'Roofing services include construction, installation and on-site roof truss manufacturing.' },
 { title:'Home Automation Planning', text:'Connected-home requirements considered from the start.', detail:'We plan for home automation and connected systems alongside the broader architectural requirements.' },
 { title:'Renovations & Alterations', text:'A new perspective on the spaces you already know.', detail:'Extensions, alterations and improvements transform existing properties to suit changing needs.' },
 { title:'Property Maintenance', text:'Considered care for the spaces you value.', detail:'Repair, upkeep and general property maintenance help keep spaces functioning as intended.' },
 { title:'Landscaping', text:'Outdoor spaces that complete the picture.', detail:'Landscaping and exterior finishing connect buildings to the spaces around them.' }
];
export const steps = [
 ['Your vision','Share your idea, requirements and objectives. We gather the information needed to understand your project.'],
 ['Concept development','Initial sketches and concepts are prepared for your review, helping establish a preferred direction.'],
 ['Architectural planning','Drawings consider appearance, functionality, energy efficiency and practical building requirements.'],
 ['Compliance & approvals','We coordinate applicable NHBRC requirements and assist with HOA and municipal submissions. Requirements depend on the project and current regulations.'],
 ['Construction','Following necessary approvals and project agreements, construction brings the plans to life.'],
 ['Finishing & handover','Final work, applicable inspections and completion checks lead to the handover of your space.']
];
// Project imagery supplied by the client; confirm detailed scope and location before adding them.
export type Project = { slug:string; title:string; category:string; location:string; description:string; scope:string; status:string; cover:string; gallery:string[]; featured:boolean };
export const projects: Project[] = [
 { slug:'biyela', title:'Biyela Residence', category:'Residential', location:'Location on enquiry', description:'A contemporary residence expressed through clean lines, generous glazing and carefully composed outdoor spaces.', scope:'Explore a selection of exterior and interior views of the residence.', status:'Details on enquiry', cover:'/images/architecture/Biyela1.webp', gallery:['/images/architecture/Biyela2.webp','/images/architecture/Biyela3.webp','/images/architecture/Biyela5.webp','/images/architecture/Biyela7.webp','/images/architecture/Biyela8-scaled.jpg'], featured:true },
 { slug:'bamberger', title:'Bamberger Residence', category:'Residential', location:'Location on enquiry', description:'A residential setting with a restrained palette and a strong connection to its outdoor spaces.', scope:'An architectural view of the residence.', status:'Details on enquiry', cover:'/images/architecture/Bamberger1.webp', gallery:[], featured:true },
 { slug:'ntlatleng', title:'Ntlatleng Residence', category:'Residential', location:'Location on enquiry', description:'Contemporary architecture opens onto a landscaped outdoor space.', scope:'An architectural view of the residence.', status:'Details on enquiry', cover:'/images/architecture/Ntlatleng2.webp', gallery:[], featured:true }
];
