---
version: alpha
name: Revridge
description: A connected, locally grounded wealth journey for learning, planning, investing, and growth.
colors:
  primary: "#004B44"
  secondary-supporting-teal: "#006B62"
  tertiary-registration-lime: "#CAF300"
  deep-working-teal: "#00322D"
  ink: "#17201E"
  muted-ink: "#66706D"
  tertiary-ink: "#747D7A"
  subtle-icon: "#9AA29F"
  planning-field: "#F5F7F6"
  pale-form: "#F7F9FB"
  working-line: "#E2E7E5"
  white: "#FFFFFF"
  positive: "#2E7D32"
  destructive: "#B71C1C"
  warning: "#F59E0B"
typography:
  display:
    fontFamily: "Revridge Geist, sans-serif"
    fontSize: "6rem"
    fontWeight: 820
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Revridge Geist, sans-serif"
    fontSize: "4.8rem"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Revridge Geist, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 720
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Revridge Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  body-large:
    fontFamily: "Revridge Geist, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "Revridge Geist, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 680
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  xs: "8px"
  sm: "9px"
  control: "10px"
  md: "12px"
  panel: "14px"
  workbench: "16px"
  full: "9999px"
spacing:
  micro: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-min: "64px"
  section-max: "112px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.secondary-supporting-teal}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3.25rem"
  input:
    backgroundColor: "{colors.pale-form}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
    height: "3rem"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1rem"
  planning-workbench:
    backgroundColor: "{colors.planning-field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.workbench}"
    padding: "1.75rem"
  journey-marker:
    backgroundColor: "{colors.tertiary-registration-lime}"
    textColor: "{colors.deep-working-teal}"
    rounded: "{rounded.control}"
    size: "2.25rem"
  body-copy:
    textColor: "{colors.muted-ink}"
    typography: "{typography.body}"
  metadata:
    textColor: "{colors.tertiary-ink}"
    typography: "{typography.label}"
  subtle-icon:
    textColor: "{colors.subtle-icon}"
    size: "1.125rem"
  working-line:
    backgroundColor: "{colors.working-line}"
    height: "1px"
    width: "100%"
  status-positive:
    backgroundColor: "{colors.white}"
    textColor: "{colors.positive}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "1rem"
  status-destructive:
    backgroundColor: "{colors.white}"
    textColor: "{colors.destructive}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "1rem"
  status-warning:
    backgroundColor: "rgba(245, 158, 11, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "1.25rem"
---

# Design System: Revridge

## Overview

**Creative North Star: "The Layered Wealth Table"**

Revridge should feel like a clear working table where learning, local-market exploration, financial planning, and progress belong to one system. Soft green-gray drafting fields, deep-teal working lines, lime registration points, and white product plates make the experience credible and operational without losing approachability.

The voice is concise, plain, and locally grounded. Interfaces expose useful controls and real LuSE context early, use generous breathing room around dense working areas, and keep the Learn → Invest → Grow journey visible as one connected trajectory.

The visual world explicitly rejects dark or crypto-coded styling, generic AI-generated fintech imagery, over-minimal presentation, playful or gamified finance, corporate-bank heaviness, and verbose presentation.

**Key Characteristics:**

- Light drafting surfaces with crisp deep-teal structure.
- Lime registration points used sparingly to orient, select, and focus.
- White product plates that make live controls and data legible.
- Compact, precise controls with stable tabular numbers.
- Equal visual weight for Android and iOS actions.

## Colors

The palette is a locally grounded teal-and-lime system set on quiet green-gray fields; semantic colors communicate state and never become the brand atmosphere.

### Primary

- **Revridge Deep Teal:** The main action, trajectory, chart, selected-control, and focus color. It is the system's working ink.
- **Deep Working Teal:** The deeper footer, overlay, and high-contrast foundation used where a full dark field is functionally warranted.

### Secondary

- **Supporting Teal:** The interaction and hover companion to Revridge Deep Teal, especially where a state needs clear progression without changing brand family.

### Tertiary

- **Registration Lime:** A rare orientation accent for journey markers, active chart points, selection, focus, and small moments of confirmation. Pair it with deep teal text or linework.

### Neutral

