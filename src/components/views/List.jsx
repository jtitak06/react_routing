import { useState, useEffect } from "react";

const List = (props) => {
  let [list, setList] = useState(null);

  console.log(props.endpoint);

  const fetchData = async () => {
    let res = await fetch("https://ghibliapi.herokuapp.com/" + props.endpoint);
    let data = await res.json();
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, [props.endpoint]);

  if (list) {
    return (
      <div className="container">
        <h1>{props.endpoint}</h1>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.id || "No id"}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <small>Loading...</small>;
};

export default List;
