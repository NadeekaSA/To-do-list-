# Simple React To-Do List

This is a simple To-Do List application built with React. It allows users to enter their name and then add and remove tasks from a list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installing

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the app in development mode:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## How to Use

1.  **Enter Your Name:** When you first open the application, you will be prompted to enter your name. Type your name into the input field and click "Submit".
2.  **Add Tasks:** Once your name is submitted, you will see the main To-Do List interface.
    *   Type a task into the input field (e.g., "Buy groceries").
    *   Click the "Add Task" button.
    *   The task will appear in the list below.
3.  **Remove Tasks:**
    *   To remove a task from the list, click the "X" button next to the task.
    *   The task will be deleted from the list.
4.  **Error Handling:** If you try to add an empty task, an error message "Please enter a task!" will be displayed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Technologies Used

*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [Create React App](https://github.com/facebook/create-react-app) - A tool to bootstrap React applications.
*   HTML
*   CSS
*   JavaScript

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
