# CorporateX Documentation

Thank you for purchasing CorporateX! This documentation will help you get started with the theme and guide you through its features and customization options.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Theme Structure](#theme-structure)
4. [Customization](#customization)
   - [Theme Colors](#theme-colors)
   - [Typography](#typography)
   - [Layout Settings](#layout-settings)
   - [Component Variations](#component-variations)
5. [Pages](#pages)
6. [Components](#components)
7. [SEO](#seo)
8. [Performance](#performance)
9. [Troubleshooting](#troubleshooting)
10. [Credits](#credits)
11. [Support](#support)

## Introduction

CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS. It offers a comprehensive set of features and components that allow you to create a professional corporate website with minimal technical knowledge.

### Key Features

- **Modern Design**: Clean, professional design suitable for corporate websites
- **High Performance**: Optimized for speed and performance
- **Responsive Layout**: Fully responsive design that works on all devices
- **Theme Customization**: Easy customization of colors, fonts, and layout
- **Component Library**: Extensive collection of pre-built components
- **SEO Friendly**: Built with SEO best practices in mind
- **TypeScript Support**: Full TypeScript support for type safety
- **Dark Mode**: Built-in light and dark mode support

## Installation

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation Steps

1. **Extract the theme files** to your desired location.

2. **Navigate to the theme directory** in your terminal:
   ```bash
   cd path/to/corporatex
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to see the theme in action.

## Theme Structure

The theme follows a modular structure to make it easy to understand and customize:

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Page routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Shared components
│   ├── layout/            # Layout components (header, footer)
│   ├── sections/          # Page sections (hero, features, etc.)
│   └── ui/                # UI components (buttons, cards, etc.)
├── config/                # Configuration files
│   ├── site.ts            # Site configuration
│   └── theme.ts           # Theme configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── types/                 # TypeScript types
```

## Customization

CorporateX offers a comprehensive customization system that allows you to create your own corporate website with minimal technical knowledge.

### Theme Colors

The theme comes with 5 pre-defined color schemes:
- Blue (default)
- Green
- Red
- Purple
- Orange

To change the color theme, use the theme customizer in the top-right corner of the page or modify the `src/hooks/use-theme-customizer.ts` file.

### Typography

The theme includes 4 font families:
- Inter (default)
- Poppins
- Montserrat
- Roboto

To change the font family, use the theme customizer or modify the `src/hooks/use-theme-customizer.ts` file.

### Layout Settings

You can customize various layout settings:

- **Corner Radius**: Choose between Square, Slightly Rounded, or Fully Rounded corners
- **Header Style**: Multiple header styles available
- **Footer Style**: Multiple footer styles available

### Component Variations

Most components come with multiple style variations that you can choose from. Check the individual component documentation for details.

## Pages

CorporateX includes the following page templates:

- **Home Page**: Multiple variations
- **About Us**: Company information
- **Services**: Service listings and details
- **Team**: Team member profiles
- **Contact**: Contact form and information
- **Pricing**: Pricing tables
- **FAQ**: Frequently asked questions
- **404**: Custom error page

## Components

### Layout Components
- Header (multiple styles)
- Footer (multiple styles)
- Sidebar
- Mobile Menu

### Section Components
- Hero Section (multiple styles)
- Features Section
- Statistics Section
- Client Logos Section
- Testimonials Section
- Team Members Section
- Services Section
- Call to Action (CTA) Section
- Contact Form Section
- Pricing Tables
- FAQ Section

### UI Components
- Buttons
- Cards
- Forms
- Modals
- Dropdowns
- Tabs
- Accordions
- Tooltips
- Badges
- Alerts

## SEO

CorporateX is built with SEO best practices in mind:

- **Metadata**: Each page includes proper meta tags
- **Structured Data**: Schema markup for better search engine understanding
- **Semantic HTML**: Proper HTML structure for better accessibility and SEO
- **Performance**: Optimized for Core Web Vitals

To customize SEO settings, modify the metadata in each page file or update the global settings in `src/app/layout.tsx`.

## Performance

CorporateX is optimized for performance:

- **Lighthouse Score**: 90+ in all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for faster page loads
- **Font Optimization**: Optimized font loading

## Troubleshooting

### Common Issues

**Issue**: Theme customization settings are not persisting after page refresh.
**Solution**: Make sure localStorage is enabled in your browser.

**Issue**: Images are not loading.
**Solution**: Check that the image paths are correct and that the images exist in the public directory.

**Issue**: Development server won't start.
**Solution**: Make sure you have the correct Node.js version installed and that all dependencies are installed correctly.

## Credits

### Images
All images used in this theme are from [Unsplash](https://unsplash.com/) and are free to use under the [Unsplash License](https://unsplash.com/license).

### Icons
Icons are from [Lucide Icons](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/).

### Fonts
Fonts are from [Google Fonts](https://fonts.google.com/).

## Support

If you have any questions or need help with the theme, please contact us:

- **Email**: info@corporatex.com
- **Website**: [https://corporatex.com](https://corporatex.com)
- **Support Hours**: Monday to Friday, 9:00 AM to 5:00 PM (EST)

---

Thank you for choosing CorporateX! We hope you enjoy using our theme. 