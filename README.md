Product Comparison App

## Live Demo
https://prabhatkubal.github.io/product-compare/

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

## Tech Stack
React, Typescript, SCSS (Centralized variables, Semantic font-size system,Responsive mixins), React Context API, No backend (static data only)

Features
Displays a grid of products with: Name, Brand, Image, Price
Responsive Layout for desktop, tablet, mobile

Users can select up to 3 products to compare
A sticky comparison bar appears when products are selected with thumbnails of selected products along with ability to remove the selection through thumbnails
Side-by-side comparison model with details:
Ability to remove products and clear all selections
Comparison model auto closes if fewer than 2 products

Search & Filter
Text-based search by product name
Brand filter dropdown
Combined search + filter support

Theme Support
Light and Dark mode, Respects system preference on first load
User preference persisted using localStorage

Accessibility (WCAG-focused)
Keyboard navigation support (Tab, Enter, Space, Escape)
ARIA roles and labels for interactive elements
Focus management for modal dialogs
Uses semantic HTML where appropriate
Scalable typography using rem units (zoom-friendly)

State Management
Context API for comparison and theme state
Persistent comparison state using localStorage