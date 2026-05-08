# Add to Cart Application with React Router

This is a responsive e-commerce front-end application built with React, React Router, and Tailwind CSS. It fetches product data from the Fake Store API and implements a full cart functionality.

## Features

*   **Product Listing:** Fetches and displays products from `https://fakestoreapi.com/products` in a responsive grid layout.
*   **Cart Management:**
    *   Add items to the cart.
    *   Remove items from the cart.
    *   Increase/Decrease quantities of items in the cart.
*   **Dynamic Pricing:**
    *   Calculates the subtotal based on item quantities.
    *   Applies a 10% discount on the total price automatically.
    *   Displays the final total price.
*   **Routing:** Uses `react-router-dom` for seamless navigation between the Products page (`/`) and the Cart page (`/cart`).
*   **State Management:** Utilizes React's Context API (`CartContext`) for global state management of the cart and persists the cart data in `localStorage`.
*   **Responsive Design:** Styled with Tailwind CSS to ensure a great user experience on both mobile and desktop devices.

## Tech Stack

*   ReactJS
*   React Router v7
*   Tailwind CSS v4
*   Lucide React (for icons)
*   Vite

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

3.  Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).
