# Dashboard EyeGo

A modern dashboard for managing data and visual analytics built with **Next.js**, **React js**, **Tailwind CSS**, **Redux Toolkit**, and **Recharts**.
It supports PDF and Excel (XLSX) export for table data and uses React Icons for a rich user interface.
The application is containerized using **Docker** for easy deployment and environment consistency.


# Technologies Used

Next.js – Framework for building scalable React apps
React – UI component-based library
Tailwind CSS – Utility-first styling
Redux Toolkit – State management
Recharts – Data visualization
React Icons – Icon set for UI components
jsPDF / autoTable – Generate and export PDF files
xlsx – Export data to Excel format
Docker – Containerization for consistent deployment


# Features
Display users and employee data fetched from the JSONPlaceholder API 
(https://jsonplaceholder.typicode.com/users).
Simple login system: users can log in only if their name and email exist in the API.
Data visualization and export (PDF & Excel).
Fully responsive design with Tailwind CSS.
State management using Redux Toolkit.
Containerized with Docker for consistent deployment.

# API Source

This dashboard uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users)
as a mock data source for employees and authentication.
Only users with existing username and email from this API can successfully log in

# Installation & Setup
# 1️ Clone the repository
git clone https://github.com/your-username/dashboard-eyego.git
cd dashboard-eyego

# 2️ Install dependencies
npm install

# 3️ Run the development server
npm run dev
# Open http://localhost:3000


# Run with Docker
# Build Docker image
docker build -t dashboard-eyego .

# Run the container
docker run -p 3000:3000 dashboard-eyego



## 👩‍💻 Developer
**Ghada El-Sayed Abou El-Fotouh**  
Front-End Developer | UI/UX Designer  
Email: ghadaelsayed20@gmail.com 
Portfolio: [Behance](https://www.behance.net/ghadaelsayed8)