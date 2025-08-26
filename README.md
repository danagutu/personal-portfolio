# Dana Gutu - Product Designer Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing the work and expertise of a product designer.

## 🎨 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **SEO Ready**: Meta tags, structured data, and optimized for search engines

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Create React App with PostCSS

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd danagutu-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Portfolio projects
│   ├── Skills.tsx      # Skills and experience
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The design system uses CSS custom properties defined in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... more colors */
}
```

### Content
Update the content in each component file to match your personal information:

- **Personal Info**: Update name, title, and description in `Hero.tsx`
- **About Section**: Modify personal story and values in `About.tsx`
- **Projects**: Replace project data in `Projects.tsx`
- **Skills**: Update skills and experience in `Skills.tsx`
- **Contact**: Change contact information in `Contact.tsx`

### Images
Replace placeholder images with your own:
- Project screenshots in `Projects.tsx`
- Profile photo (if desired)
- Favicon and app icons

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### Supabase (Static Hosting)
1. Build the project: `npm run build`
2. Upload the `build` folder to Supabase Storage
3. Configure static site hosting

## 📧 Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Email Service**: Integrate with services like:
   - EmailJS
   - Formspree
   - Netlify Forms
   - Custom backend API

2. **Backend Integration**: Update the `handleSubmit` function in `Contact.tsx`

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Framer Motion for animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please contact:
- Email: danagutu2002@gmail.com
- LinkedIn: [linkedin.com/in/danagutu](https://linkedin.com/in/danagutu)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
