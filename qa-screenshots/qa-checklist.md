# QA Report: Susan Chu Wu

**Date:** 2026-02-27
**URL (live):** https://cofoundy.github.io/portfolio-susan-chu/
**URL (intended):** https://susan-chu.cofoundy.dev (currently 404 - see issues)
**Status:** PASS (with 1 non-blocking issue)

## Data Validation
- [x] Name matches source: "Susan Chu Wu" -- matches config.ts
- [x] Email matches source: "susanchu214@hotmail.com" -- matches config.ts
- [x] Title matches source: "Coach Financiera Certificada" -- matches config.ts
- [x] No hallucinated data -- all companies, institutions, dates match config.ts exactly
- [x] WhatsApp number correct: +51997618020

## Requested Changes Verification
- [x] New color palette #F7D714 (yellow/gold) -- confirmed, used 86 times in HTML. Old #DCA54A is NOT present anywhere
- [x] Dark warm brown background #1a1008 -- confirmed as body and primary section background
- [x] "Programa" section present with full CFO+Coach content (id="programa")
- [x] CTA reads "Listo/a para ordenar tu empresa y tus finanzas?" -- confirmed exact match
- [x] Education has "Dos carreras" (not "Doble carrera") -- confirmed. "Doble carrera" is absent
- [x] PUCP course added: "Capacitacion en Finanzas Personales - Centro Cultural PUCP" -- confirmed
- [x] Services section has "Programa Integral CFO + Coach para MYPES" as service #04 -- confirmed
- [x] Nav has "Programa" link -- confirmed in floating header nav

## Programa Section Detail
- [x] Hero: "Ordena tu empresa. Ordena tu dinero. Ordena tus decisiones."
- [x] Problem framing section present
- [x] Two-column layout: "3 sesiones como CFO" + "3 sesiones personales"
- [x] "Que te llevas" checklist with 4 items
- [x] Investment section: USD 2,280
- [x] CTA: "Agenda tu sesion aqui" with WhatsApp link

## Clean Deploy
- [x] No watermarks or template logos visible
- [x] No placeholder text (no Lorem ipsum, no "Your name here", no [placeholder])
- [x] No template links (no "View source", "View on GitHub", "Fork this")
- [x] No "undefined" or "null" in content
- [x] No "javascript:void(0)" links
- [x] Cofoundy credit in footer is minimal and acceptable ("Hecho con [heart] por Cofoundy")

## Technical Health
- [x] CSS loads: /portfolio-susan-chu/_astro/index.CUKLU2SX.css -- HTTP 200
- [x] Profile image loads: /portfolio-susan-chu/profile.jpg -- HTTP 200
- [x] Favicon loads: /portfolio-susan-chu/favicon.svg -- HTTP 200
- [x] Google Fonts loaded: Inter + Playfair Display
- [x] Scroll reveal animations trigger correctly
- [x] Floating nav appears on scroll with all section links

## Visual QA (Screenshots)
- [x] Hero: Photo, name, title in yellow #F7D714, tagline, social links, stats bar -- all render correctly
- [x] About: Bio text, quote with yellow left border, 10 skill tags -- clean layout
- [x] Services: 5 service cards (01-05) in 2-column grid, includes CFO+Coach MYPES card
- [x] Experience: Timeline with yellow dots, 5 entries, dates match config
- [x] Education: 4 entries including Aden University MBA, UP with "Dos carreras", CONOCER, Formacion Continua with PUCP
- [x] Programa: Full landing-style section with problem/solution/investment/CTA structure
- [x] CTA/Contact: Large heading, WhatsApp button in yellow
- [x] Footer: Name, title, 4 social icons, copyright 2026, Cofoundy credit
- [x] Mobile: Responsive layout renders correctly, photo centered, text readable

## Issues Found
1. **[NON-BLOCKING] susan-chu.cofoundy.dev returns 404** -- The site is live at cofoundy.github.io/portfolio-susan-chu/ but the cofoundy.dev subdomain is not resolving to this repo. The astro.config.mjs has `site: "https://cofoundy.github.io"` and `base: "/portfolio-susan-chu"` which is correct for the GitHub Pages subdirectory URL. To fix the subdomain, either:
   - Add a CNAME file to the gh-pages branch with `susan-chu.cofoundy.dev`
   - Or configure the custom domain in GitHub repo settings
   - Then update astro.config.mjs to `site: "https://susan-chu.cofoundy.dev"` and remove the `base` property

## Evidence
- qa-full-page.png (full page overview)
- qa-hero.png (hero section with photo, name, stats)
- qa-about.png (about section with bio, quote, skills)
- qa-services.png (services/projects with 5 cards)
- qa-experience.png (experience timeline)
- qa-education.png (education with Dos carreras + PUCP)
- qa-programa.png (CFO+Coach programa section)
- qa-cta.png (CTA section + footer)
- qa-footer.png (footer with copyright and Cofoundy credit)
- qa-mobile-hero.png (mobile hero view)
- qa-mobile-full.png (mobile full page)
