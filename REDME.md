# Registration Form using Node.js and MongoDB

This project is a simple web application that demonstrates how to create a registration form using Node.js, Express, and MongoDB. The application allows users to register by submitting a form with their username, email, and password. The submitted data is stored in a MongoDB database.


## Features

- User registration with username, email, and password.
- Data storage in MongoDB.
- Basic form validation.
- Responsive and easy-to-use interface.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Community Edition)



## output 
 ![Mongo DB](/img/1.png)
  ![Registration page](/img/2.png)
   ![completed page](/img/3.png)



## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/kisun-sah/Registation-Page.git
    cd registration-form-nodejs
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start your MongoDB server if it is not already running:

    ```bash
    mongod
    ```

4. Run the application:

    ```bash
    node server.js
    ```

    The server should now be running on `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.

2. Fill out the registration form with a username, email, and password.

3. Submit the form. If successful, the user information will be saved to the MongoDB database.


