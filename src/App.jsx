import Home from "./components/views/Home";
import Films from "./components/views/Films";
import People from "./components/views/People";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="Films">Films</NavLink>
            </li>
            <li>
              <NavLink to="People">People</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Films" element={<Films />} />
        <Route path="People" element={<People />} />
      </Routes>
    </Router>
  )
};

export default App;
