# Dumami Hair logo system

Version: 1.1 approved · 9 August 2026

## Brand idea

**Precision woven into personal expression.**

The identity pairs the calm authority of an editorial wordmark with a custom flowing-hair D. Its vertical stem is a restrained feminine silhouette, while three open strands originate at her head and create the letter’s curved bowl. The result connects the initial directly to hair without relying on a crown, comb, scissors or literal braid illustration.

Design principles:

- Hair first: the mark frames the portfolio rather than competing with it.
- Precision before decoration: every curve and space should feel intentional.
- Quiet recognition: one distinctive device, repeated consistently.
- Editorial, not generic luxury: burgundy and high-contrast forms replace gold-script beauty clichés.

## Concept territories considered

1. **Flowing-hair D — selected.** A custom D built from a subtle feminine silhouette and three controlled hair strands. It links directly to the name, reads quickly, and works as an avatar.
2. **Woven M.** An interlaced monogram based on the repeated M in Dumami. Rejected because it made name recognition slower.
3. **Crown loop.** A circular mark derived from top-view braid partings. Rejected because crown and circular beauty emblems are crowded category territory.

## Logo family

- `dumami-wordmark.svg` — primary signature; the head-flow icon replaces the D and is optically aligned with UMAMI.
- `dumami-primary.svg` — production alias of the approved horizontal wordmark for document and export tooling.
- `dumami-stacked.svg` — centred alternate with the Hair · Lifestyle descriptor.
- `dumami-symbol.svg` — detailed standalone mark for social avatars, signage and high-attention applications.
- `dumami-symbol-small.svg` — simplified icon for favicons and sizes below 40 px.
- `../../../favicon.svg` — installed website favicon using the simplified mark.

All core letterforms are outlined vector paths. The descriptor in the stacked lockup remains editable live text so its final wording can change after client approval; it uses Arial/Helvetica as a neutral licensed system fallback.

Transparent PNG exports are supplied in `../../../exports/logo/` at 64, 128, 256, 512, 1024, 1432 and 1700 px as appropriate. Wine, white-reversed and near-black wordmark variants are included. Rebuild them with `../../../tools/export_logo_pngs.cjs` whenever an SVG master changes.

## Colour

- Dumami Wine: `#4A1721` — default logo colour and primary action.
- Deep Wine: `#2A0D13` — dark field and high-contrast application.
- Soft Ivory: `#F6EFE6` — preferred warm background.
- Warm White: `#FFFAF4` — reversed logo colour.
- Near Black: `#1B1415` — monochrome print fallback.

The SVG files use `currentColor`, with Dumami Wine set as the default. For a monochrome production file, change the SVG `color` value only; do not edit individual paths.

Approved combinations:

- Dumami Wine on Soft Ivory or Warm White.
- Warm White on Dumami Wine or Deep Wine.
- Near Black on white for office-print and one-colour production.
- White reversed over photography only when the image area behind the complete logo is consistently dark and calm.

## Clear space and alignment

Use the width of the wordmark’s vertical D stem as `x`.

- Wordmark: keep at least `2x` clear on every side.
- Horizontal lockup: keep at least `1.5x` around the complete lockup.
- Standalone symbol: keep at least `0.5x`, where `x` is the symbol’s own vertical stem.
- Align the wordmark visually by its cap line and baseline, not by the outer reach of the flowing strands.

## Minimum sizes

- Wordmark: 150 px wide on screen; 35 mm wide in print.
- Horizontal lockup: 150 px wide on screen; 35 mm wide in print.
- Detailed symbol: 40 px square on screen; 10 mm in print.
- Small-size symbol: 16–39 px square on screen.
- Stacked descriptor lockup: 180 px wide on screen; 45 mm wide in print.

Below these limits, use the simplified symbol and omit the descriptor.

## Production behaviour

- Positive, reversed and one-colour use are valid because the artwork does not rely on gradients or transparency effects.
- Keep the feminine silhouette and hair strands in one colour. Preserve the open space between the strands; never fill it with an accent colour.
- Do not stretch, skew, rotate, add shadows, outline the mark, change letter spacing or place the full logo inside a decorative badge.
- Do not use the detailed symbol at favicon size; the silhouette and fine strands will lose clarity.
- For embroidery, engraving or vinyl below 20 mm, run a physical proof and use the small-size symbol if the strand spacing begins to close.

## Test record

- Silhouette and counterforms: pass.
- Burgundy, black-equivalent and reversed use: pass in the supplied test sheet.
- Website header at 1440 × 1000: pass; rendered wordmark 156 × 36 px.
- Mobile header at 390 × 844: pass; no horizontal overflow and mobile navigation remains visible.
- Small-size mark at 16, 24, 32 and 40 px: pass using `dumami-symbol-small.svg`.
- Office-print and physical-production proofs: still required before manufacture.
- Five-second recognition and delayed-memory testing: recommended with real clients before final approval.

## Approval and legal status

The feminine-silhouette D and integrated Dumami wordmark are approved and installed across the website and discovery pack. The Hair · Lifestyle descriptor, broader palette and editorial direction still require final confirmation before a high-investment rollout.

The category resemblance review was a creative screen, not a trademark search or legal opinion. A formal UK trademark clearance should be completed before registration or a high-investment rollout.
