# Kalai

**Kalai** is a dynamic thumbnail generation service that creates beautiful, branded social media preview images for FAIR Data Innovations Hub projects and beyond. Built with [Next.js](https://nextjs.org/) and [Vercel's OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation), it provides a simple API to generate consistent, professional-looking thumbnails for any content.

## Why Kalai Exists

Kalai was created to solve the problem of inconsistent social media previews across FAIR Data Innovations Hub projects. Instead of manually creating thumbnails for each piece of content, Kalai provides:

- All thumbnails follow the same design system
- Generate thumbnails on-demand with custom titles and descriptions
- Built-in support for various FAIR Data Innovations Hub projects
- Simple API endpoint that can be used anywhere

## Quick Start

### Prerequisites

- Node.js 22.18.0+ (managed via Volta)
- pnpm package manager

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/fairdataihub/kalai.git
  cd kalai
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the thumbnail generator interface.

## How to Use

### Web Interface

Visit the application and fill out the form with:

- **Title**: The main heading for your thumbnail
- **Description**: Supporting text (optional)
- **Application**: Choose from predefined projects or enter a custom name
- **Organization**: Select the organization branding

This will return a thumbnail image that you can donwload or copy the URL to use in your own project.

### API Usage

Generate thumbnails programmatically using the API endpoint:

```CURL
GET /api/generate?title=Your%20Title&description=Your%20Description&app=your-app&org=your-org
```

**Parameters:**

- `title` (required): The main title text
- `description` (optional): Supporting description text
- `app` (required): Application identifier (see supported apps below)
- `org` (optional): Organization identifier (defaults to "fairdataihub")

**Example:**

```html
https://kalai.fairdataihub.org/api/generate?title=FAIR%20Data%20Innovations%20Hub&description=Making%20FAIR%20data%20practices%20more%20accessible&app=fairdataihub&org=fairdataihub
```

### Supported Applications

The service currently supports these applications with custom branding:

- **fairdataihub**: [FAIR Data Innovations Hub](https://fairdataihub.org/)
- **soda-for-sparc**: [SODA for SPARC](https://docs.sodaforsparc.io/)
- **fairshare**: [FAIRshare](https://docs.fairshareapp.io/)
- **ai-readi**: [AI-READI](https://aireadi.org/)
- **ai-readi-docs**: [AI-READI Documentation](https://docs.aireadi.org/)
- **fair-biors**: [FAIR-BioRS](https://fair-biors.org/)
- **fairhub**: [Fairhub](https://fairhub.io/)
- **fairhub-docs**: [Fairhub Documentation](https://docs.fairhub.io/)
- **eyeact**: [Eye ACT](https://eyeact.org/)
- **codefair**: [codefair](https://codefair.org/)
- **custom**: Any custom application name

## Reusing This Project

### For Your Own Organization

1. **Fork the Repository**: Start by forking this repository to your own GitHub account.

2. **Update Branding**: Replace the background images in the `public/` directory with your own branded backgrounds. We use [bgJar](https://bgjar.com/) to create our own. There are a near limitless number of backgrounds permutations to choose from.

3. **Customize Applications**: Modify the application options in `pages/index.tsx` (lines 121-143) to match your projects.

4. **Update Organizations**: Edit the organization configurations in `pages/api/generate.tsx` (lines 97-142).

5. **Deploy**: Deploy to Vercel or your preferred platform.

## Customization Guide

### Quick Changes

Here are the key files and sections to modify for common customizations:

#### 1. Add New Applications

**File:** [`pages/index.tsx`](pages/index.tsx)  
**Lines:** 139-162  
Add new `<option>` elements to the select dropdown.

**File:** [`pages/api/generate.tsx`](pages/api/generate.tsx)  
**Lines:** 35-95  
Add new cases to the switch statement with your app's details.

#### 2. Add New Organizations

**File:** [`pages/api/generate.tsx`](pages/api/generate.tsx)  
**Lines:** 97-142  
Add new cases to the organization switch statement.

#### 3. Change Background Images

**Directory:** [`public/`](public/)  
Replace the SVG background files with your own branded images:

- `fairdataihubBackground.svg`
- `sodaBackground.svg`
- `fairshareBackground.svg`
- etc.

#### 4. Modify Thumbnail Layout

**File:** [`pages/api/generate.tsx`](pages/api/generate.tsx)  
**Lines:** 144-325  
The main thumbnail layout is defined in the JSX. Key sections:

- **Title styling** (lines 184-194)
- **Description styling** (lines 196-206)
- **App text styling** (lines 222-230)
- **Organization styling** (lines 311-321)

#### 5. Update Colors and Typography

**File:** [`styles/globals.css`](styles/globals.css)  
**Lines:** 1-108  
Modify the CSS for custom styling, animations, and fonts.

**File:** [`tailwind.config.js`](tailwind.config.js)  
**Lines:** 11-19  
Update the Tailwind configuration for custom design tokens.

#### 6. Change Default Values

**File:** [`pages/index.tsx`](pages/index.tsx)  
**Lines:** 7-13, 111, 171  
Update the default URL, application, and organization values.

### Advanced Customizations

#### Custom Fonts

1. Add font files to the `assets/` directory
2. Update the font loading in [`pages/api/generate.tsx`](pages/api/generate.tsx) (lines 9-19)
3. Modify the font configuration in the ImageResponse (lines 329-348)

#### Custom Dimensions

**File:** [`pages/api/generate.tsx`](pages/api/generate.tsx)  
**Lines:** 326-328  
Change the thumbnail dimensions (currently 1200x630 for optimal social media display).

#### Custom Styling

**File:** [`pages/api/generate.tsx`](pages/api/generate.tsx)  
**Lines:** 147-156  
Modify the main container styling for different layouts.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to `main` branch
3. Update the domain references in the code if using a custom domain

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

We prefer using a serverless platform like Vercel or Netlify for this project. Both of these providers should cache the generated thumbnails for better performance. If you are not using a serverless platform, you will might need to manually cache the generated thumbnails or use a CDN to cache the images.

## Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Project Structure

```bash
kalai/
├── assets/              # Font files (Inter family)
├── pages/
│   ├── api/
│   │   └── generate.tsx # Main API endpoint for thumbnail generation
│   ├── _app.tsx         # Next.js app configuration
│   └── index.tsx        # Main UI interface
├── public/              # Static assets and background images
├── styles/
│   └── globals.css      # Global styles and animations
└── tailwind.config.js   # Tailwind CSS configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