- **Ink:** Near-black green for headings, primary text, and high-confidence data.
- **Muted Ink:** Body copy, explanations, risk context, and secondary information.
- **Tertiary:** Captions, helper text, timestamps, and lower-emphasis metadata.
- **Subtle Icon:** Quiet inactive iconography and low-emphasis utilities.
- **Planning Field:** The soft green-gray page and drafting-table background.
- **Pale Form:** A cool, nearly white form field and subdued control surface.
- **Working Line:** Borders, dividers, chart grids, and drafting guides.
- **White:** Product plates, cards, navigation, and high-clarity controls.

### Semantic

- **Positive:** Gains and successful form outcomes only.
- **Destructive:** Errors, losses, and destructive feedback only.
- **Warning:** Risk disclosures and cautionary messages only.

### Named Rules

**The Registration Point Rule.** Lime is a locating signal, not a broad background color; keep it to compact markers, active points, focus, and deliberate highlights.

**The Semantic Containment Rule.** Positive, destructive, and warning colors stay inside functional states and must not become section themes or brand accents.

## Typography

**Display Font:** Revridge Geist (with sans-serif fallback)  
**Body Font:** Revridge Geist (with sans-serif fallback)

**Character:** One variable sans family keeps the system approachable and direct. Weight, close display tracking, and disciplined scale create hierarchy without introducing decorative type or a corporate editorial voice.

### Hierarchy

- **Display** (weight 820, up to 6rem, line-height 0.88): Short hero statements such as Learn. Invest. Grow.; keep line breaks intentional.
- **Headline** (weight 760, up to 4.8rem, line-height 0.98): Section and page-level ideas, normally balanced and capped near 13 characters per line.
- **Title** (weight 720, 1.25rem, line-height 1.2): Panel titles, card headings, and calculator labels.
- **Body** (weight 400, 1rem, line-height 1.7): Explanations and operational copy, generally capped around 68 characters per line.
- **Body Large** (weight 400, 1.125rem, line-height 1.55): Introductory copy and high-priority supporting statements.
- **Label** (weight 680, 0.875rem, line-height 1.4): Buttons, compact controls, navigation, and form labels.

### Named Rules

**The Working Number Rule.** Prices, amounts, percentages, dates, and other changing values use tabular figures so controls and tables remain stable while data updates.

**The Short Headline Rule.** Use close tracking and strong weight for concise phrases; do not use oversized type to carry long or promotional copy.

## Layout

The site uses a fluid centered container no wider than 88rem with a 1rem edge gutter at the smallest viewport. General sections use responsive vertical padding from 4rem to 7rem, while reading-heavy content narrows to 76rem or less.

Desktop layouts use asymmetric grids when a working surface needs priority: concise context and actions occupy the smaller column, while the calculator, LuSE list, or product proof receives the larger column. The signature workbench divides into stacked regions on narrow screens and a compact list-plus-calculator grid on extra-wide screens. At widths below 640px, decorative drafting planes disappear; at 1024px, primary navigation and major multi-column structures expand; at 1440px, the full workbench grid is available.

Spacing follows a practical 4px base with recurring 8px, 12px, 16px, 24px, and 32px steps. Dense controls use the smaller steps; cards and major regions use 16–32px; section boundaries use the larger responsive rhythm.

**The Working Surface Priority Rule.** Give the operational area more width than its explanation whenever both share a viewport, but stack them cleanly rather than compressing controls on small screens.

## Elevation & Depth

The system is flat and border-first. Planning Field, White product plates, Working Line borders, tonal selection fills, drafting grids, and registration corners establish hierarchy. Soft depth is reserved for the signature planning workbench (`0 22px 70px rgba(0,75,68,0.09)`), with a very light settle shadow on its drafting planes (`0 16px 30px rgba(0,75,68,0.04)`). Modal overlays may lift above the page because they change interaction context; ordinary repeated panels stay flat.

### Shadow Vocabulary

- **Workbench Depth** (`0 22px 70px rgba(0,75,68,0.09)`): The singular soft shadow under the Layered Wealth Table.
- **Plane Settle** (`0 16px 30px rgba(0,75,68,0.04)`): A near-imperceptible end state for the workbench's layered drafting planes.

### Named Rules

**The Border-First Rule.** Repeated panels use a pale working line or tonal separation, not a wide shadow; never combine both treatments on every card.

**The One Workbench Rule.** Reserve broad ambient depth for the signature planning surface so it remains a recognizable focal object.

