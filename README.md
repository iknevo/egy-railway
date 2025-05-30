# Egy Railway

A modern web application built with **React**, **Supabase** and **Vite**. This project leverages Vite for lightning-fast development and build, and React for building interactive UIs.

## Project Description

Egy Railway is a web application designed to provide a seamless user experience for railway services. It allows users to search for train schedules, book tickets, and manage their travel plans efficiently. The application is built with a focus on performance, scalability, and user-friendly design.

## How It Works

The application is structured as a single-page application (SPA) using React for the frontend. Vite is used as the build tool to ensure fast development and optimized production builds. The application communicates with a backend API provided by supabase to fetch and manage data related to train schedules and bookings. The architecture follows a component-based design, allowing for easy maintenance and scalability.

## Features

- user authentication (login, signup & logout)
- search and view trains
- booking a train ticket
- cancel booking
- download ticket
- edit user profile

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/egy-railway.git
cd egy-railway
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Building for Production

```bash
npm run build
# or
pnpm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
pnpm run preview
# or
yarn preview
```

## Project Structure

```
egy-railway/
├── public/         # Static assets
├── src/            # Source code
│   ├── components/ # React components
│   ├── App.jsx     # Main App component
│   └── main.jsx    # Entry point
├── .eslintrc.cjs   # ESLint configuration
├── vite.config.js  # Vite configuration
├── package.json
└── README.md
```

## Available Scripts

- `dev` – Start the development server
- `build` – Build for production
- `preview` – Preview the production build
- `lint` – Run ESLint

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework that can be composed to build any design, directly in your markup.
- [Vite](https://vitejs.dev/) - A build tool that significantly improves the frontend development experience
- [ESLint](https://eslint.org/) - A tool for identifying and fixing problems in JavaScript code
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [npm](https://www.npmjs.com/) - A package manager for JavaScript
- [pnpm](https://pnpm.io/) - An alternative package manager for JavaScript
- [pnpm](https://pnpm.io/) - An alternative package manager for JavaScript
