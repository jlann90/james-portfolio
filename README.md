# James Lannon - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Frontend UX Developer. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and an intuitive user experience.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Hamburger menu for mobile, slide-out menu for desktop
- **Project Showcase**: Dedicated projects page with detailed project views
- **Experience Timeline**: Interactive timeline showcasing work history
- **Contact Integration**: Email contact form with modal interface
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Custom CSS animations and transitions
- **Code Quality**: ESLint, Prettier, TypeScript
- **Fonts**: Climate Crisis, Barlow

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jlann90/james-portfolio.git
   cd james-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Menu/           # Navigation components
│   ├── Button.tsx      # Reusable button component
│   ├── Contact.tsx     # Contact page
│   ├── Experience.tsx  # Experience timeline
│   ├── HomePage.tsx    # Landing page
│   ├── Modal.tsx       # Contact modal
│   ├── Project.tsx     # Individual project view
│   └── ProjectsPage.tsx # Projects listing
├── context/            # React context providers
├── data/              # Static data and content
├── assets/            # Images and static assets
└── index.css          # Global styles and utilities
```

## 🎨 Design System

The portfolio uses a custom design system with:

- **Color Palette**: Dark blue theme with red accents
- **Typography**: Climate Crisis for headings, Barlow for body text
- **Spacing**: Consistent responsive spacing system
- **Animations**: Staggered fade-ins and smooth transitions
- **Shadows**: Custom drop shadows for depth and interaction

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add new projects to your portfolio.

### Updating Experience

Edit `src/data/experience.ts` to update your work history.

### Styling Changes

Modify `src/index.css` for global styles and utility classes.

## 🚀 Deployment

This portfolio is deployed using GitHub Pages.

### Deploy to GitHub Pages

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Deploy the site**

   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Save the settings

Your site will be available at: `https://jlann90.github.io/james-portfolio`

### Alternative Deployment Options

The site is also optimized for deployment on platforms like:

- Vercel
- Netlify
- Any static hosting service

Build the project with:

```bash
npm run build
```

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Author

**James Lannon**

- **Role**: Frontend UX Developer
- **Experience**: 7+ years building scalable design systems and accessible UI components
- **Specialties**: React, TypeScript, HTML, CSS, accessibility requirements, design tooling
- **GitHub**: [@jlann90](https://github.com/jlann90)
- **LinkedIn**: [James Lannon](https://www.linkedin.com/in/james-lannon/)

## 🤝 Contributing

This is a personal portfolio project. For questions or feedback, please reach out via the contact form on the website.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
