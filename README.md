# React/NextJS Portfolio Website Grid layout test

I created this template to practice grid layouts and how it looks from a grid frame perspective.

## 🛠️ Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** GSAP (ScrollToPlugin)
- **Package Manager:** Yarn
- **Development:** ESLint, PostCSS

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Run development server:**
   ```bash
   yarn dev
   ```

3. **Build for production:**
   ```bash
   yarn build
   ```

4. **Start production server:**
   ```bash
   yarn start
   ```

## 🎨 UI Components

### Layout Components

**`Header.tsx`**
- Displays personal name, title, and description
- Clickable name serves as home navigation
- Responsive typography scaling

**`Navigation.tsx`**
- Sticky navigation menu with section links
- Active section highlighting
- Smooth scroll integration
- Social media links

**`Footer.tsx`**
- Simple copyright footer
- Dynamic year calculation

**`Content.tsx`**
- Main content wrapper with proper spacing
- Responsive layout container

**`Sidebar.tsx`**
- Left sidebar containing header and navigation
- Sticky positioning on larger screens

### Section Components

**`About.tsx`**
- Personal introduction and bio
- Multi-paragraph content support
- Responsive text layout

**`Experience.tsx`**
- Work experience showcase
- Uses `CardSection` for consistent layout
- "View Full Resume" external link

**`Projects.tsx`**
- Project portfolio display
- Uses `CardSection` for consistent layout
- "View Project Archive" external link

### UI Components

**`CardLayout.tsx`**
- Individual card component for jobs/projects
- Two-column responsive layout (date | details)
- External link integration with icon
- Skill tags display

**`CardSection.tsx`**
- Generic section wrapper for card-based content
- Reusable for Experience and Projects sections
- Integrated "View More" link support
- Follows DRY principles

**`Pill.tsx`**
- Skill/technology tag component
- Rounded, styled badges
- Consistent sizing and spacing

**`SectionHeader.tsx`**
- Section title headers ("About", "Experience", "Projects")
- Sticky positioning with backdrop blur
- Responsive visibility (hidden on large screens)

**`SmoothScrollLink.tsx`**
- Navigation links with smooth scrolling
- Integrates with `useSmoothScroll` hook
- Maintains accessibility attributes

**`ExternalLinkIcon.tsx`**
- Small icon indicating external links
- Consistent styling across components
- Accessibility friendly

**`ViewMoreLink.tsx`**
- "View more" style external links
- Used in Experience and Projects sections
- Integrated external link icon

**`SocialLinks.tsx`**
- Collection of social media links
- Consistent styling and spacing
- External link handling

## 📊 Content Management

### `data.ts`
Central content repository containing:
- Personal information (name, title, bio)
- About section paragraphs
- Work experience data
- Project information
- Social media links

### `routes.ts`
Navigation configuration:
- Section route definitions
- Centralized route management
- Hash-based navigation paths

## 🎣 Custom Hooks

The template includes several custom hooks to manage application state and behavior.

### **`useSmoothScroll.ts`**
- **Purpose:** Provides functions for smooth, animated scrolling.
- **Dependencies:** `gsap` with `ScrollToPlugin`.
- **Exports:**
    - `scrollToSection(sectionId, duration)`: Scrolls to a specific element ID with an offset to account for the header.
    - `scrollToTop(duration)`: Scrolls smoothly to the top of the page.

### **`useActiveSection.ts`**
- **Purpose:** Determines which navigation section is currently visible in the viewport.
- **How it works:** Uses the `IntersectionObserver` API to "spy" on the content sections. It updates the active section state based on which section is intersecting with the viewport. This is used to highlight the active link in the navigation menu.
- **Returns:** The `href` string (e.g., `/#about`) of the currently active section.

### **`useNavigation.ts`**
- **Purpose:** A comprehensive hook that manages URL state and ties together scrolling behavior with browser history.
- **How it works:**
    - Handles the initial page load by scrolling to the section specified in the URL hash (if any).
    - Listens for `hashchange` events to handle browser back/forward button navigation.
    - Provides `navigateToSection` and `navigateToHome` functions that both perform a smooth scroll and update the URL hash using `window.history.pushState`.

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Breakpoints:** Tailwind's responsive system
- **Navigation:** Collapsible mobile menu
- **Typography:** Responsive font scaling
- **Layout:** Flexible grid system

## 🐛 Debugging and Testing

This template includes utilities to help with layout debugging and component identification during development.

### **`src/styles/debug.css`**
To visualize the borders of all components and debug layout issues, simply import this CSS file into a layout or page component (e.g., `src/app/layout.tsx`).

```tsx
import '@/styles/debug.css';
```
This applies a `1px solid red` border to every element, making it easy to see the dimensions and positioning of your components. Remember to remove the import before deploying to production.

### **`src/utils/tagPrefix.tsx`**
This utility provides a set of higher-order functions to prefix content with a tag (e.g., "H1:", "P:"). This is useful for identifying which component is rendering a piece of text during debugging.

**Example Usage:**
In your component, wrap your text content with one of the helper functions:

```tsx
import { withPPrefix } from '@/utils/tagPrefix';

const MyComponent = () => (
  <p>{withPPrefix("This is my paragraph text.")}</p>
);
// Renders: <p>P: This is my paragraph text.</p>
```
The file includes helpers like `withH1Prefix`, `withPPrefix`, `withDivPrefix`, etc.
