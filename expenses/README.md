# Expenses Tracker

This is a responsive React + TypeScript app for tracking milk and ration expenses, using Firebase Firestore as the backend database. It features CRUD operations, filtering, and a modern UI with Material UI and SCSS.

## Features

- Add, view, update, and delete milk expenses
- Filter expenses by month and year
- Responsive design for mobile, tablet, and desktop
- Uses Firebase Firestore for cloud data storage
- Modern UI with Material UI and SCSS

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd expenses
```

### 2. Install dependencies

```
npm install
```

### 3. Firebase Setup

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project and add a web app
- Enable Firestore Database in the Firebase Console
- Copy your Firebase config and paste it in `src/firebase.ts`

### 4. Start the development server

```
npm run dev
```

- Open the shown localhost URL (usually http://localhost:5173/)

## Usage

- **Milk Expenses:**
  - Add a new expense using the form (date, milk in liters, price per liter)
  - View all expenses in a table, filter by month/year, see totals
  - Update or delete expenses (if implemented)
- **Ration Expenses, About, Contact Us:**
  - Navigate using the main nav bar

## Project Structure

- `src/components/` — React components for pages and navigation
- `src/api/milkExpenses.ts` — All CRUD functions for Firestore
- `src/firebase.ts` — Firebase initialization
- `src/App.tsx` — Main app and routing
- `.gitignore` — Ignores node_modules, build, and config files

## Notes

- All dependencies are managed via npm
- The app is fully responsive and works on all devices
- No server setup is needed for Firebase; it is cloud-hosted

## Troubleshooting

- If you see errors on submit, check your Firebase rules and make sure your Firestore database is enabled
- For local-only development, you can use the Firebase Emulator Suite (optional)

---

Feel free to customize and extend the app for your needs!

# Expenses Tracker

This is a React application built with TypeScript for tracking expenses.

## Features

- Add, edit, and delete expenses
- View expenses in a list
- Filter expenses by date and category

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm (v5.6 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/expenses.git
   ```

2. Navigate to the project directory:

   ```
   cd expenses
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
npm start
```

This will open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```
npm run build
```

This will generate a `build` folder with optimized files for deployment.

### Running Tests

To run the tests, use:

```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
