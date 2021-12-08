import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Vehicles = () => {
    let [vehicles, setVehicles] = useState([]);

    let location = useLocation();

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/vehicles")
        .then((res) => res.json())
        .then((data) => setVehicles(data))
        .catch((err) => alert(err.message));
    }, {});

    if (location.pathname.endsWith("Vehicles")) {
    
      return (
          <div className="container">
              <h1>Vehicles</h1>
              <ul>
              {vehicles.map(vehicle => {
                  return <li key={vehicle.id}>
                  <Link to={`${vehicle.id}`}>{vehicle.name}</Link>
                  </li>
              })}
              </ul>
          </div>
      )
  } else return <Outlet />;
  };
  
  export default Vehicles;