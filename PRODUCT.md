# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is an adult in Zambia, especially a first-time or early-stage investor, who wants to build investing knowledge, plan financial goals, explore companies listed on the Lusaka Securities Exchange (LuSE), and invest when ready.

## Product Purpose

Revridge gives Zambian investors one connected journey for learning, planning, investing, and tracking financial progress. It exists to make local investing easier to understand and act on. Success means users can build confidence, make informed plans, progress into eligible LuSE investing when ready, and clearly follow their wider wealth journey.

## Positioning

Revridge's core difference is its connected **Learn → Invest → Grow** journey: plain-language financial education, planning tools, LuSE investing through operational licensed-broker partnerships, and progress tracking in one product.

Revridge is a **wealth-building platform**, not a LuSE trading app. The LuSE is the market where investing is available today, not the boundary of what the product is for; further instruments (for example US equities and unit trusts) are intended but are not part of the current version. Copy must therefore avoid two failure modes: presenting the LuSE as the whole purpose of the product, and presenting any not-yet-released instrument as available. Phrase the LuSE as what you can invest in *today* while learning, goals, planning, and net worth tracking describe the product itself.

## Operating Context

- Users may begin with education or financial planning before investing real money.
- Eligible users can explore LuSE-listed companies, complete required onboarding, and submit orders through Revridge.
- Orders are routed to operational licensed broker partners for review, execution, settlement, custody, and confirmation.
- Broker-confirmed activity and holdings are reflected alongside learning progress and financial goals.
- Android is publicly launched on the Google Play Store. iOS is currently in beta.

## Capabilities and Constraints

- Revridge is an investing technology and order-routing platform, not the executing broker.
- Revridge does not provide personalised investment advice.
- Licensed broker partners execute, settle, and custody eligible LuSE trades.
- Investing availability is subject to identity verification, broker approval, market conditions, and applicable product requirements.
- The homepage's calculator is the Grow Calculator: a generic, client-side compound-growth illustration (starting amount, monthly top-up, years, an illustrative annual-growth assumption). It makes no backend or market-data calls. It replaced an earlier version that fetched live LuSE closing prices per company/period, which was retired by explicit product decision (2026-08) over API load at scale — do not reintroduce a market-data-fetching calculator on this page without that decision being revisited.
- The Grow Calculator's growth-rate options (bank interest, government bonds, unit trusts) are illustrative comparison benchmarks, not products Revridge offers — unit trusts in particular are a planned future instrument (see Positioning) and must not be presented as available through Revridge today. Keep the disclaimer that the percentages are estimates, not guaranteed or current rates.
- Existing backend integrations, API contracts, submissions, routes, and functional behavior must be preserved unless a future product decision explicitly changes them.
- International-market expansion and other roadmap capabilities must not be presented as currently available.
- The exact legal entity wording is unresolved in the current website, which variously uses “Revridge Finance” and “Revridge Inc.” Future legal copy must preserve existing wording until the authoritative entity name is confirmed.

## Brand Commitments

- Product name: Revridge.
- Core product language: **Learn → Invest → Grow**.
- The product should communicate in plain language suitable for people who may be new to investing.
- Zambia and the LuSE are present-day product commitments, not generic market examples.
- The mobile app is the palette authority for the wider Revridge brand. Its core colors are primary deep teal `#004B44`, supporting teal `#006B62`, lime accent `#CAF300`, deep teal gradient stop `#00322D`, and white `#FFFFFF`.
- Brand neutrals are near-black green `#17201E`, muted gray-green `#66706D`, softer gray-green `#747D7A`, subtle icon gray-green `#9AA29F`, soft green-gray background `#F5F7F6`, pale gray-blue surface `#F7F9FB`, pale teal-gray border `#E2E7E5`, and white cards `#FFFFFF`.
- Semantic colors remain functional rather than becoming major brand colors: positive `#2E7D32` or `#4CAF50`, destructive `#B71C1C`, favorite/remove `#C43C4B`, warning `#F59E0B`, and net-worth accent `#7257B6`.
- Website UI should use deep teal buttons with white text, supporting teal interactions, lime accents with deep teal text, soft green-gray page backgrounds, white cards with pale borders, near-black headings, muted body copy, and deep teal charts and progress indicators.

## Evidence on Hand

- Existing website copy and product routes under `src/pages/`.
- Current reusable UI and marketing sections under `src/components/`.
- Real Revridge product screenshots and brand assets under `public/` and `src/assets/`.
- Current compliance, privacy, terms, FAQ, support, broker-routing, and risk-disclosure copy in the repository.
- A live Android Google Play listing linked from the download page.
- Operational licensed broker partnerships, confirmed by the product owner.
- No testimonials, customer counts, performance benchmarks, partner names, regulatory endorsements, or investment-return claims have been confirmed; future work must not fabricate them.

## Product Principles

1. Teach before assuming knowledge: explain investing and risk in direct, accessible language.
2. Connect the journey: learning, planning, LuSE investing, and progress should feel like parts of one coherent product.
3. Make responsibility visible: distinguish clearly between Revridge's technology role and the licensed broker's execution, settlement, and custody responsibilities.
4. Stay locally truthful: prioritize Zambia and currently supported LuSE capabilities over speculative expansion claims.
5. Preserve trust through functional continuity: visual redesigns must not disrupt established calculations, backend integrations, user submissions, or regulated-product disclosures.

## Accessibility & Inclusion

The experience must remain understandable for first-time investors, work across common mobile and desktop web contexts, and avoid relying on financial jargon or assumed market knowledge.
