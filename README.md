# Shop Smart App

![Shop Smart Logo](https://via.placeholder.com/150?text=Shop+Smart)

## Overview

Shop Smart is an intelligent shopping assistant that optimizes your grocery shopping experience by calculating the most efficient path through the store. The app uses store layout data and aisle information to create the shortest route for your shopping list, saving you time and making grocery trips more efficient.

Currently optimized for HEB stores with plans to expand to Walmart, Costco, and other major retailers.

## Features

- 🛒 **Shopping List Management**: Create, save, and edit shopping lists
- 🗺️ **Optimal Path Generation**: Get the most efficient route through the store based on your shopping list
- 📊 **Interactive Store Map**: View your path visually overlaid on the store layout
- 🏪 **Store-Specific Data**: Currently optimized for HEB stores
- 📍 **Aisle-Level Precision**: Finds items based on precise aisle and shelf locations
- 🔍 **Product Search**: Easily find products and their exact locations in the store
- 📋 **Category Organization**: Browse products by department and category
- ⏱️ **Time Estimation**: Get estimates of how long your shopping trip will take
- 📱 **Mobile-Friendly Design**: Optimized for use while shopping in-store

## How It Works

1. **Create Your Shopping List**: Add items to your list either by searching or browsing categories
2. **Generate Optimal Path**: The app calculates the most efficient route based on product locations
3. **Follow In-Store Guidance**: Navigate through the store following the optimized path
4. **Check Off Items**: Mark items as collected as you shop
5. **Save Time**: Complete your shopping in the most time-efficient manner possible

## Tech Stack

### Frontend
- React Native for cross-platform mobile development
- Redux for state management
- React Navigation for app navigation
- Styled components for UI design

### Backend
- Node.js with Express
- MongoDB for data storage
- RESTful API architecture
- Pathfinding algorithms for route optimization

### Integration
- Store layout mapping system
- Product database with location data
- Optimization algorithms

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (v4.4 or higher)
- React Native environment setup

### Local Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/ayushreddy0126/Shop_Smart_App.git
   cd Shop_Smart_App
   ```

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   ```bash
   # In the server directory, create a .env file
   cp .env.example .env
   # Edit the .env file with your database credentials
   ```

4. Start MongoDB
   ```bash
   # Make sure MongoDB is running on your system
   mongod --dbpath /path/to/your/data/directory
   ```

5. Start development servers
   ```bash
   # Start backend server (from server directory)
   npm run dev

   # Start React Native development server (from client directory)
   npm start
   ```

6. Run on a device or emulator
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   ```

## API Endpoints

The application provides the following RESTful API endpoints:

### Authentication
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Authenticate a user
- `POST /api/auth/logout`: Log out a user

### Shopping Lists
- `GET /api/lists`: Get all shopping lists for a user
- `GET /api/lists/:id`: Get a specific shopping list
- `POST /api/lists`: Create a new shopping list
- `PUT /api/lists/:id`: Update a shopping list
- `DELETE /api/lists/:id`: Delete a shopping list

### Products
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get details for a specific product
- `GET /api/products/search`: Search for products
- `GET /api/products/category/:category`: Get products by category

### Stores
- `GET /api/stores`: Get all available stores
- `GET /api/stores/:id`: Get details for a specific store
- `GET /api/stores/nearby`: Find stores near a location

### Path Optimization
- `POST /api/optimize`: Generate an optimized shopping path
- `GET /api/optimize/history`: Get previous optimizations

Detailed API documentation is available in the [API Documentation](docs/api.md) file.

## Database Schema

### Users Collection
- `_id`: Unique identifier
- `name`: User's name
- `email`: User's email address (unique)
- `password`: Hashed password
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp

### ShoppingLists Collection
- `_id`: Unique identifier
- `userId`: Reference to the user owner
- `name`: List name
- `items`: Array of product references and quantities
- `storeId`: Target store for shopping
- `createdAt`: List creation timestamp
- `updatedAt`: Last update timestamp

### Products Collection
- `_id`: Unique identifier
- `name`: Product name
- `category`: Product category
- `description`: Product description
- `price`: Price information
- `imageUrl`: Product image reference

### Stores Collection
- `_id`: Unique identifier
- `name`: Store name (e.g., "HEB")
- `location`: Geographical coordinates
- `address`: Physical address
- `layout`: Store layout information
- `hours`: Operating hours

### ProductLocations Collection
- `_id`: Unique identifier
- `productId`: Reference to the product
- `storeId`: Reference to the store
- `aisle`: Aisle number
- `section`: Section within the aisle
- `shelf`: Shelf position
- `coordinates`: X,Y coordinates on store map

## Future Enhancements

- **Additional Store Support**: Plans to add Walmart, Costco, and other major retailers
- **Price Comparison**: Compare product prices across different stores
- **Sale Alerts**: Notifications for when items on your list are on sale
- **Receipt Scanning**: Add items to lists by scanning receipts
- **Voice Commands**: Add hands-free operation
- **Dietary Filters**: Filter products based on dietary restrictions
- **User Reviews**: Allow users to review and rate products
- **Budget Tracking**: Monitor spending as you shop
- **Shared Lists**: Collaborate on shopping lists with family members

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and contribution process.

## Team

- **Mandadi Ayush Reddy** - Lead Developer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- HEB for store layout reference data
- All contributors who have helped shape this project
- Open source libraries and tools that made this project possible
