# Sincere Studio — Agency Website

A fully responsive agency website built for **Sincere Studio**, a creative team offering web design, digital products, and marketing & sales strategy. The project focuses on delivering a polished, animated user experience that communicates the studio's identity and showcases real client work.

> **Status:** In active development — contact form coming soon.

---

## Live Demo

🔗 [https://sincere-studio.vercel.app](https://sincere-studio.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Linting | ESLint 9 |

---

## Pages & Features

| Route | Description |
|---|---|
| `/` | Landing page with animated hero, services overview, work accordion, vision section, testimonials carousel, and CTA banner |
| `/services` | Expandable accordion listing Website, Digital Products, and Marketing & Sales services |
| `/projects` | Portfolio grid with all client case studies |
| `/projects/mano` | Case study — Mano |
| `/projects/lshot` | Case study — LShot |
| `/projects/wedwish` | Case study — WedWish |
| `/projects/matchwise` | Case study — MatchWise |
| `/projects/thefoodco` | Case study — The Food Co. |
| `/about-us` | Team values, who-we-are section, and core principles (Creativity, Simplicity, Integrity, Growth) |
| `/contacts` | Contact page *(form integration in progress)* |
| `/privacy-policy` | Legal page |

---

## Key Implementation Details

- **Responsive hero with dynamic clip-path** — a proportionally scaled hero section that interpolates an SVG `clipPath` based on viewport width, creating a custom shape that adapts cleanly across breakpoints.
- **Scroll + hover-triggered animations** — sections animate on viewport entry via `useInView` and also respond to mouse hover using Framer Motion, ensuring smooth transitions regardless of how the user interacts.
- **Adaptive service cards** — on desktop, cards expand on hover (width, height, padding, and shadow all animate); on mobile, each card fades in from the side on scroll.
- **Work accordion** — project case studies are presented in an interactive accordion component.
- **Testimonials carousel** — client testimonials displayed in an auto-scrolling carousel.
- **Scroll restoration** — `ScrollToTop` component resets scroll position on every route change.
- **Max-width layout container** — the entire app is constrained to `1728px` with responsive horizontal padding, matching the original design file dimensions.

---

## Project Structure

```
src/
├── App.jsx                         # Routes and layout wrapper
├── main.jsx                        # React entry point
└── components/
    ├── Layout.jsx                  # Shared layout with Navbar + Outlet
    ├── Navbar.jsx
    ├── Footer.jsx
    ├── ScrollToTop.jsx
    ├── common/
    │   ├── Button.jsx
    │   └── AnimatedArrowIcon.jsx
    ├── carousel/
    │   ├── WorkAccordion.jsx
    │   └── TestimonialsCarousel.jsx
    └── pages/
        ├── Landing.jsx
        ├── Services.jsx
        ├── Projects.jsx
        ├── AboutUs.jsx
        ├── Contacts.jsx
        ├── PrivacyPolicy.jsx
        ├── ProjectTemplate.jsx
        ├── Mano.jsx
        ├── LShot.jsx
        ├── Wedwish.jsx
        ├── MatchWise.jsx
        └── TheFoodCo.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Roadmap

- [ ] Contact form with backend integration
- [ ] SEO meta tags per page
- [ ] Deployment to production

---

## Author

Built by **Cristian G.** as part of Sincere Studio's own brand presence.
