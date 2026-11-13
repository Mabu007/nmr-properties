# NMR Properties

A React / Next.js App Router website, prepared for Vercel. The architectural photographs were sourced from marais4.co.za at the client’s request and stored locally. Confirm project scope, location and image usage rights before public launch.

## Setup

Use Node.js 20.9 or newer. Run `npm install`, copy `.env.example` to `.env.local`, configure the values, and run `npm run dev`. Run `npm run build` for a production build. Import the repository into Vercel and set the same environment variables in the Vercel project before deployment.

## Enquiries

Set `LEAD_WEBHOOK_URL` to an HTTPS endpoint that accepts a JSON POST and returns 2xx **only after** the enquiry has been delivered or durably saved. Configure that service to provide a private, access-controlled enquiry inbox for review. Optionally set `LEAD_WEBHOOK_TOKEN` to a secret bearer token expected by the endpoint. The website does not persist leads itself. If the endpoint is missing or fails, the form reports failure and offers the telephone number. The honeypot and server-side size and field checks provide basic spam protection; add rate limiting or a managed bot challenge at your edge before public launch. Test delivery and access control with the actual provider. Never commit secrets.

Set `NEXT_PUBLIC_SITE_URL` to the final production origin, without a trailing slash, for canonical metadata and the sitemap. Until then it defaults to example.com and must be changed before indexing.

## Images and projects

Place owned or properly licensed images in `public/images/hero`, `about`, `services`, `projects` or `architecture`. Change the centralized paths in `src/data/site.ts`. Replace `images.hero` to update the homepage hero. Use descriptive filenames and AVIF or WebP where practical; JPEG and PNG also work. A wide hero around 2400×1600 and other images around 1600–2400px wide are suitable starting points. Next Image serves responsive sizes and optimizes supported raster images; the hero is prioritized and other images load lazily. Update the image manifest when replacing photographs.

Add verified project records to `projects` in `src/data/site.ts`, including slug, title, category, location, description, scope, status, cover, gallery and featured. Project routes are generated from those records. Do not add unverified work or third-party project images without permission.

## Before launch

- Confirm that WhatsApp is available at the supplied number.
- Configure and test the lead endpoint and its private review workflow; add production rate limiting.
- Review the privacy notice with the business and its legal adviser, and confirm retention and provider details.
- Replace illustrations with approved imagery and update attribution/labels as appropriate.
- Set the final domain and verify metadata, sitemap, map, contact links and responsive pages.
- Confirm applicable payment arrangement wording and terms; none are represented as guaranteed.
