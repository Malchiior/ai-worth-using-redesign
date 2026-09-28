# AI Worth Using redesign

Live: https://ai-worth-using-redesign.vercel.app

Public repository: https://github.com/Malchiior/ai-worth-using-redesign

An independent responsive redesign demo based on https://aiworthusing.com/. The original serif logo, real host portraits and episode cover images are retained. The approved visual direction uses ivory, forest green and pale chartreuse, editorial headings, clear calls to action and reusable directory/detail layouts.

## Run

Requires Node.js 20 or newer. No runtime packages or API keys are required.

```
npm run build
npm test
npm run dev
```

Open http://127.0.0.1:4173. Production assets are in `dist/`.

## Routes and behavior

- `/`: homepage; `/#season-1`: episode section.
- `/episodes`: all six original season-one guests.
- `/episodes/{guest-slug}`: episode details, original YouTube/Spotify/Apple links where available.
- `/episodes/teaser`: privacy-enhanced YouTube embed, no autoplay.
- `/agent-index`: six fictional seeded agents, search, categories and sorting.
- `/agent-index/{demo-slug}`: example detail page, bookmark, preset workflow, installation disclosure and comments.
- `/agent-index/publish`: validates and saves a demo agent in localStorage, then opens its detail page.
- `/builder-index`: eight fictional profiles, search/tool filters and seven-day/month activity controls.
- `/builder-index/u/{demo-slug}`: builder tools and illustrative activity.
- Known original agent slugs (listed in `src/data.js`) and observed builder slugs retain local pages linking to their original profiles. Actual profile datasets and integrations are not copied.
- `/builder-index/join`: official onboarding link and demo alternative.
- `/discord`: community page linking to the original site's Discord redirect.
- Unknown paths show an accessible not-found view.

## Demo boundaries

Index statistics and profiles are explicitly fictional. Publishing, bookmarks and comments persist only in the current browser and origin. They are not shared between visitors. No real login, GitHub OAuth, AI execution, messaging, telemetry ingestion or backend submission is simulated as successful. Original integrations are reached through explicit links to the original site. The demo is marked noindex to avoid competing with the original website. This is not a database-connected production replacement.

## Deployment

Deployed via the authenticated Vercel CLI to the `rclick/ai-worth-using-redesign` project. GitHub auto-deployment could not connect because the Vercel GitHub integration lacks access; CLI deployments work. From a linked checkout run `vercel deploy --prod --scope rclick`.

## Accessibility and assets

Semantic links, native form controls, visible keyboard focus, skip link, accessible mobile menu, live result counts, image alt text, and reduced-motion CSS are included. Source images total under 900 KB. Host images already use WebP; offscreen images are lazy loaded. Google Fonts provides Instrument Serif and DM Sans with local system fallbacks. No generated portraits are used in the implementation. See `ASSET-MANIFEST.json` and `PAGE-ASSET-MAP.md`.

## Verification

Production build and four Node tests pass: search/filter behavior, output escaping, image existence/HTTPS episode URLs, and unique seed IDs. Browser checks cover desktop/mobile homepage, mobile navigation, search and reset, saved-agent persistence, comments across reload, demo publishing and live route checks. No inquiries or messages were submitted to real recipients. A measured Sitemaxxing audit, full WCAG conformance audit and real backend integration tests were not performed.
