# E-Commerce_follow_along

This project is a full-stack e-commerce platform developed using the MERN stack: MongoDB, Express.js, React.js, and Node.js. It integrates scalable APIs, secure authentication, and robust product management functionalities to provide a seamless user experience.


1. User Authentication
The e-commerce platform includes secure login and registration functionalities with JSON Web Tokens (JWT). This ensures that user sessions are properly managed, and sensitive data is accessed only by authorized individuals.

Register: Enables new users to sign up.
Login: Authenticates users and provides a secure session using JWT tokens.

2. Product Management
The product management system allows administrators to add, update, retrieve, and delete products efficiently.

Add Product: Allows adding new products with necessary details.
Update Product: Enables updating product details such as price, description, or images.
Retrieve Products: Provides an easy way to fetch product listings.
Delete Product: Removes products from the database when necessary.

3. Order Management
The platform offers a comprehensive system to manage customer orders, ensuring a seamless purchasing experience.

Create Order: Allows users to place orders for products.
Update Order: Provides options to update order details (e.g., shipping address, quantity).
View Order: Facilitates viewing order history and status.

4. RESTful APIs
The e-commerce platform uses RESTful API design, which organizes interactions between the client and server into standard HTTP methods (GET, POST, PUT, DELETE). This ensures a clean and scalable communication process with the database.
Each endpoint is designed to handle specific tasks, such as retrieving product data or managing user accounts.

5. Scalable Backend
The backend of the e-commerce platform is developed using Node.js and Express.js, making it highly efficient in handling multiple concurrent requests. This allows for fast performance even with a growing user base.

6. Responsive Frontend
The frontend is built using html, css, java script React.js, providing a dynamic and responsive user interface. React.js enhances user interaction by offering components that handle views efficiently, resulting in a smoother, faster, and more intuitive experience for customers.

### Milestone 1: Initialize Project Repository  

This milestone focused on setting up the GitHub repository to serve as the central hub for the e-commerce project's development. By creating the repository and initializing it with a README file, the project gained a clear starting point with version control, ensuring organization and collaboration as the development progresses.

### Milestone 2: Project Setup and Login Page 
This milestone focused on establishing the foundational structure and core functionalities of the project. 

Key tasks included:
1. **Structuring the Project:** Created a clear folder hierarchy to organize frontend and backend components efficiently.
2. **Frontend Setup:** Initialized a React app and configured Tailwind CSS for streamlined styling.
3. **Backend Setup:** Built a Node.js server to handle API requests and backend logic.
4. **Development Tools:** Integrated optional extensions to enhance productivity.
5. **Login Page:** Designed and developed a functional, styled login page as the first user-facing feature of the application.

### Milestone 3: Backend Structure and Server Setup  

This milestone focused on setting up the backend infrastructure and establishing a robust foundation for server-side operations. 

Key tasks included:  
1. **Organizing Backend Files:** Created a structured hierarchy for routes, controllers, models, middleware, and utilities to ensure scalability and maintainability.  
2. **Server Setup:** Built a backend server using Node.js and Express, configured to listen on a designated port.  
3. **Database Integration:** Connected MongoDB for efficient data storage and verified the connection between the server and database.  
4. **Error Handling:** Implemented clear error messages to enhance debugging and provide better feedback for users.  

This milestone establishes a functional backend and prepares the project for future development.  

### Milestone 4: User Management and File Upload  

This milestone focuses on implementing user data handling and file upload functionality. 

Key achievements include:  
1. **User Model:** Defined a blueprint for storing user data in the database, ensuring a consistent structure for user-related information.  
2. **User Controller:** Developed logic to manage user operations such as adding new users and retrieving user information.  
3. **File Upload Setup:** Integrated and configured Multer to enable file uploads (e.g., user profile images) and store them efficiently in the application.  

By completing this milestone, the application now supports user management and file uploads, enhancing its core functionality.  

### Milestone 5: Signup page and Validation  

This milestone focuses on creating a user-friendly Sign-Up page and implementing essential form validation. Key tasks include:  

