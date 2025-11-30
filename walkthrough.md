# Timeline Redesign & Integration

I have redesigned the `Timeline` component to incorporate the "Selected Works" section directly into the timeline, creating a cohesive vertical timeline experience.

## Changes

### 1. Vertical Timeline Layout
- Converted the timeline from a horizontal scroll to a classic vertical timeline.
- Added a vertical line with markers for each experience item.
- Improved spacing and typography for better readability.

### 2. Integrated Selected Works
- Merged the "Selected Works" data into the `Experience` data structure.
- Work items (Case Studies, Projects, Links) are now displayed nested under their corresponding Experience role.
- Removed the separate `Projects` section from the Home page.

### 3. Visual Enhancements
- Added icons for work items:
  - `📄` File icon for Case Studies (Internal links)
  - `🔗` Link icon for External links
- Added hover effects for timeline items and work items.
- Used CSS variables for consistent theming.

## Files Modified
- `src/components/Timeline.jsx`: Updated data structure and JSX.
- `src/styles/Timeline.css`: Complete rewrite for vertical styling.
- `src/pages/Home.jsx`: Removed `Projects` component.
- `src/styles/variables.css`: Added `--accent-color-rgb` for transparency effects.

## Verification
- Verified that all experience items are present.
- Verified that work items are correctly nested under their respective years/companies.
- Verified that internal and external links are handled correctly with appropriate icons.
