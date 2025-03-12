# CorporateX - Modern Corporate Web Solutions

CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS.

## Features

- 🚀 Next.js 14 App Router
- 💅 Modern design with TailwindCSS
- 🌙 Light/Dark theme support
- 📱 Fully responsive design
- ⚡ High performance
- 🔍 SEO friendly structure
- 🎨 Easy customization
- 🛠️ Type safety with TypeScript
- 🎭 Framer Motion animations
- 📦 Ready-to-use UI components (shadcn/ui)

## Getting Started

To run the project in your local environment:

```bash
# Clone the repository
git clone https://github.com/username/corporatex.git

# Navigate to the project directory
cd corporatex

# Install dependencies
npm install

# Start the development server
npm run dev
```

You can view the project by opening [http://localhost:3000](http://localhost:3000) in your browser.

## Technology Stack

- **Frontend Framework**: Next.js 14
- **CSS Framework**: TailwindCSS 3.x
- **Programming Language**: TypeScript 5.x
- **Animation**: Framer Motion
- **Form Management**: React Hook Form
- **Theme Switching**: next-themes
- **SEO**: next-seo
- **Icons**: React Icons
- **UI Components**: shadcn/ui

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Page routes
│   ├── components/        # React components
│   ├── lib/              # Helper functions
│   └── styles/           # Global styles
├── components/            # Shared components
│   ├── ui/               # UI components
│   └── sections/         # Page sections
├── lib/                  # Helper functions
└── types/                # TypeScript types
```

## Customization

### Theme Colors

You can customize theme colors by editing the CSS variables in the `src/app/globals.css` file:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... other colors */
}
```

### Typography

You can change the default font in the `src/app/layout.tsx` file:

```typescript
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

### Components

You can find UI components in the `src/components/ui` directory. Each component is created using shadcn/ui and can be easily customized.

## Theme Customization System

CorporateX offers a comprehensive customization system that allows users to create their own corporate websites with minimal technical knowledge:

### Color Themes
- 5+ ready-to-use color themes (Blue, Green, Red, Purple, Orange)
- Light/Dark mode support
- Custom color palette creation

### Typography
- 4+ font families (Inter, Poppins, Montserrat, Roboto)
- Scalable system for heading and text sizes

### Layout and Design
- Multiple header and footer styles
- Corner radius settings (Square, Slightly Rounded, Fully Rounded)
- Shadow effects and opacity settings

## Browser Support

CorporateX is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Image Credits

All images used in this theme are from [Unsplash](https://unsplash.com/) and are free to use under the [Unsplash License](https://unsplash.com/license).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help with the theme, please contact us:

- Website: [https://corporatex.com](https://corporatex.com)
- Twitter: [@corporatex](https://twitter.com/corporatex)
- Email: info@corporatex.com
