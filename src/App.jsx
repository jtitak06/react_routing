import Home from "./components/views/Home";
import Films from "./components/views/Films";
import SingleFilm from "./components/views/SingleFilm";
import People from "./components/views/People";
import SinglePerson from "./components/views/SinglePerson";
import Locations from "./components/views/Locations";
import SingleLocale from "./components/views/SingleLocale";
import Vehicles from "./components/views/Vehicles";
import SingleVehicle from "./components/views/SingleVehicle";
import Species from "./components/views/Species";
import SingleSpecies from "./components/views/SingleSpecies";
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
            <li>
              <NavLink to="Locations">Locations</NavLink>
            </li>
            <li>
              <NavLink to="Vehicles">Vehicles</NavLink>
            </li>
            <li>
              <NavLink to="Species">Species</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Films" element={<Films />}>
          <Route path=":filmId" element={<SingleFilm />} />
        </Route>
        <Route path="People" element={<People />} >
          <Route path=":personId" element={<SinglePerson />} />
        </Route>
        <Route path="Locations" element={<Locations />} >
          <Route path=":localeId" element={<SingleLocale />} />
        </Route>
        <Route path="Vehicles" element={<Vehicles />} >
          <Route path=":vehicleId" element={<SingleVehicle />} />
        </Route>
        <Route path="Species" element={<Species />} >
          <Route path=":speciesId" element={<SingleSpecies />} />
        </Route>
      </Routes>
    </Router>
  )
};

export default App;
