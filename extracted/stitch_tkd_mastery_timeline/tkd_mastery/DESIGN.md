---
name: TKD Mastery
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb3b4'
  on-secondary: '#680016'
  secondary-container: '#ac012c'
  on-secondary-container: '#ffb7b8'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b4'
  on-secondary-fixed: '#40000a'
  on-secondary-fixed-variant: '#920023'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  gutter: 24px
  margin: 48px
  container-max: 1200px
---

## Brand & Style

This design system is built upon the core tenets of ITF Tae Kwon Do: Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit. The aesthetic direction follows a **Minimalist-Tactile** hybrid approach. It strips away unnecessary digital clutter to focus on the "Do" (the way), utilizing heavy whitespace to evoke a sense of meditative focus. 

The personality is disciplined and prestigious, mimicking the environment of a high-end Dojang. We utilize structural rigor from modern design movements but soften the digital coldness with organic textures—specifically the fibrous grain of Hanji paper—and calligraphic flourishes. The goal is to make the practitioner feel they are interacting with a living legacy rather than a mere tracking tool.

- **Minimalism:** Used for layout structure and navigational clarity.
- **Tactile:** Used in surface treatments (Hanji paper) to ground the digital experience in the physical world.
- **High-Contrast:** Used to represent the clarity of a strike and the distinction between ranks.

## Colors

The palette is a direct reflection of the martial arts philosophy. Deep Black (#1A1A1A) serves as the primary canvas, representing the maturity and proficiency of a black belt. Martial Red (#C41E3A) is used sparingly for critical actions, urgency, and the "vital spots" of the interface. Metallic Gold (#D4AF37) is reserved for achievements, master-level milestones, and prestigious accents.

- **Primary (Deep Black):** Backgrounds and primary containers.
- **Secondary (Martial Red):** Primary buttons, progress indicators, and active states.
- **Tertiary (Metallic Gold):** Rank iconography, rewards, and high-level headers.
- **Neutral (Pure White):** Typography and iconography for maximum legibility against the dark void.

The default mode is **dark**, ensuring that the "Metallic Gold" and "Martial Red" feel luminescent and significant.

## Typography

Typography in this design system balances authoritative tradition with modern utility. 

**Noto Serif** is used for all headlines. It carries a literary and historical weight that commands respect. For the most prestigious headings, use a tighter letter spacing to create a sense of density and impact.

**Work Sans** is used for all functional text. Its neutral, grounded nature ensures that complex technical instructions or timeline details are easily digestible. 

For labels and navigational sub-headers, use the `label-caps` style. The increased letter spacing and uppercase transform evoke the disciplined labeling found in traditional martial arts scrolls and certificates.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** model to ensure the timeline remains the central vertical axis of the experience. We utilize a 12-column system with generous margins to represent the "empty space" required for movement in a Dojang.

- **The Timeline Axis:** A central or left-aligned vertical "calligraphy" line (2px wide) anchors the content.
- **Rhythm:** An 8px base unit governs all padding and margins. 
- **Hierarchy:** Use exaggerated vertical spacing (64px+) between major rank milestones to signify the time and effort required to bridge them.

## Elevation & Depth

This design system avoids traditional drop shadows, which feel too "software-centric." Instead, depth is achieved through **Tonal Layering** and **Materiality**:

- **Layer 0 (Base):** Deep Black (#1A1A1A).
- **Layer 1 (Cards):** A slightly lifted black (#252525) with a subtle Hanji paper texture overlay at 5% opacity.
- **Layer 2 (Modals/Popovers):** Pure White or Martial Red, used to "pierce" the dark background.

**Dividers:** Use calligraphic strokes—lines with varying thickness—rather than static 1px borders. These should look like they were applied with a brush, tapering at the ends.

## Shapes

The shape language of this design system is **Sharp (0px)**. 

In Tae Kwon Do, precision and crisp execution are paramount. Rounded corners suggest a softness that contradicts the disciplined tone of the product. 
- **Containers:** All cards, buttons, and input fields must have 90-degree angles.
- **Accents:** Use geometric Korean lattice patterns (Ganjamullon) as clipped masks or background decorations to break up large rectangular blocks without sacrificing the sharp-edged aesthetic.

## Components

### Buttons
Primary buttons are solid Martial Red with White text, using `label-caps` typography. They feature a 1px Gold inner border for "Mastery" actions. Secondary buttons are ghost-style with White borders and sharp corners.

### Timeline Nodes
Milestone markers use the **Taeguk symbol**. Unlocked milestones are rendered in Gold; locked milestones are rendered in a low-opacity White stroke.

### Cards
Cards are constructed with the Layer 1 background (#252525) and a Hanji texture. A vertical calligraphic line should run down the left edge of cards that represent "Lessons" or "Techniques."

### Input Fields
Inputs are simple 1px White bottom-borders (minimalist/architectural) rather than full boxes. Labels float above in Gold when the field is active.

### Progress Bars
Progress is displayed as a segmented bar, where each segment represents a "Grade" or "Geup." Completed segments are solid Martial Red; the current segment pulses with a subtle Gold glow.

### Decorative Dividers
Inspired by calligraphy, these lines should have a "pressure" effect—starting thin, thickening in the middle, and ending in a sharp point. Use these to separate major sections of the timeline.