# Dumami Hair website prototype

Direction 1: Braided Editorial.

This is a static, responsive prototype built from the information currently available. It intentionally does not save customer data, reserve appointments or take payment.

[Explore the prototype](https://dumamihair.vercel.app/)

![dumamihair — existing portfolio capture](https://raw.githubusercontent.com/Alexthethunderboy/Portfolio/b4c8f605bdb311f2be00d14855b4914a3d662cf9/public/projects/previews/dumamihair.jpg)

Existing portfolio capture, verified 8 October 2026; not evidence of current uptime or completed validation.

## Logo system

The Dumami logo family is in `assets/brand/logo/`, with production guidance in `assets/brand/logo/README.md`. The approved feminine-silhouette D uses hair strands that originate at the head, and that same icon replaces the D in the optically aligned wordmark. The wordmark is installed in the header and footer; the responsive mark is installed as the favicon.

## Preview locally

From this directory:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Current prototype

- Editorial homepage and provisional service catalogue
- Locally stored thumbnails from Dumami Hair's public TikTok portfolio, linked to their source posts
- Responsive mobile navigation
- Four-step booking experience
- Honest draft labels for missing service, price and portfolio information
- Accessible keyboard focus, semantic structure and reduced-motion support

## Needed before launch

- Client-approved service names, prices, durations and options
- Client approval to publish the selected TikTok thumbnails, plus high-resolution originals where available
- Working hours, buffers, travel rules and calendar provider
- Revolut account type and approved Merchant integration credentials
- Cancellation, rescheduling, late-arrival, preparation and privacy policies
- Production database, secure booking holds, payment webhooks and notifications

No secrets should be committed to this repository. Payment and calendar credentials must remain server-side in the production build.

## Manual verification

Check desktop/mobile layout, menu keyboard access and the four-step booking flow. Confirm the interface does not imply a saved appointment or payment. These checks were not rerun for this documentation update.

---

Built by [Thunderboy](https://thunderboy.vercel.app).
