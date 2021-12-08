import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const People = () => {
  let [people, setPeople] = useState([]);

  let location = useLocation();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => alert(err.message));
  }, []);

  if (location.pathname.endsWith("People")) {

    return (
        <div className="container">
            <h1>People</h1>
            <ul>
            {people.map(person => {
                return <li key={person.id}>
                <Link to={person.id}>{person.name}</Link>
                </li>
            })}
            </ul>
        </div>
    )
} else return <Outlet />;
};

export default People;
