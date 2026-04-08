# QA Report: Susan Stephanie Chu Wu

**Date:** 2026-04-06
**URL:** https://susanchu.com
**Tier:** Premium S/.280
**Status:** PASS WITH WARNINGS

## Technical Health
- [x] HTML 200
- [x] CSS 200 (`/_astro/index.C8onrkhG.css`)
- [x] Profile 200 (`/profile.jpg`)
- [x] Favicon 200 (`/favicon.svg`)
- [ ] OG image — **NO OG meta tags found in HTML** (no `og:image`, no `og:title`)
- [x] Guia PDF 200
- [x] CV PDF 200

## Visual — Desktop (1280px)
- [x] CSS loaded — site is fully styled, dark gold theme renders correctly
- [x] Profile photo visible — professional headshot, gold border glow
- [x] Name correct — "Susan Chu Wu" matches config.ts
- [x] Title visible — "Experta en Finanzas Personales y de Negocio"
- [x] Colors match — dark brown/gold palette (#F7D714 accent, #1a1008 bg) consistent
- [x] Fonts loaded — Playfair Display + Inter rendering correctly (not system fallback)
- [x] All sections render — Hero, Programa (cinematic scroll), About, Servicios, Trayectoria, Formacion, Contact, Footer (8 sections)
- [x] No horizontal overflow
- [x] Spacing consistent — clean Premium layout throughout
- [x] Footer — "2026 Susan Chu Wu" correct, Cofoundy attribution present

## Visual — Mobile (375px)
- [x] Name fits — "Susan Chu Wu" fits within 375px without overflow
- [x] Photo sized correctly — proportional, centered, gold glow intact
- [x] Nav is mobile-friendly — social icons (WhatsApp, Instagram, LinkedIn) visible in hero, no desktop nav overflowing
- [x] Text legible — tagline, about text, all readable at mobile size
- [x] Cards stack vertically — service cards, experience cards all stack properly
- [x] No horizontal scroll — page fits 375px
- [x] Stats/metrics readable — 15+, Fundadora, 14+, 30+ all visible in 2x2 grid
- [x] Contact info accessible — WhatsApp CTA button, email, social links all present

## Client-Specific Verification (Complaint Items)
- [x] **Instagram link** → points to `https://www.instagram.com/finitipsoficial` (CORRECT, not "Ahorra con la China")
- [x] **No pricing/tarifa section** → 0 occurrences of "tarifa", "precio", "soles" on the page (CONFIRMED REMOVED)
- [x] **Stats** → "15+" / "Años de Experiencia" and "30+" / "Clientes Satisfechos" present in hero stats bar (CORRECT)
- [x] **"Gestión Financiera Integral"** → first service card title (CORRECT, no mention of "MYPES" anywhere)
- [x] **No MYPE reference** → grep confirms 0 matches for "MYPE" on deployed page

## Data Validation
- [x] Name: "Susan Chu Wu" — matches config
- [x] Email: info@susanchu.com — custom domain email
- [x] Phone: +51 997 618 020 — matches config
- [x] LinkedIn: linkedin.com/in/susan-chu-941992118 — real profile URL
- [x] Companies: Ahorra con la China, Finitips, UNE Asesores, Colectivo 23, PwC Peru — all from config
- [x] Education: Aden University, Universidad del Pacifico, CONOCER Mexico — from config
- [x] No hallucinated data detected

## Clean Deploy
- [x] No template default names
- [x] No placeholder text
- [x] No "undefined" or "null" values
- [x] Social links point to real profiles
- [x] No template default colors — custom dark gold palette active

## Premium Gates
- [x] **Swap test** — Custom "Programa" cinematic scroll section (9 scenes), dark gold luxury palette, unique layout structure — NOT a generic template fill
- [x] **Screenshot test** — Dark gold finance theme with professional photo clearly communicates financial coaching/consulting
- [x] **Unique section test** — "Programa" section with cinematic scroll storytelling is unique (4330px desktop height, parallax effects)
- [ ] **Design proposal match** — No design-proposal.md found to compare against (Premium redesign, may have been done informally)

## Issues Found
- **WARNING** — OG image missing: `/og.jpg` returns 404 and no Open Graph meta tags exist in the HTML. Social media sharing will show no preview image or title.
- **WARNING** — `/profile.png` returns 404 (site uses `/profile.jpg` instead — not a visual issue, just an asset path inconsistency).
- **WARNING** — No `design-proposal.md` file in client folder for Premium audit trail.

## Evidence
- desktop-full.png
- mobile-full.png
- 16 per-section screenshots in qa-screenshots/
