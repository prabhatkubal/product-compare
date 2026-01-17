Product Comparison App
🔗 Live Demo

https://prabhatkubal.github.io/product-compare/

🚀 Setup Instructions
# Clone the repository
git clone https://github.com/prabhatkubal/product-compare.git

# Navigate to the project
cd product-compare

# Install dependencies
npm install

# Start development server
npm start


The app will be available at:
http://localhost:3000

# Tech Stack
React
TypeScript
SCSS (Centralized variables, Semantic font-size system, Responsive mixins)
React Context API
Static data only (no backend)

# Features
Product Listing, Displays a grid of products with: Name, Brand, Image, Price
Responsive layout for desktop, tablet, and mobile
Product Comparison
Users can select up to 3 products
Sticky comparison bar appears with selected product thumbnails
Ability to remove selections directly from thumbnails
Side-by-side comparison modal showing detailed attributes
Option to remove individual products or clear all selections
Comparison modal auto-closes if fewer than 2 products remain

# Search & Filter: 
Text-based search by product name
Brand filter dropdown
Combined search and filter support

# Theme Support
Light and Dark mode
Respects system preference on first load
User preference persisted using localStorage

# Accessibility (WCAG-focused)
Keyboard navigation (Tab, Enter, Space, Escape)
ARIA roles and labels for interactive elements
Focus management for modal dialogs=
Semantic HTML usage
Scalable typography using rem units (zoom-friendly)

# State Management
Context API for comparison and theme state
Comparison selections persisted using localStorage