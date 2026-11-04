# Ashrafi Marine Products

A premium, mobile-first marketing site for **Ashrafi Marine Products** — a dry fish merchant and wholesale supplier based in Madh Island, Mumbai, serving trade buyers across India.

The site is built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and Framer Motion. It presents the product range, explains the wholesale process and routes every enquiry to the business through a pre-filled WhatsApp message.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export to ./out (also type-checks)
npm run start   # serve the exported ./out folder locally
npm run lint    # ESLint
```

The image preparation scripts require `sharp`, which is included as a dev dependency:

```bash
node scripts/prepare-images.mjs <source-folder>
node scripts/write-image-map.mjs
```

---

## Business details

All business content lives in [`src/content/site.ts`](src/content/site.ts). Update it there rather than editing individual pages.

| Field | Value |
| --- | --- |
| Business | Ashrafi Marine Products |
| Location | Madh Island, Mumbai, Maharashtra, India |
| Operating region | India |
| Amin Machiwala | +91 99300 83206 · [WhatsApp](https://wa.me/919930083206) |
| Rehan Macchiwala | +91 98675 14656 · [WhatsApp](https://wa.me/919867514656) |

The site intentionally does **not** publish a street address, map coordinates, prices, MOQs, certifications or delivery guarantees. Wholesale pricing is always framed as “shared on enquiry”.

---

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Cinematic home page, featured range, wholesale and coverage sections |
| `/about` | The business, who it serves and how it works |
| `/products` | Filterable product catalogue for Jawla, mixed and other varieties |
| `/wholesale` | Wholesale process, buyer types and pre-filled enquiry form |
| `/why-choose-us` | Six reasons to enquire, working principles and clarity notes |
| `/contact` | Direct contacts, location, enquiry form and FAQs |
| `/not-found` | Branded 404 |

`/wholesale?product=<slug>` pre-fills the enquiry form with a selected product. Slugs are defined on each product in `src/content/site.ts`.

---

## Enquiry form behaviour

There is **no backend and no database**. Submitting the form:

1. validates the fields in the browser (`src/lib/enquiry.ts`);
2. builds a formatted WhatsApp message;
3. opens `wa.me` in a new tab with the message ready to send.

The confirmation panel explicitly states that nothing has been stored on the website and offers a copy-to-clipboard fallback. If WhatsApp does not open, the panel shows a direct phone number.

To connect a real backend later, replace the `window.open(...)` call in [`src/components/enquiry-form.tsx`](src/components/enquiry-form.tsx) with a server action or API route, and update the confirmation copy so it reflects what is actually stored.

---

## Content and design system

- **Colours, type scale and component classes** — `src/app/globals.css`
  - navy `#071C2C`, marine `#123B52`, teal `#087F83`, pearl `#F8FAFA`, sand `#E8DCC5`, gold `#C5A46D`
  - Playfair Display for display type, Manrope for UI text
- **Logo** — `src/components/logo.tsx` (inline SVG, light/dark and compact variants)
- **Favicon** — `public/icon.svg`
- **Photography map** — `src/content/images.ts` (paths, alt text, dimensions and blur placeholders)
- **Navigation, products, regions, process steps, FAQs** — `src/content/site.ts`

### Replacing the stock photography

The photographs in `public/images` are stock images used as placeholders. Replace the `.webp` files with your own licensed photography before launch, keeping the same file names and aspect ratios where possible. Then update the matching `alt` text in `src/content/images.ts` so it describes the real image.

The current Jawla image (`product-jawla.webp`) is a CC0 (public domain) photograph of dried shrimp by Fumikas Sagisavas, sourced from Wikimedia Commons. CC0 does not require attribution, but the source is noted here for provenance. Replace it with your own photograph of dried tiny prawns before launch.

To regenerate optimised WebP files and blur placeholders from a folder of JPGs:

