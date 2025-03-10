# Fashion Store E-commerce Website

A modern e-commerce website built with Next.js, React, and Tailwind CSS. This project showcases a fashion store with categories for men, women, and kids.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Product browsing by category (men, women, kids)
- Product detail pages
- Shopping cart functionality
- Checkout process
- Persistent cart using localStorage

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js (version 14.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Main application code
  - `/components`: Reusable UI components
  - `/lib`: Utility functions and data
  - `/category`: Category pages
  - `/product`: Product detail pages
  - `/cart`: Shopping cart page
- `/images`: Product images organized by category
- `/public`: Static assets

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Images sourced from Unsplash
- Icons from React Icons 