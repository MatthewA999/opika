import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskManager from "./components/task-manager/TaskManager";
import PaginationManager from "./components/pagination-manager/PaginationManager";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/pagination-manager" element={<PaginationManager />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
