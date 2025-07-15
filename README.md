# Portfolio Website Grid layout test

I created this template to practice grid layouts and how it looks from a grid frame perspective.  

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

## 🛠️ Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** GSAP (ScrollToPlugin)
- **Package Manager:** Yarn
- **Development:** ESLint, PostCSS

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Breakpoints:** Tailwind's responsive system
- **Navigation:** Collapsible mobile menu
- **Typography:** Responsive font scaling
- **Layout:** Flexible grid system