1. Name the source files to match the names in `scripts/prepare-images.mjs` (for example `product-jawla.jpg`).
2. Run `node scripts/prepare-images.mjs "C:/path/to/photos"`.
3. Run `node scripts/write-image-map.mjs`.

The scripts resize, convert to WebP, generate low-resolution blur data URLs and rewrite `src/content/images.ts`. If you change dimensions, the generated file handles the metadata automatically.

---

## SEO and metadata

- Per-page metadata and canonical URLs are set in each `page.tsx` using the `pageMetadata` helper in `src/lib/metadata.ts`, which keeps the shared Open Graph image, type and site name on every page.
- Global metadata, Open Graph and Twitter cards are in `src/app/layout.tsx`.
- `public/og-image.png` is the 1200×630 social preview image.
- `src/app/sitemap.ts` and `src/app/robots.ts` publish crawl directives.
- Organization + LocalBusiness JSON-LD is emitted from the root layout (locality only, no street address).

Set the production origin with an environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://www.ashrafimarineproducts.com
```

For a GitHub Pages project site, also set the sub-path the site is served from:

```bash
NEXT_PUBLIC_BASE_PATH=/ashrafi-marine
```

`NEXT_PUBLIC_SITE_URL` must be the origin only (no sub-path). Canonical URLs, Open Graph tags, the sitemap, robots and JSON-LD are all built from `NEXT_PUBLIC_SITE_URL` + `NEXT_PUBLIC_BASE_PATH`. If unset, the site falls back to `https://www.ashrafimarineproducts.com` with no sub-path.

---

## Accessibility and motion

- Semantic landmarks, skip link, visible focus rings and labelled form fields with inline errors.
- The enquiry form moves focus to the first invalid field and announces errors with `role="alert"`.
- Product filters use `aria-pressed`; FAQ items use native `<details>/<summary>`.
- All animations respect `prefers-reduced-motion`, including scroll reveals, parallax and marquee motion.
- Colour combinations are chosen for readable contrast on the navy and pearl surfaces.

---

## Project structure

```text
src/
  app/                 routes, layout, SEO files, 404
  components/          layout, brand, motion and page sections
  components/home/     home-page sections
  content/             business content and image metadata
  lib/                 enquiry validation, WhatsApp helpers, class utils
public/images/         optimised WebP photography + manifest
scripts/               image preparation and image-map generation
```

---

## Deployment

The site is configured as a **static export** (`output: "export"` in `next.config.ts`) and is deployed to GitHub Pages by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). No Node.js server or environment secrets are required at runtime.

### Live URL

```text
https://keytech-global.github.io/ashrafi-marine/
```

### How the workflow works

1. Pushes to `main` (or a manual run) trigger the workflow.
2. `npm ci` installs dependencies and `npm run build` writes the static site to `out/`.
3. The build uses:
   - `NEXT_PUBLIC_SITE_URL=https://keytech-global.github.io`
   - `NEXT_PUBLIC_BASE_PATH=/ashrafi-marine`
4. The `out/` folder is uploaded as a Pages artifact and deployed.

To enable Pages for a repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** (or run `gh api -X POST repos/OWNER/REPO/pages -f build_type=workflow`).

### Deploying from this machine

Authenticate GitHub CLI with an account that can push to the target repository, then create and push:

```bash
gh auth login --hostname github.com --git-protocol https --with-token
gh auth status
gh repo create KeyTech-Global/ashrafi-marine --public --source=. --remote=keytech --push
```

If pushing to a repository that already exists:

```bash
git remote add keytech https://github.com/KeyTech-Global/ashrafi-marine.git
git push -u keytech main
```

The repository must be **public** to use GitHub Pages on a free plan.

### Custom domain later

If the site moves to its own domain, remove `NEXT_PUBLIC_BASE_PATH` (or set it to an empty string), set `NEXT_PUBLIC_SITE_URL` to the domain, and add the domain under **Settings → Pages → Custom domain**. Rebuild and redeploy after changing either value.
