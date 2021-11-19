import Home from "./components/views/Home";
import Films from "./components/views/Films";
import People from "./components/views/People";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import IndividualFilm from "./components/views/IndividualFilm";
import NotFound from "./components/views/NotFound";

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
              <NavLink to="films">Films</NavLink>
            </li>
            <li>
              <NavLink to="people">People</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home title="React Routing" />} />
          <Route path="films" element={<Films />} />
          <Route path="films/:filmId" element={<IndividualFilm />} />
          <Route path="people" element={<People />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
