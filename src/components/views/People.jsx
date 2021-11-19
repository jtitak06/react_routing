import { useState, useEffect } from "react";

const People = () => {
  let [people, setPeople] = useState(null);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => alert(err.message));
  }, []);

  if (people) {
    return (
      <div className="container">
        <h1>People</h1>
        {people.map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    );
  } else return null;
};

export default People;