## Shapes

The form language is precise with compact softness. Interactive controls cluster around 9–10px corners, ordinary panels use 12–14px corners, and the signature workbench uses 16px. Circular geometry is reserved for slider thumbs, journey nodes, and other point-like indicators. Pale 1px borders define surfaces; drafting corners and straight trajectories add measured technical character without turning the interface into a schematic.

**The Compact Radius Rule.** Radius communicates scale: controls stay compact, panels step up once, and only the workbench receives the 16px silhouette.

## Components

### Buttons

Buttons feel precise, calm, and ready to act.

- **Shape:** Compact rounded rectangle (10px) with a minimum height of 3.25rem and balanced inline padding.
- **Primary:** Revridge Deep Teal with White text and a medium-strong label weight.
- **Hover / Focus:** Shift the filled background to Supporting Teal and lift by 2px over 200ms; use the global lime focus outline for keyboard focus.
- **Outlined:** White or transparent ground with a Deep Teal stroke and text; on hover it may fill Deep Teal.
- **Platform actions:** Android and iOS receive identical size, fill, typography, and prominence wherever both are offered.

### Chips

- **Style:** Compact 9px selection controls with short labels and a 2.25rem height.
- **State:** Selected chips use Deep Teal with White text; unselected chips use a pale tonal fill with Muted Ink and reveal Deep Teal on hover.

### Cards / Containers

- **Corner Style:** Ordinary product plates use 14px corners; larger proof groups may use 16px.
- **Background:** White cards sit on Planning Field or other quiet page bands.
- **Shadow Strategy:** Flat by default; see the Border-First Rule.
- **Border:** One Working Line stroke.
- **Internal Padding:** 1rem on compact panels, increasing to 1.25–2.25rem when the content or viewport permits.

### Inputs / Fields

- **Style:** 3rem-tall White or Pale Form fields with a 1px input stroke, 10px corners, and 1rem horizontal padding.
- **Focus:** The field border shifts to Revridge Deep Teal; keyboard focus also receives the global 3px lime-tinted outline with a 3px offset.
- **Error / Disabled:** Errors use Destructive text and a quiet destructive-tinted container where needed; disabled controls reduce opacity without changing layout.

### Navigation

Navigation is a 72px sticky White utility rail with a subtle bottom line. Links are compact, semibold, and Ink by default, shifting to Revridge Deep Teal on hover or active routes. Desktop shows concise links and equal filled platform actions; mobile uses a bordered 44px menu control, a simple vertical link stack, and a two-column platform-action row.

### LuSE Company Row

Company rows are compact working selections rather than promotional cards. Each row pairs a 36px ticker tile with a stable short code and muted company name; selected rows receive a pale teal fill and a Deep Teal tile, while unselected rows remain flat until hover.

### Investment Calculator

The calculator keeps controls and results in one White plate. Historical-period chips, a Deep Teal slider, tabular Kwacha values, a Deep Teal area trajectory, lime active dots, restrained grid lines, and explicit loading/error states make the data feel usable rather than decorative. Preserve its API-driven behavior and functional state hierarchy.

### Layered Wealth Table

The signature workbench is a 16px Planning Field surface that combines a faint 42px drafting grid, registration corners, translucent planes, a single Deep Teal trajectory, lime journey markers, and inset White product plates. It is the only repeated pattern allowed broad ambient depth. On narrow screens, simplify the decorative layers before reducing control clarity.

## Do's and Don'ts

### Do:

- **Do** keep Learn → Invest → Grow visible as one connected journey when a surface presents the full product.
- **Do** use White product plates and Working Line borders to organize live controls on Planning Field.
- **Do** keep Android and iOS actions equal in prominence, even when their availability language differs.
- **Do** preserve concise plain-language copy, real LuSE context, functional states, and tabular financial values.
- **Do** simplify decorative drafting layers on small screens while keeping every control usable.

### Don't:

- **Don't** introduce dark or crypto-coded styling, generic AI-generated fintech imagery, or neon-market spectacle.
- **Don't** make the interface over-minimal, playful, gamified, corporate-bank heavy, or verbose.
- **Don't** turn lime or semantic state colors into large decorative section fills.
- **Don't** apply both a wide shadow and a border to repeated panels.
- **Don't** give one platform action more visual weight than the other.
