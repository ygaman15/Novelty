![Homepage](https://github.com/madhawaawishka/ReviewNest/blob/8efcc6a694de315570b75c958c5e14f28d8b30d4/images/Screenshot%202024-11-28%20174901.png)



# ReviewNest

A full-featured book review and management application built with the MERN stack (`MongoDB`, `Express`, `React`, `Node.js`). Users can browse books, leave reviews with star ratings, and manage their favorites. Admins have extended capabilities for adding, editing, and deleting books, as well as managing user data and access.

Live Link: [ReviewNest](https://reviewnest-frontend.onrender.com/)

## Sample Logins

#### Admin


| Email | Password     |
| :-------- | :------- |
| john.doe@example.com |password123 | 

#### user

| Email | Password     |
| :-------- | :------- |
| madhawaawishka@gmail.com |12345678 | 

## Features

- **User Authentication:**
  - Secure user registration and login system.
  - Bcrypt for password hashing.

- **Book Listing with Reviews & Ratings:**
  - Browse and search for books.
  - Leave comprehensive reviews with star ratings.
  - Read and gain insights from community reviews.

- **User Profile Pages:**
  - Personalized profiles to track activity.
  - Manage and curate a list of favorite books.


- **User Roles & Permissions:**
  - Differentiation between user and admin roles.
  - Admin capabilities to add, update, and delete book listings.
  - Manage user data and user roles (excluding a master admin).


## Technologies Used

- **Frontend:**
  - React.js:For building the interactive user interface.
  - Tailwind CSS:For responsive and utility-first CSS styling.
  - Shadcn UI library:For building clean and modern UI components.
  - React Hook Form:For managing form data efficiently.


- **Backend:**
  - Node.js & Express.js:For building a RESTful API and handling HTTP requests.
  - MongoDB & Mongoose:For database management and object modeling.
  - CORS: For handling cross-origin requests between the frontend and backend
  - Bcrypt:For hashing passwords and ensuring secure storage.


- **Other Dependencies:**
  - Axios:For making HTTP requests from the frontend to the backend.   
  - Cloudinary:For optional image uploads (e.g., book cover images).

## Installation Guide

### Requirements

- Node.js
- MongoDB
  
You can use use Mongo Atlas URL instead of local MongoDB

### Configure Environment Variables

### Installation

#### Clone the Repository

```shell
git clone https://github.com/NEET64/book-world.git
cd ReviewNest
```


#### Direct to frontend .env file and change:

```shell
VITE_BACKEND_URL="http://localhost:8000"
```




#### Install packages

```shell
cd backend
npm install
cd ..
cd frontend
npm install
```

#### Start Frontend

Make sure you are in `frontend` directory

```shell
npm run dev
```

#### Start Backend

Make sure you are in `backend` directory

```shell
node index.js
```

Now open `localhost:5173` on your browser

## Screenshots

![Tableview](https://github.com/madhawaawishka/ReviewNest/blob/5c07321b5877aca6beec2a4ac28bd9ebbf5c26d3/images/Screenshot%202024-11-28%20175002.png)
![All Users](https://github.com/madhawaawishka/ReviewNest/blob/5c07321b5877aca6beec2a4ac28bd9ebbf5c26d3/images/Screenshot%202024-11-28%20175318.png)
![Favourites](https://github.com/madhawaawishka/ReviewNest/blob/5c07321b5877aca6beec2a4ac28bd9ebbf5c26d3/images/Screenshot%202024-11-28%20175401.png)
![Details1](https://github.com/madhawaawishka/ReviewNest/blob/5c07321b5877aca6beec2a4ac28bd9ebbf5c26d3/images/Screenshot%202024-11-28%20175455.png)




## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)





## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://madhawaawishka.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/madhawaawishka/)
