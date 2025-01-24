# Express and MongoDB Web Application

![Screenshot 2025-01-25 014029](https://github.com/user-attachments/assets/682c0b7f-15e3-4077-a103-fc53bd86bb56)


![Screenshot 2025-01-25 014118](https://github.com/user-attachments/assets/90f348a7-6e47-441a-9092-09d37194e4e7)



## Project Description

This project is a basic web application built using **Express.js**, **MongoDB**, and **EJS**. It demonstrates the fundamental principles of building a CRUD (Create, Read, Update, Delete) application for managing a list of products. Users can perform the following actions:

- View a list of all products.
- Add a new product.
- Edit an existing product.
- Delete a product.
- View detailed information about a specific product.

The application employs the **MVC (Model-View-Controller)** pattern and leverages MongoDB as its database.

---

## Features

- **Dynamic Views**: Utilizes EJS for rendering dynamic HTML pages.
- **CRUD Operations**:
  - Create: Add new products.
  - Read: View all products or a single product's details.
  - Update: Modify product details.
  - Delete: Remove products from the database.
- **MongoDB Integration**: Stores product data in a MongoDB database.
- **RESTful Routes**: Implements standard RESTful conventions for routing.
- **Middleware**: Uses `method-override` for supporting PUT and DELETE HTTP methods in forms.

---

## Project Structure

```
expressAndMongodb/
├── index.js              # Main server file
├── models/
│   └── product.js       # Mongoose schema for the Product model
├── views/
│   ├── products/
│   │   ├── index.ejs   # Displays all products
│   │   ├── new.ejs     # Form to add a new product
│   │   ├── edit.ejs    # Form to edit an existing product
│   │   └── show.ejs    # Shows details of a specific product
├── public/
│   └── style.css        # Stylesheet for the application
├── seeds.js             # Script to seed the database with sample data
├── package.json         # Lists dependencies and scripts
├── package-lock.json    # Dependency tree
└── README.md            # Project documentation (this file)
```

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **MongoDB** (Local or Cloud-Based)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd expressAndMongodb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   ```bash
   mongod
   ```

4. Seed the database (optional):
   ```bash
   node seeds.js
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000/products
   ```

---

## Usage

- **View All Products**: Go to `/products`.
- **Add a Product**: Click the "Add New Product" link on the product list page or navigate to `/products/new`.
- **Edit a Product**: Click the "Edit" button next to a product on the product list page.
- **Delete a Product**: Click the "Delete" button next to a product on the product list page.
- **View Product Details**: Click on the product name in the list.

---

## Dependencies

- **Express.js**: Web application framework.
- **EJS**: Template engine for rendering views.
- **Mongoose**: ODM library for MongoDB.
- **Method-Override**: Middleware for supporting PUT and DELETE requests in forms.
- **Path**: Node.js module for handling file and directory paths.

Install these dependencies with:
```bash
npm install express ejs mongoose method-override
```

---

## File Details

### `index.js`

The entry point for the application, containing:
- MongoDB connection setup.
- Middleware configuration.
- RESTful routes for handling product-related operations.
- Server initialization.

### `models/product.js`

Defines the Mongoose schema for the `Product` model. Each product has the following fields:
- `name` (String): The name of the product.
- `price` (Number): The price of the product.
- `description` (String): A short description of the product.

### `views/products`

Contains EJS templates for rendering dynamic pages:
- **`index.ejs`**: Displays a list of all products.
- **`new.ejs`**: Form to create a new product.
- **`edit.ejs`**: Form to edit an existing product.
- **`show.ejs`**: Displays details of a specific product.

### `public/style.css`

The stylesheet for the application. Styles the product list, buttons, and other UI elements.

### `seeds.js`

A script to populate the database with sample product data for testing purposes.

---

## Additional Information

### Running Tests

Currently, this project does not include automated tests. Future improvements could involve adding unit tests for routes and database operations.

### Future Enhancements

- Implement user authentication for secure CRUD operations.
- Add search and filtering functionality for products.
- Deploy the application using platforms like Heroku or AWS.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
