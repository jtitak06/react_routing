import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Locations = () => {
  let [locations, setLocations] = useState([]);

  let location = useLocation();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => alert(err.message));
  }, []);

  if (location.pathname.endsWith("Locations")) {
    
    return (
        <div className="container">
            <h1>Locations</h1>
            <ul>
            {locations.map(location => {
                return <li key={location.id}>
                <Link to={`${location.id}`}>{location.name}</Link>
                </li>
            })}
            </ul>
        </div>
    )
} else return <Outlet />;
};

export default Locations;