1. **Frontend UI:** Designed a clean and intuitive Sign-Up page where users can provide their details (Name, Email, Password) to create an account.  
2. **Form Validation:** Ensured user inputs are validated before submission, checking for proper email formats and secure passwords to prevent errors and maintain data integrity.  

By completing this milestone, the application now has a functional and secure user registration interface.  


### Milestone 6: User Data Security and Password Encryption  

This milestone focused on enhancing user data security by implementing password encryption and securely storing user information in the database.  

**Key tasks included:**  

1. **Password Encryption:**  
   - Integrated `bcrypt` to hash user passwords during the signup process.  
   - Ensured that only the hashed password is stored in the database, enhancing security.  

2. **Storing Complete User Data:**  
   - Implemented secure storage of user details such as name, email, and other necessary information.  
   - Ensured that sensitive data is handled appropriately while keeping passwords encrypted.  

This milestone strengthens the security of user authentication, preventing unauthorized access to sensitive information. 

### Milestone 7: User Authentication and Login  
This milestone focused on implementing a secure login system by verifying user credentials and ensuring proper authentication.  

**Key tasks included:**  

1. **Create Login Endpoint:**  
   - Developed an API endpoint to accept user credentials (email/username and password).  
   - Retrieved the corresponding user from the database for authentication.  

2. **Validate Password:**  
   - Used `bcrypt` to hash the entered password.  
   - Compared the hashed input with the stored hashed password to authenticate users.  

This milestone enhances security by ensuring only authenticated users gain access.  


### Milestone 8: Product Card Component and Display  

This milestone focused on designing and implementing a reusable card component to display products effectively on the products page.  

**Key tasks included:**  

1. **Create the Card Component:**  
   - Designed a reusable card component with props for product details (e.g., name, image, price).  
   - Ensured a visually appealing layout to enhance user experience.  

2. **Design the Homepage Layout:**  
   - Implemented a grid or flexbox layout for structured product display.  
   - Used mapping to dynamically render multiple product cards with unique details.  

This milestone improves product presentation, creating a clean and user-friendly browsing experience. 

### Milestone 9: Product Creation Form  

This milestone focuses on building a form to collect product details and handle multiple image uploads.  

**Key Objectives:**  
1. **Form Implementation:** Designed a structured form to input essential product details.  
2. **Image Upload:** Enabled multiple image uploads for each product.  
3. **Data Storage:** Ensured product details are saved in the database for display on the product homepage.  

**Additional Considerations:** 
- Implementing admin access to restrict product uploads.  
- Creating a shop profile for users who can upload products.  

This milestone establishes a foundation for product management in the e-commerce platform.

### Milestone 10: Product Schema & API Endpoint  

This milestone focuses on defining the product schema and creating an API endpoint to validate and store product details in MongoDB.  

**Key Objectives:**

1. **Product Schema:**  
   - Define the product data structure using Mongoose.  
   - Implement field validations (e.g., required fields, data types).  

2. **API Endpoint:**  
   - Build a POST endpoint to receive and store product details.  
   - Validate input before saving to MongoDB.  

**Additional Considerations:**
- Implement admin access for product uploads.  
- Allow only shop-profile users to upload products.  

This milestone ensures data integrity and establishes backend functionality for product management.

### Milestone 11: Dynamic Product Display  

This milestone makes the home page dynamic by fetching and displaying product data from MongoDB.  

#### Key Tasks:  
- Create an API endpoint to fetch all product data.  
- Implement a function to receive and display data in the frontend.  
- Use the product card component for dynamic rendering.  

This ensures smooth data flow between backend and frontend.

### Milestone 12: My Products Page  

This milestone focuses on displaying user-specific products by filtering them based on email.  

#### Key Tasks:  
- Create an API endpoint to fetch products linked to the user’s email.  
- Implement a function to retrieve and display filtered data in the frontend.  
- Use the product card component for dynamic rendering.  

This ensures users see only their added products, improving personalization.

### Milestone 13: Edit Uploaded Products  

This milestone adds functionality to edit uploaded products, allowing users to update details in the database.  

#### Key Tasks:  
- Create an endpoint to update product data in MongoDB.  
- Add an edit button to the product card.  
- Implement auto-fill for the form to allow easy editing of product details.  

