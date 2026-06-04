# Warung Indo Michigan 🇮🇩

A modern, high-performance landing page and product catalog for an Indonesian grocery store serving the diaspora community in Michigan. Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

**Live Demo:** [warungindomichigan.vercel.app](https://warungindomichigan.vercel.app)

---

## 📋 Overview

Warung Indo Michigan is a static e-commerce web application designed to showcase 250+ authentic Indonesian products (groceries, spices, snacks, beverages, health products). The site emphasizes direct customer engagement via WhatsApp integration and community building through a WhatsApp Group connector.

**Key Features:**
- 🛍️ **250+ Products** across 12 categories with live search
- 📱 **Fully Responsive** — optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** — pure static HTML/CSS/JS, no build step
- 🎨 **Modern Design** — UofM colors (Maize #FFCB05 & Blue #00274C)
- 🔍 **SEO Optimized** — Open Graph, Twitter Cards, JSON-LD structured data
- 📲 **WhatsApp Integration** — one-click product ordering
- 🎯 **Sticky Search Bar** — search & filter products while scrolling
- ✨ **Smooth Animations** — fade-in effects, hover states, skeleton loading

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** — semantic markup, accessibility (ARIA labels)
- **CSS3** — CSS variables, CSS Grid, flexbox, media queries, smooth transitions
- **Vanilla JavaScript (ES6+)** — no dependencies, ~11KB minified
  - Live search with debouncing (260ms)
  - Category filtering with skeleton animations
  - Intersection Observer for fade-in effects
  - Scroll event listeners for sticky navbar and scroll-to-top button

### Fonts & Typography
- **Bricolage Grotesque** (display, 400–800 wt) — modern geometric sans-serif for titles
- **DM Sans** (body, 300–600 wt) — friendly, legible sans-serif for content
- Loaded via Google Fonts with preconnect optimization

### Design System
- **UofM Color Palette:** Maize (#FFCB05) + Blue (#00274C)
- **Spacing Scale:** 0.5rem → 2rem (CSS custom properties)
- **Border Radius:** `--border-radius-md` (8px), `-lg` (12px), `-xl` (32px)
- **Shadows & Transitions:** Subtle, performance-optimized effects

### SEO & Metadata
- Open Graph (og:title, og:image, og:description) for social sharing
- Twitter/X Cards (summary_large_image format)
- JSON-LD structured data (`GroceryStore` schema)
- Meta descriptions, keywords, canonical URLs
- OG image: **1200×630px** (Facebook optimal)
- Favicon & app icons

---

## 📁 Project Structure

```
warung-indo-michigan/
├── index.html              # Semantic HTML markup, OG meta tags
├── style.css               # Global styles, responsive design, animations
├── javascript.js           # Core functionality (search, filter, events)
├── products.json           # Product database (250+ items, 12 categories)
├── logo-icon-warungindomichigan.png    # Favicon & app icon
├── og-image-warungindomichigan.jpg     # Social share image (1200×630)
└── README.md              # This file
```

### File Sizes
- **index.html** — 19 KB (includes semantic structure + OG tags)
- **style.css** — 20 KB (responsive, animations, variables)
- **javascript.js** — 11 KB (embedded product data, no fetch)
- **products.json** — 25 KB (optional; embedded in JS to avoid CORS)

---

## 🚀 Key Technical Decisions

### 1. **No Build Step / Framework**
Static site deployed directly to Vercel. No npm dependencies, no webpack, no Next.js. Reduces complexity and enables instant page loads.

### 2. **Embedded Product Data**
Instead of `fetch('products.json')` (blocked by CORS on local `file://` URLs), all 250+ products are embedded directly in `javascript.js` as a JavaScript object. This ensures the site works locally and eliminates external requests.

### 3. **Sticky Toolbar for Search**
When scrolling into the products section, the search bar + category pills + results info "stick" to the top (just below the fixed navbar). Users can filter products without scrolling back up.

```css
.products-toolbar {
  position: sticky;
  top: 60px;  /* sits below navbar (60px when scrolled) */
  z-index: 500;
  background: var(--white);
  border-bottom: 1px solid var(--gray-100);
}
```

### 4. **Live Search with Debouncing**
Search runs on every keystroke but is debounced at 260ms to avoid excessive re-renders. Highlights matching keywords in real-time.

```javascript
searchTimer = setTimeout(() => renderProducts(), 260);
```

### 5. **Skeleton Loading Animation**
When switching categories or loading, placeholder cards appear with shimmer animation (`background: linear-gradient(...)`). No third-party skeleton UI library needed.

### 6. **Intersection Observer for Animations**
`.fade-up` elements animate in as they enter the viewport, improving perceived performance and visual polish.

```javascript
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
```

### 7. **CSS Variables for Theming**
All colors, fonts, spacing, shadows, and transitions are defined as CSS custom properties. Easy to tweak the entire design without touching individual rules.

```css
:root {
  --blue: #00274C;
  --maize: #FFCB05;
  --font-display: 'Bricolage Grotesque', ...;
  --font-body: 'DM Sans', ...;
  --transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 8. **WhatsApp Deep Links**
Product "Order" buttons generate WhatsApp links with pre-filled messages:
```javascript
const msg = encodeURIComponent(`Halo Warung Indo Michigan!\nSaya ingin memesan: ${product.name}\nHarga: ${price}`);
window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
```

---

## 📱 Responsive Design

**Mobile-First Approach:**
- Navbar: 68px (scrolled: 60px)
- Products toolbar: sticky, full-width on mobile
- Grid: 1-column on mobile, auto-fill `minmax(210px, 1fr)` on desktop
- Typography: `clamp()` function scales font sizes fluidly

```css
@media (max-width: 600px) {
  #products { padding-top: 2.5rem; }
  .products-toolbar { top: 60px; padding: 0.75rem 0; }
}
```

**Tested Breakpoints:**
- Mobile: 320px, 375px, 768px
- Tablet: 768px, 1024px
- Desktop: 1200px+

---

## ⚡ Performance Optimizations

- **No JavaScript frameworks** — pure vanilla JS (~11 KB)
- **Embedded product data** — no external API calls or JSON fetches
- **CSS custom properties** — efficient variable reuse, smaller output
- **Minimal animations** — CSS transitions only, no requestAnimationFrame
- **Lazy loading hints** — `loading="lazy"` on images (future-proof)
- **Preconnect to Google Fonts** — `<link rel="preconnect">`
- **Smooth scroll behavior** — hardware-accelerated CSS transforms

**Expected Lighthouse Scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 🎨 Design Highlights

### Typography
- **Display Font:** Bricolage Grotesque (800 wt) — geometric, modern, friendly
- **Body Font:** DM Sans (400–600 wt) — high legibility, warm character
- **Product Names & Prices:** DM Sans 14–18px, semi-bold

### Color Palette
- **Primary:** Blue #00274C (UofM)
- **Accent:** Maize #FFCB05 (UofM)
- **Neutrals:** Gray scale 50–900 for hierarchy
- **Semantic:** Success #1D9E75, Warning #BA7517, Error #E24B4A (via CSS variables)

### Spacing System
```css
0.5rem (8px)
0.75rem (12px)
1rem (16px)
1.25rem (20px)
1.5rem (24px)
2rem (32px)
2.5rem (40px)
```

### Micro-interactions
- Hover states on buttons & cards (subtle lift, color shift)
- Smooth navbar background blur on scroll
- Skeleton shimmer effect
- Fade-in animations with staggered delays
- Product card top border animation on hover

---

## 📋 Data Structure

### Products Format
```javascript
const PRODUCT_DATA = {
  categories: [
    {
      id: "mie-bubur",
      name: "Mie & Bubur",
      icon: "🍜",
      items: [
        { name: "Indomie Rendang 3 bgs", price: "$5.00" },
        // ...
      ]
    }
  ]
};
```

**12 Categories:**
1. Mie & Bubur (16 items)
2. Minuman & Kopi (24 items)
3. Susu & Dairy (6 items)
4. Sambal & Saus (24 items)
5. Bumbu & Rempah (55 items)
6. Snack & Kerupuk (92 items)
7. Bahan Kue & Masak (25 items)
8. Ikan Asin & Seafood (25 items)
9. Makanan Olahan & Kue (31 items)
10. Obat & Kesehatan (64 items)
11. Personal Care (12 items)
12. Lain-lain (9 items)

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd warung-indo-michigan
vercel
```

No build configuration needed — Vercel auto-detects static site.

### Manual Upload
Drag & drop folder to [vercel.com/new](https://vercel.com/new) → deploy in seconds.

### Custom Domain
After deployment, configure custom domain in Vercel dashboard. Update OG meta tags with your domain URL.

---

## 🔍 SEO Features

- ✅ Open Graph meta tags (og:title, og:image, og:description)
- ✅ Twitter Card (summary_large_image)
- ✅ JSON-LD structured data (GroceryStore schema)
- ✅ Semantic HTML5 (nav, section, article, footer)
- ✅ Accessibility labels (aria-label, aria-live, role attributes)
- ✅ Mobile-friendly responsive design
- ✅ Fast page load (no JS frameworks)
- ✅ Canonical URL
- ✅ Meta robots: index, follow

---

## 🛒 WhatsApp Integration

**Order Flow:**
1. User clicks "Order via WA" on any product
2. Generates pre-filled WhatsApp message with product name + price
3. Opens WhatsApp with message: *"Halo Warung Indo Michigan! Saya ingin memesan: [Product Name] Harga: [Price]"*
4. User sends → shop confirms availability and shipping

**Configuration:**
Update `WA_NUMBER` in `javascript.js`:
```javascript
const WA_NUMBER = '12693800208'; // Replace with actual WhatsApp number
```

---

## 📞 Community Integration

- **WhatsApp Group Link:** Join 218+ members for updates, stock notifications, and promos
- **Facebook:** Latest content and reel updates
- **Direct Contact:** Chat via WhatsApp for inquiries

---

## 🔧 Customization

### Change Colors
Edit `:root` in `style.css`:
```css
:root {
  --blue: #00274C;
  --maize: #FFCB05;
  /* ... */
}
```

### Update Products
Edit `PRODUCT_DATA` in `javascript.js` or modify `products.json` (if using a backend).

### Adjust Typography
Update font imports and weights in `index.html` and `:root` in `style.css`.

### Modify WhatsApp Number
Update `WA_NUMBER` in `javascript.js`.

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use this template for other Indonesian grocery stores or adapt it for your needs.

---

## 👋 Attribution

**Built with ❤️ by Wanda Azhar in Michigan, USA**

Original design and development for Warung Indo Michigan community. Contributions welcome!

---

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to:
- Fork the repository
- Submit pull requests with enhancements
- Open issues for bugs or feature requests
- Share feedback

---

## 📞 Support

For questions or support regarding this website:
- 📱 **WhatsApp:** +1 (269) 380-0208
- 🔗 **Facebook:** [Warung Indo Michigan](https://www.facebook.com/levi.chen.11503/reels/)
- 💬 **WhatsApp Group:** Join community for updates

---

## 🎯 Future Roadmap

- [ ] Multi-language support (Indonesian & English)
- [ ] Customer testimonials carousel
- [ ] Inventory management system
- [ ] Order tracking via WhatsApp Bot
- [ ] Newsletter signup integration
- [ ] Product reviews system
- [ ] Mobile app (PWA)
- [ ] Payment gateway integration (Stripe/PayPal)

---

**Last Updated:** June 2026  
**Status:** ✅ Production Ready
