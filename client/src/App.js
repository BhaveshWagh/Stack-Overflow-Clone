import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
