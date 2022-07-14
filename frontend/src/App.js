import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
