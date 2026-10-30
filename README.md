# Professional Portfolio - MEAN/MERN Stack Developer

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills and projects as a full-stack developer specializing in MEAN and MERN stack technologies.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Sections**: Hero, About, Skills, Projects, and Contact sections
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integrated social media profiles
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Customization

### Personal Information
Update the following files with your personal information:

- **Hero Section** (`src/components/sections/Hero.tsx`):
  - Update your name and introduction text
  - Add your social media links

- **About Section** (`src/components/sections/About.tsx`):
  - Customize your professional description
  - Modify highlight areas

- **Skills Section** (`src/components/sections/Skills.tsx`):
  - Adjust skill levels and technologies
  - Add or remove skill categories

- **Projects Section** (`src/components/sections/Projects.tsx`):
  - Replace sample projects with your actual projects
  - Update project descriptions and technologies
  - Add live demo and GitHub repository links

- **Contact Section** (`src/components/sections/Contact.tsx`):
  - Update your contact information
  - Configure form submission (integrate with backend service)

### Styling
- Modify colors in `tailwind.config.js`
- Update fonts and spacing in components
- Customize animations in Framer Motion components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build settings

### Manual Deployment
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer component
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Skills showcase
│       ├── Projects.tsx      # Projects portfolio
│       └── Contact.tsx       # Contact form
└── components/
    └── ui/                   # Reusable UI components
```

## 🎨 Features Implemented

- ✅ Responsive design for all screen sizes
- ✅ Smooth scroll navigation
- ✅ Interactive hover effects and animations
- ✅ Dark mode toggle
- ✅ Contact form with validation
- ✅ Social media integration
- ✅ Project showcase with filtering
- ✅ Skills progress bars
- ✅ Professional typography
- ✅ SEO optimization

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [your-linkedin-profile]
- GitHub: [your-github-profile]

---

Built with ❤️ using Next.js and Tailwind CSS
