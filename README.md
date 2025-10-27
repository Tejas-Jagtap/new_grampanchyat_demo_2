# 🏛️ Gram Panchayat Website Template

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.4-38bdf8)](https://tailwindcss.com/)

**A reusable, configuration-based template for deploying professional Gram Panchayat websites. Deploy multiple villages by simply updating JSON files - NO CODING REQUIRED!**

---

## ✨ Key Features

� **Bilingual Support** - English & Marathi with instant toggle  
📱 **Fully Responsive** - Works perfectly on all devices  
⚡ **Fast & Modern** - Built with Next.js 15 & React 19  
🔧 **Configuration-Based** - Update ALL content via JSON files (no coding!)  
📸 **Image Management** - Simple folder-based system  
� **Easy Deployment** - One-click deploy to Vercel/Netlify  
♿ **Accessible** - WCAG compliant  
🔍 **SEO Optimized** - Search engine friendly

---

## 🎯 Perfect For

✅ Gram Panchayat offices  
✅ Village administration websites  
✅ Local government portals  
✅ Rural development websites  
✅ Multiple village deployments (same codebase, different data)

---

## 🚀 Quick Start (Deploy in 1 Hour!)

```bash
# 1. Clone & Install (5 min)
git clone <repo-url>
cd grampanchayt-demo
npm install

# 2. Update Configuration Files (40 min)
# Edit these JSON files in config/ folder - NO CODING NEEDED!
config/site.config.json      # Village name, contact info
config/home.json             # Hero slides, stats, important links
config/about.json            # Introduction, history, administration
config/contact.json          # Contact form, office info, emergency
config/officials.json        # Sarpanch, staff members
config/news.json             # News & announcements
config/gallery.json          # Photo gallery
config/schemes.json          # Government schemes
config/services.json         # Village services
config/departments.json      # Department information

# 3. Replace Images (10 min)
# Copy your village images to: public/images/
# - Hero slides: hero1.jpg, hero2.jpg, hero3.jpg
# - Officials: officials/sarpanch.jpg, etc.
# - Gallery: gallery/event1.jpg, etc.
# - News: news/news1.jpg, etc.

# 4. Test (5 min)
npm run dev
# Open http://localhost:3000
# Test both English & Marathi versions
# Check all pages load correctly

# 5. Deploy to Vercel (FREE!)
npm run build  # Verify no errors
git push
# Connect to Vercel - auto-deploy on every push!
```

**📖 For detailed instructions, see [CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md)**

---

## 📚 Documentation Files

📘 **[CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md)** - Complete guide for customizing your village  
📗 **[README.md](README.md)** - This file (overview & quick start)

---

🌐 **Bilingual Support** - English & Marathi with instant toggle ## Pages & Sections

📱 **Fully Responsive** - Works perfectly on all devices

⚡ **Fast & Modern** - Built with Next.js 15 & React 19 ### Home Page

🔧 **Configuration-Based** - Update data via JSON files (no coding!)

📸 **Image Management** - Simple folder-based system - **Hero Section** - Auto-rotating carousel with call-to-action buttons

🚀 **Easy Deployment** - One-click deploy to Vercel/Netlify - **Latest News** - Recent announcements and updates

♿ **Accessible** - WCAG compliant - **Officials Section** - Display of key Gram Panchayat officials

🔍 **SEO Optimized** - Search engine friendly- **Departments** - Colorful department cards (Agriculture, Health, Education, etc.)

- **Government Schemes** - List of central and state welfare schemes

---- **Photo Gallery** - Image gallery of village events and infrastructure

- **Helpline Numbers** - Emergency and important contact numbers

## 🎯 Perfect For- **Important Links** - Quick access to government portals

✅ Gram Panchayat offices ### Layout Components

✅ Village administration websites

✅ Local government portals - **Top Bar** - Contact information and office hours

✅ Rural development websites - **Header** - Gram Panchayat branding with emblems

✅ Multiple village deployments- **Navigation** - Sticky navigation with dropdown menus

- **Footer** - Comprehensive footer with links and information

---

## Color Scheme

## 🚀 Quick Start (1 Hour Deployment)

The website uses the Indian national flag colors:

````bash

# 1. Clone & Install- 🟠 **Orange** (#FF9933) - Primary accent

git clone <repo-url>- ⚪ **White** (#FFFFFF) - Background

npm install- 🟢 **Green** (#138808) - Secondary accent

- 🔵 **Blue** (#000080) - Government official color

# 2. Update Configuration (30 min)

# Edit these 4 files:## Installation

config/site.config.json      # Village info

config/officials.json         # Officials data### Prerequisites

config/news.json             # News items

config/gallery.json          # Gallery images- Node.js 18+ installed

- npm or yarn package manager

# 3. Replace Images (15 min)

# Copy to: public/images/### Steps



# 4. Test (5 min)1. **Navigate to the project directory:**

npm run dev

# Open http://localhost:3000   ```bash

   cd "g:\project\ASCENTA Projects\grampanchayt\Demo\moredate"

# 5. Deploy (10 min)   ```

git push

# Auto-deploy with Vercel!2. **Install dependencies:**

````

```bash

---   npm install

```

## 📚 Complete Documentation

or

📖 **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - 60-minute deployment checklist

📘 **[TEMPLATE_SYSTEM_COMPLETE.md](TEMPLATE_SYSTEM_COMPLETE.md)** - Complete guide ```bash

📗 **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Detailed instructions yarn install

📙 **[HERO_IMAGES_GUIDE.md](HERO_IMAGES_GUIDE.md)** - Hero section setup ```

---3. **Run the development server:**

## 🗂️ Project Structure ```bash

npm run dev

`   `

├── config/ 📝 UPDATE THESE (Your Data)

│ ├── site.config.json # Village info, contact or

│ ├── officials.json # Sarpanch, members

│ ├── news.json # News items ```bash

│ └── gallery.json # Gallery images yarn dev

│ ```

├── public/images/ 🖼️ REPLACE THESE (Your Images)

│ ├── hero/ # Background images (3)4. **Open your browser:**

│ ├── officials/ # Official photos (4+) Navigate to [http://localhost:3000](http://localhost:3000)

│ ├── news/ # News images (3+)

│ └── gallery/ # Gallery photos (6+)## Build for Production

│

├── app/ 🔒 DON'T TOUCH (Code)```bash

├── components/ 🔒 DON'T TOUCH (Code)npm run build

├── translations/ 📖 Rarely changenpm start

└── lib/ 🛠️ Utilities```

```

## Project Structure

---

```

## 🎨 What's Includedmoredate/

├── app/

### 🏠 Homepage Sections│ ├── globals.css # Global styles

- Hero carousel with village images│ ├── layout.tsx # Root layout

- Latest news & announcements│ └── page.tsx # Home page

- Government schemes showcase├── components/

- Photo gallery preview│ ├── TopBar.tsx # Top information bar

- Village officials display│ ├── Header.tsx # Main header with logo

- Department cards│ ├── Navigation.tsx # Navigation menu

- Important links│ ├── Hero.tsx # Hero carousel section

- Helpline numbers│ ├── News.tsx # Latest news section

- Contact information│ ├── Officials.tsx # Officials display

│ ├── Departments.tsx # Department cards

### 📄 Complete Pages│ ├── Schemes.tsx # Government schemes

- **About:** Introduction, History, Administration│ ├── Gallery.tsx # Photo gallery

- **Departments:** Agriculture, Health, Education, Social Welfare, etc.│ ├── Helpline.tsx # Helpline numbers

- **Schemes:** Central, State, and Local government schemes│ ├── ImportantLinks.tsx # Important links

- **Services:** Available village services│ └── Footer.tsx # Footer component

- **News:** Latest announcements├── public/

- **Gallery:** Event photos│ └── images/ # Image assets

- **Contact:** Contact information and form├── package.json

├── tailwind.config.ts

### 🌐 Bilingual System├── tsconfig.json

- Instant language toggle (English ↔ Marathi)└── next.config.mjs

- All content in both languages```

- Automatic switching across pages

## Customization

---

### Update Village Information

## 🔧 Configuration Example

Edit the `components/Header.tsx` file:

### Site Info (`config/site.config.json`)

`json`typescript

{<h2 className="text-xl md:text-3xl font-bold text-government-blue">

"village": { Village Name // Change this

    "name": { "en": "Shirpur", "mr": "शिरपूर" },</h2>

    "district": { "en": "Pune", "mr": "पुणे" },<p className="text-sm md:text-lg text-gray-600">

    "pincode": "411001"  District, State - 000000  // Change this

},</p>

"contact": {```

    "phone": "+91-20-12345678",

    "email": "shirpur@example.com"### Update Contact Details

}

}Edit the `components/TopBar.tsx` and `components/Footer.tsx` files to update:

````

- Phone numbers

### Officials (`config/officials.json`)- Email addresses

```json- Office hours

{- Physical address

  "sarpanch": {

    "name": { "en": "Ramesh Patil", "mr": "रमेश पाटील" },### Add More Pages

    "phone": "+91-9876543210",

    "photo": "/images/officials/sarpanch.jpg"Create new pages in the `app` directory:

  }

}```typescript

```// app/about/page.tsx

export default function About() {

---  return <div>About Page</div>;

}

## 🖼️ Image Requirements```



| Type | Size | Quantity | Format |### Modify Navigation

|------|------|----------|--------|

| Hero images | 1920x1080px | 3 | JPG |Edit `components/Navigation.tsx` to add/remove menu items:

| Official photos | 400x400px | 4+ | JPG |

| News images | 800x600px | 3+ | JPG |```typescript

| Gallery images | 1200x800px | 6+ | JPG |const menuItems = [

  { name: "Home", href: "/", hasDropdown: false },

**All images should be < 500KB** (use [tinypng.com](https://tinypng.com))  // Add more items here

];

---```



## 🚀 Deployment Options## Responsive Breakpoints



### Vercel (Recommended - FREE)- **Mobile**: < 768px

1. Push to GitHub- **Tablet**: 768px - 1024px

2. Import to [Vercel](https://vercel.com)- **Desktop**: > 1024px

3. Deploy → Done! 🎉

## Technologies Used

### Netlify (FREE)

1. Push to GitHub- **Next.js 14** - React framework

2. Import to [Netlify](https://netlify.com)- **TypeScript** - Type safety

3. Build: `npm run build`- **Tailwind CSS** - Styling

4. Deploy!- **React Icons** - Icon library

- **Lucide React** - Additional icons

### Custom Server

```bash## Browser Support

npm run build

npm start- Chrome (latest)

```- Firefox (latest)

- Safari (latest)

---- Edge (latest)



## 📊 Multi-Village Strategy## Future Enhancements



### Option 1: Separate Repositories (Best for Many Villages)- [ ] Add citizen services portal

```- [ ] Implement online complaint system

gp-template/          (Master)- [ ] Add RTI (Right to Information) section

shirpur-gp/          → shirpur.gp.in- [ ] Integrate payment gateway for tax payments

baramati-gp/         → baramati.gp.in- [ ] Add multilingual support (Hindi, Marathi, English)

pune-gp/             → pune.gp.in- [ ] Implement authentication for admin panel

````

## License

### Option 2: Branches (Good for Few Villages)

```This project is created for educational purposes.

main                 (Template)

village-shirpur## Support

village-baramati

village-puneFor any queries or support, please contact:

```

- Email: info@grampanchayat.gov.in

---- Phone: +91-XXX-XXXXXXX

## 🛠️ Tech Stack---

- **Framework:** Next.js 15.5.4**Developed with ❤️ for serving rural India**

- **UI Library:** React 19.2.0
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 3.4.4
- **Icons:** React Icons 5.2.1
- **Images:** Next.js Image Optimization
- **Deployment:** Vercel / Netlify

---

## ✅ Pre-Deployment Checklist

**Data:**

- [ ] Village name (EN + MR)
- [ ] Contact info (phone, email, address)
- [ ] Officials data complete
- [ ] 3+ news items added
- [ ] 6+ gallery items added

**Images:**

- [ ] 3 hero images (optimized)
- [ ] 4+ official photos
- [ ] 3+ news images
- [ ] 6+ gallery images

**Testing:**

- [ ] Local testing done
- [ ] Language toggle works
- [ ] All links functional
- [ ] Mobile responsive
- [ ] No console errors

---

## 🆘 Troubleshooting

### Images not loading?

```bash
# Check file paths in config
# Verify files in public/images/
# Clear cache: Ctrl+Shift+R
```

### Data not updating?

```bash
rm -rf .next
npm run dev
```

### JSON errors?

- Validate at [jsonlint.com](https://jsonlint.com)
- Check commas and quotes

---

## 📈 What You Can Do

✅ Deploy 10+ villages in ONE DAY  
✅ Non-coders can update data  
✅ Centrally manage multiple sites  
✅ Quick news/image updates  
✅ Free hosting (Vercel/Netlify)  
✅ Custom domains per village

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push and create Pull Request

---

## 📝 License

MIT License - See [LICENSE](LICENSE) file

---

## 👥 Author

**Tejas Jagtap** - [@Tejas-Jagtap](https://github.com/Tejas-Jagtap)

---

## 🙏 Acknowledgments

- Government of Maharashtra
- National Informatics Centre (NIC)
- All Gram Panchayat offices
- Open source community

---

## 📞 Support

- **Docs:** See documentation files
- **Issues:** [GitHub Issues](https://github.com/Tejas-Jagtap/grampanchayt-demo/issues)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ for Gram Panchayats of Maharashtra**

**Version 1.0.0** | **Last Updated:** October 2025
