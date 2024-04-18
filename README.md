# Opika React Assessment

This project is a demonstration of two core functionalities in React: a Task Manager and a Pagination Manager. It showcases local state management in React for a task manager application and pagination controls for handling a large dataset. Both components are designed with responsive UI and can be used as reference implementations or as a starting point for similar features in other applications

## Project Setup and Running

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have Node.js installed on your computer. You can download and install it from [Node.js official website](https://nodejs.org/)

### Installation

1. Open terminal in project's root directory

2. Install the required npm packages:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits

## Project Components

### Task Manager

Located under the `components/task-manager` directory, this component allows users to:

- Add new tasks via a modal
- Delete tasks with a confirmation dialog
- Mark tasks as completed using checkboxes

Each task displays in a responsive table format, with visual indicators for operation and state changes

### Pagination Manager

Located under the `components/pagination-manager` directory, this component provides:

- A table displaying a list of items (e.g., random strings)
- Pagination controls that manage the viewing of these items over multiple pages
- Functionalities to navigate through the pages, with indicators for the current page and disabled controls on boundary conditions

## Testing the Components

### Task Manager Testing

To test the Task Manager:

1. Navigate to the Task Manager page via the home page link
2. Add a task using the "Add Task" button and fill out the form in the modal
3. Verify that the task appears in the list with an unchecked checkbox and a delete button
4. Mark the task as completed and ensure the checkbox reflects this change
5. Use the delete button to remove the task and confirm the deletion in the dialog

### Pagination Manager Testing

To test the Pagination Manager:

1. Navigate to the Pagination Manager page via clicking the `Pagination Manager`
2. View the default first page with 10 items listed
3. Use the pagination controls to navigate to other pages and observe the changes in the list
4. Verify that the "Previous" button is disabled on the first page and the "Next" button is disabled on the last page
5. Click on different numbered buttons and ensure that the correct items corresponding to the selected page number are displayed
