# Omsnet Digital Fortress - Cybersecurity Website

A modern, responsive cybersecurity company website built with Next.js, TypeScript, and Tailwind CSS. Features enterprise-grade security services, client testimonials, and comprehensive contact information.

## 🚀 Features

- **Modern Design**: Clean, professional cybersecurity-focused design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Docker Support**: Containerized deployment ready
- **Simple Contact Form**: Direct email integration using mailto links
- **Professional Contact Information**: Clear contact details for clients
- **Emergency Contact Section**: 24/7 incident response information

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation Methods

### Method 1: Local Development (Recommended for Development)

#### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd omsnet_digital_fortress_cybersecurity_website_0o7r4g
```

#### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

#### Step 3: Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

#### Step 4: Build for Production
```bash
npm run build
npm start
```

### Method 2: Docker Deployment (Recommended for Production)

#### Prerequisites
- Docker installed on your system
- Docker Compose (usually included with Docker Desktop)

#### Quick Start with Docker Compose
```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

#### Manual Docker Commands
```bash
# Build the image
docker build -t omsnet-digital-fortress .

# Run the container
docker run -d -p 7774:7774 --name omsnet-website omsnet-digital-fortress

# View logs
docker logs -f omsnet-website

# Stop the container
docker stop omsnet-website
docker rm omsnet-website
```

### Method 3: Traditional Server Deployment

#### Step 1: Build the Application
```bash
npm run build
```

#### Step 2: Deploy to Your Server
Copy the following files/folders to your server:
- `.next` folder
- `public` folder
- `package.json`
- `next.config.js`
- `node_modules` (or run `npm install --production` on server)

#### Step 3: Install PM2 (Process Manager)
```bash
npm install -g pm2
```

#### Step 4: Start with PM2
```bash
pm2 start npm --name "omsnet-website" -- start
pm2 startup
pm2 save
```

### Method 4: Vercel Deployment (Recommended for Next.js)

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Deploy
```bash
vercel
```

Follow the prompts to configure your deployment.

#### Step 3: Environment Variables
Add any required environment variables in your Vercel project settings.

## 📁 Project Structure

```
omsnet_digital_fortress_cybersecurity_website_0o7r4g/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── navigation.tsx    # Navigation component
│   └── footer.tsx        # Footer component
├── public/               # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Updating Contact Information
Edit `components/footer.tsx` to update:
- Phone number
- Email address
- Company address

### Modifying Services
Update the services array in `app/page.tsx` to modify the services section.

### Changing Colors and Styling
Modify `tailwind.config.ts` to update the color scheme and design system.

## 📧 Contact Form

The website features a simple and effective contact form that uses mailto links to send emails directly to your contact@omsnet.co.uk address.

**How it works:**
1. Client fills out the contact form with their details and message
2. When they click "Send Message", their email client opens with a pre-filled email
3. The email is addressed to contact@omsnet.co.uk with the form data
4. Client clicks "Send" in their email client to complete the submission

**Benefits:**
- **Simple**: No backend server required
- **Reliable**: Uses the client's own email client
- **Secure**: No data storage or processing on the server
- **Professional**: Emails come directly from the client's email address

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `docker-compose up -d` - Start with Docker

## 🌐 Deployment URLs

- **Local Development**: http://localhost:3000
- **Docker Deployment**: http://localhost:7774
- **Production**: Configure based on your deployment method

## 📞 Contact Information

- **Phone**: 0113 534 7445
- **Email**: contact@omsnet.co.uk
- **Address**: San Francisco, CA

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

#### Docker Build Issues
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

#### TypeScript Errors
```bash
# Clear TypeScript cache
npm run build -- --no-cache
```

#### Missing Dependencies
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For technical support or questions about deployment, contact the development team.

---

**Omsnet Digital Fortress** - Enterprise-grade cybersecurity solutions protecting your digital assets with cutting-edge technology and expert threat intelligence.
