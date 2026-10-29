# MYDS

The Malaysian Government Design System: a design guideline and a component library for building consistent, accessible government digital services.

## Language

### Tokens

**Primitive colour**:
A raw, theme-independent colour value in a named scale (e.g. `gray-500`, `primary-600`).
_Avoid_: Base colour, raw colour, palette colour

**Semantic token**:
A role-named colour (`bg-*` background, `txt-*` text, `otl-*` outline, `fr-*` focus ring) that resolves to a primitive colour per theme.
_Avoid_: Alias, design token (too broad)

**Theme**:
One complete mapping of semantic tokens to primitive colours; MYDS ships a light and a dark theme.
_Avoid_: Mode, colour scheme

**Off-label pairing**:
A semantic token used for a visual role other than the one its prefix names, e.g. a text token (`txt-*`) filling a status dot. The role is what the element is, not the utility: a 1px divider filled with an outline token is still an outline, so it isn't off-label.
_Avoid_: Token misuse, cross-role token

**Foundation**:
A system-wide design rule that isn't a component: colour, typography, grid, spacing, radius, shadow, motion, iconography.
_Avoid_: Base styles, globals

**Off-scale value**:
A type size, line height, radius or spacing that renders outside the MYDS scale for its foundation, e.g. a Tailwind default text size (18/28) or checkbox's 5px radius. A value written in arbitrary syntax that lands on a scale step (`px-[10px]` = spacing `2.5`) is on-scale.
_Avoid_: Arbitrary value (that's the Tailwind syntax, which can land on-scale), custom value, non-standard

### Products

**Design guideline**:
The documented principles and per-component usage guidance aimed at designers.
_Avoid_: Design docs, style guide

**Component library**:
The React implementation of MYDS components that follows the design guideline.
_Avoid_: UI kit

**Page-level component**:
A component that frames a whole page rather than sitting inside content: Masthead, Navbar, Footer, AnnounceBar, SkipLink, CookieBanner.
_Avoid_: Layout, template, page pattern

**Page frame**:
The fixed arrangement of page-level components around a page's content: SkipLink → Masthead → Navbar … Footer.
_Avoid_: Layout, shell, chrome

**National mark**:
A mark of the Malaysian state (the flag, Jata Negara) that MYDS places itself, as opposed to the agency logo that the author supplies.
_Avoid_: Brand mark, logo

**Official service**:
A digital service run by a Malaysian government agency; the only kind of site that may show a national mark.
_Avoid_: Government site (a non-government site can look like one), agency site

**Template**:
A starter app scaffold wired to MYDS (`template/fe-template-*`); it carries no page design of its own.
_Avoid_: Page pattern, layout

### Components

**Variant**:
A named visual style of a component, chosen by the author (e.g. button `primary-fill`, callout `warning`).
_Avoid_: Type (the design guideline's word for it), style, kind

**State**:
A condition a component passes through at runtime rather than one the author picks: hover, focus, pressed, active, checked, disabled, invalid.
_Avoid_: Variant, mode

### Code vs guideline

**Divergence**:
A thing both the design guideline and the component library define, with different values (e.g. small-button radius: 6px in the guideline, 8px as built).
_Avoid_: Conflict, discrepancy, mismatch

**Gap**:
A thing only one of the design guideline and the component library defines (e.g. the guideline's h5 size, which the library never built).
_Avoid_: Omission, missing feature

**Defect**:
A place where the component library contradicts itself: a style it names but never generates, a stale name, or a token that resolves to the wrong scale.
_Avoid_: Bug, dead code

### Project

**Upstream**:
The original `govtechmy/myds` repository that this project continues from.
_Avoid_: Original repo, parent, source repo