This ensures users can modify product information efficiently.

### Milestone 14: Delete Product Functionality  

This milestone adds the ability to delete products, allowing users to remove items from the database.  

#### Key Tasks:  
- Create an endpoint to delete a product by its ID in MongoDB.  
- Add a delete button to the product card in the frontend.  
- Implement logic to send the product ID to the backend for deletion.  

This milestone covers the delete operation and enhances product management functionality.

### Milestone 15: Navbar Component Integration

In this milestone, we'll create and integrate a reusable Navbar component across all screens for smooth navigation.

#### Key Tasks:
- Create a Navbar with links to:
  - Home
  - My Products
  - Add Product
  - Cart
- Make the Navbar responsive.
- Add the Navbar to all pages for easy navigation.

This milestone teaches how to build and reuse a responsive Navbar for seamless navigation.

### Milestone 16: Product Info Page

In this milestone, we will create a page to display product details, choose quantity, and add to the cart.

#### Key Tasks:
- Create a page to display product data.
- Add a quantity selector.
- Implement an "Add to Cart" button.

This milestone focuses on building a functional product info page for users.

### Milestone 17: Add to Cart Backend  

In this milestone, we will create a backend endpoint to add products to the cart and store them in the database.  

#### Key Tasks:  
- Update the user schema to store cart products.  
- Create a cart schema to manage cart items.  
- Write an endpoint to receive and store product details in the cart.  

This milestone focuses on implementing backend cart functionality for seamless shopping.

### Milestone 18: Fetch Cart Items Backend  

In this milestone, we will create a backend endpoint to retrieve all products in a user's cart for display on the cart page.  

#### Key Tasks:  
- Create an endpoint to handle requests from the cart page.  
- Fetch all cart products using the user's email.  

This milestone focuses on implementing backend logic to retrieve cart items efficiently.

### Milestone 19: Cart Page UI and Quantity Control

In this milestone, we will create a cart page UI and add functionality to increase or decrease the quantity of products in the cart.

#### Key Tasks:
- Build a frontend cart page to display products fetched from the backend.
- Add options to increase and decrease product quantities with + and - buttons.
- Create backend endpoints to handle quantity adjustments.

This milestone enhances the cart functionality by allowing users to modify product quantities.

### Milestone 20: User Profile Page

In this milestone, we will build a frontend profile page to display user data and create a backend endpoint to retrieve that data.

#### Key Tasks:
- Create a backend endpoint to send user data using their email.
- Design a frontend profile page to display the user’s profile photo, name, email, and addresses.
- Add a section for addresses with an “Add Address” button, and display “No address found” if no address exists.

This milestone enhances the user experience by providing a profile page to view and manage their information.

### Milestone 21: Address Input Form  

In this milestone, we will create a frontend form for users to input their address details.  

#### Key Tasks:  
- Design a form to collect country, city, address1, address2, zip code, and address type.  
- Create a state to store the input address.  
- Navigate to this form page when clicking "Add Address" on the profile page.  

This milestone focuses on implementing an address form for better user data management.

### Milestone 22: Save Address in Database  

In this milestone, we will create a backend endpoint to store user addresses in the database.  

#### Key Tasks:  
- Create an endpoint to receive address data from the frontend form.  
- Add the received address to the address array inside the user collection.  

This milestone focuses on implementing backend logic to store user addresses efficiently.

### Milestone 23: Select Address & Order Schema  

In this milestone, we will create a select address page in the frontend and define an order schema in the backend.  

#### Key Tasks:  
- Add a "Place Order" button in the cart to navigate to the select address page.  
- Display saved addresses and allow selection.  
- Create a backend endpoint to fetch user addresses.  
- Define a Mongoose schema for order details.  

This milestone focuses on enabling address selection and order storage.

### Milestone 24: Order Confirmation Page  

In this milestone, we will create an order confirmation page in the frontend to display order details.  

#### Key Tasks:  
- Show all ordered products.  
- Display the selected delivery address.  
- Calculate and show the total price.  
- Add a "Place Order" button.  

This milestone focuses on finalizing order details before placement.

### Milestone 25: Backend Endpoint for Placing Orders  

