# TripCraft - Modern Travel Package Marketplace

A premium, responsive travel marketplace platform built with React, TypeScript, and Tailwind CSS. Browse, compare, and book the best travel packages easily in less than 3 minutes.

## 🌟 Features

### Core Features
- ✅ **Multi-Language Support** - Uzbek (UZ), Russian (RU), English (EN)
- ✅ **Light & Dark Mode** - Theme switcher for user preference
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Modern UI** - Glassmorphism effects, smooth animations
- ✅ **Package Management** - Browse, filter, and compare travel packages
- ✅ **Booking System** - Complete 5-step booking flow
- ✅ **Favorites System** - Save packages to favorites (LocalStorage)
- ✅ **Package Details** - Comprehensive package information with galleries
- ✅ **Customer Reviews** - Ratings and testimonials

### Pages
- Homepage with Hero Section
- Popular Tours Gallery
- Popular Destinations
- Package Detail Pages
- Complete Booking Flow
- Customer Reviews Section
- Why Choose TripCraft
- Professional Footer

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **i18next** - Multi-language support
- **Zustand** - State management
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd tripcraft
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
tripcraft/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PackageCard.tsx
│   │   ├── PopularTours.tsx
│   │   ├── PopularDestinations.tsx
│   │   ├── WhyChooseTripCraft.tsx
│   │   ├── CustomerReviews.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Page components
│   │   ├── PackageDetailPage.tsx
│   │   └── BookingPage.tsx
│   ├── store/              # Zustand state management
│   │   └── index.ts
│   ├── db/                 # Mock database
│   │   └── mockData.ts
│   ├── locales/            # i18n translations
│   │   ├── en.json
│   │   ├── ru.json
│   │   └── uz.json
│   ├── lib/                # Libraries & utilities
│   │   └── i18n.ts
│   ├── App.tsx             # Root component
│   ├── main.tsx            # React DOM render
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🎨 Color Scheme

- **Primary**: `#2563EB` (Blue)
- **Secondary**: `#06B6D4` (Cyan)
- **Accent**: `#F59E0B` (Amber)
- **Background**: `#F8FAFC` (Light)
- **Dark**: `#0F172A` (Dark slate)

## 🌍 Supported Languages

- **English** (EN) - Default
- **Русский** (RU) - Russian
- **Ўзбек** (UZ) - Uzbek

Switch languages using the language buttons in the navbar.

## 🎯 User Flow

### Browsing
1. Visit homepage
2. View popular tours and destinations
3. Use search bar to filter by destination, budget, duration

### Package Details
1. Click "View Details" on any package
2. See comprehensive information
3. Browse image gallery
4. Read customer reviews
5. Check included services

### Booking
1. Click "Book Now"
2. Choose package (Step 1)
3. Enter traveler information (Step 2)
4. Confirm booking details (Step 3)
5. Complete payment simulation (Step 4)
6. Get success confirmation (Step 5)

### Features
- Save packages to favorites ❤️
- Switch between light/dark mode 🌙
- Change language 🌍
- View recently viewed packages

## 💾 Data Storage

All data is stored in **LocalStorage** for offline functionality:

```javascript
- favorites: Package IDs saved by user
- recentlyViewed: Recently viewed packages
- user: User profile information
- bookings: User booking history
- theme: Light/Dark mode preference
- language: Selected language
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading with Framer Motion
- Optimized images
- Code splitting with React Router
- CSS optimization with Tailwind

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Then connect to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email support@tripcraft.com or visit our website.

---

**Made with ❤️ by TripCraft Team**

Last Updated: June 2026
