# DOE Tech Marketplace

A technology marketplace for the Department of Energy OCIO, built with React, TypeScript, and Tailwind CSS. This website allows users to self-serve and request technology products, software services, technical configuration help, and ask general questions.

## Features

- Amazon-like storefront design
- Product catalog with detailed product pages
- Focus on data visualization tools (Tableau, PowerBI, sPARC)
- AI chatbot to help users identify appropriate visualization tools
- Request form for services
- Responsive design for all device sizes

## Demo Script

A demo script is included in the `demo-script.md` file, which demonstrates a scripted scenario of a user interacting with the AI chatbot to identify the appropriate visualization tool.

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/doe-tech-marketplace.git
cd doe-tech-marketplace
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
doe-tech-marketplace/
├── public/                 # Static files
├── src/                    # Source files
│   ├── components/         # Reusable components
│   │   ├── Chatbot.tsx     # AI chatbot component
│   │   ├── ChatbotButton.tsx # Button to toggle chatbot
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Header.tsx      # Header component
│   │   ├── Layout.tsx      # Layout wrapper
│   │   └── ProductCard.tsx # Product card component
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Home page
│   │   ├── NotFound.tsx    # 404 page
│   │   ├── ProductDetail.tsx # Product detail page
│   │   ├── Products.tsx    # Products listing page
│   │   └── RequestForm.tsx # Service request form
│   ├── App.tsx             # Main App component with routing
│   └── index.tsx           # Entry point
├── demo-script.md          # Chatbot demo script
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `build` directory with optimized production files.

## Future Enhancements

- User authentication and profiles
- Admin dashboard for managing product catalog
- Integration with backend services for real request processing
- Enhanced AI chatbot capabilities
- More product categories beyond data visualization

## License

This project is licensed under the MIT License - see the LICENSE file for details.