In this milestone, we will create a backend endpoint to handle order placement.  

#### Key Tasks:  
- Create an API endpoint to receive products, user details, and address information.  
- Retrieve the `_id` of the user using their email.  
- Store each product as a separate order with the same address.  
- Save order details in the MongoDB `orders` collection using the existing order schema.  

This milestone focuses on implementing backend functionality to process and store orders efficiently.

### Milestone 26: Fetch User Orders  

In this milestone, we will create a backend endpoint to retrieve all orders placed by a specific user.  

#### Key Tasks:  
- Create an API endpoint that receives the user's email.  
- Use the email to retrieve the `_id` of the user from the database.  
- Query the `orders` collection to fetch all orders associated with the user.  
- Send the retrieved orders in the API response.  

This milestone focuses on implementing a backend feature that allows users to view their complete order history efficiently.

### Milestone 27: Create My Orders Page  

In this milestone, we will create a frontend page that displays all user orders.  

#### Key Tasks:  
- Create a `MyOrders` page in the frontend.  
- Send a GET request to the `my-orders` endpoint.  
- Include the user’s email in the request to fetch their orders.  
- Display all retrieved orders in a structured format.  
- Add a link to the `MyOrders` page in the navbar for easy access.  

This milestone ensures that users can conveniently view their complete order history in a dedicated section of the website.

### Milestone 28: Add Cancel Order Functionality  

In this milestone, we will enable users to cancel their orders from the `MyOrders` page.  

#### Key Tasks:  
- Add a "Cancel Order" button for each order (hide if already canceled).  
- Create a backend endpoint to receive `order-id` and update the status to "Canceled."  
- Save the updated status in the database.  

This milestone enhances user control by allowing order cancellations.

### Milestone 29: Integrate PayPal Payment Gateway  

In this milestone, we will set up PayPal API for online payments.  

#### Key Tasks:  
- Create a PayPal developer account and get sandbox credentials.  
- Add **COD** and **Online Payment** options on the order confirmation page.  
- Show PayPal buttons when "Online Payment" is selected.  

This milestone sets up the foundation for secure online transactions.

### Milestone 30: Implement PayPal Online Payment  

In this milestone, we will integrate PayPal for online payments.  

#### Key Tasks:  
- Use PayPal sandbox credentials.  
- Install `react-paypal-js` and use `PayPalScriptProvider`.  
- Implement PayPal payment processing.  

This milestone enables secure online transactions.

### Milestone 31: Global State with Redux  

Set up Redux to manage the user's email globally.  

#### Key Tasks:  
- Install `react-redux`.  
- Create `store.js` and `userActions.js`.  
- Configure `userReducer` to store email.  
- Wrap `App` with `Provider`.  

This milestone enables centralized state management.

### Milestone 32: Using Redux for Global State  

Store and access the user's email across all pages using Redux.  

#### Key Tasks:  
- Use `dispatch` in the Login page to store the email in global state.  
- Use `useSelector` to access the email in other pages.  

This milestone enhances state management by making user data accessible throughout the app.

### Milestone 33: JWT Token and Cookies  

Implement JWT authentication by generating and storing tokens in cookies.  

#### Key Tasks:  
- Install `jsonwebtoken`.  
- Create a JWT using `sign` with email and ID.  
- Set `maxAge` for expiration.  
- Store the token in a cookie via the response.  

This milestone focuses on secure authentication using JWT and cookies.

### Milestone 34: JWT Token Validation  

Validate the JWT token stored in cookies to secure user authentication.  

#### Key Tasks:  
- Extract the token from browser cookies and send it to the server.  
- Implement a middleware function to validate the token.  
- Ensure protected pages require authentication before access.  

This milestone enhances security by enforcing JWT validation across the app.

### Milestone 35: Project Deployment  

Deploy both the frontend and backend to make the project live.  

#### Key Tasks:  
- Deploy the backend using a hosting service and get the deployment link.  
- Update the frontend to use the deployed backend URL.  
- Deploy the frontend using a hosting service.  
- Ensure both frontend and backend are working properly.  

This milestone completes the project with a fully deployed and functional website. 🚀