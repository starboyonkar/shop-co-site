# SHOP.CO — E-Commerce Fashion Store

A fully responsive e-commerce fashion storefront built with **React**, **TypeScript**, and **Tailwind CSS**.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple)

## 🛍️ Features

- **Homepage** — Hero banner, brand showcase, New Arrivals, Top Selling, Browse by Dress Style, and customer testimonials
- **Category Page** — Filterable product grid with sidebar filters (price range, colors, sizes, dress style) and pagination
- **Product Detail Page** — Image gallery, color/size selectors, quantity controls, tabbed reviews section with ratings
- **Cart Page** — Item management (update quantity, remove), order summary with subtotal, discount, and delivery fee calculation
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop viewports
- **Mobile Navigation** — Hamburger menu with slide-out drawer for smaller screens

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at **http://localhost:8080**.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static hosting provider.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/            # Images (hero, products, styles, icons)
├── components/
│   ├── ui/            # Reusable shadcn/ui components
│   ├── Header.tsx     # Site header with nav & search
│   ├── Footer.tsx     # Site footer with links
│   ├── Layout.tsx     # Page layout wrapper
│   ├── Newsletter.tsx # Email signup section
│   ├── ProductCard.tsx# Product display card
│   └── StarRating.tsx # Star rating display
├── hooks/             # Custom React hooks
├── lib/
│   ├── products.ts    # Product data & TypeScript interfaces
│   └── utils.ts       # Utility functions
├── pages/
│   ├── Index.tsx      # Homepage
│   ├── CategoryPage.tsx # Category listing with filters
│   ├── ProductPage.tsx  # Single product detail
│   ├── CartPage.tsx     # Shopping cart
│   └── NotFound.tsx     # 404 page
├── App.tsx            # Root component with routing
├── main.tsx           # Entry point
└── index.css          # Global styles & design tokens
```

## 🛣️ Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/category` | Category listing with filters |
| `/product/:id` | Product detail page |
| `/cart` | Shopping cart |

## 🎨 Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS 3** — Utility-first styling
- **Vite 5** — Build tool & dev server
- **React Router 6** — Client-side routing
- **shadcn/ui** — Accessible UI components
- **Lucide React** — Icon library

## 📄 License

This project is for educational/demo purposes.
