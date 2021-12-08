import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Species = () => {
    let [species, setSpecies] = useState([]);

    let location = useLocation();

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/species")
        .then((res) => res.json())
        .then((data) => setSpecies(data))
        .catch((err) => alert(err.message));
    }, {});

    if (location.pathname.endsWith("Species")) {
    
      return (
          <div className="container">
              <h1>Species</h1>
              <ul>
              {species.map(special => {
                  return <li key={special.id}>
                  <Link to={`${special.id}`}>{special.name}</Link>
                  </li>
              })}
              </ul>
          </div>
      )
  } else return <Outlet />;
  };
  
  export default Species;