import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Films = () => {
  let [films, setFilms] = useState(null);

  let controller = new AbortController();

  async function fetchFilms() {
    let res = await fetch("https://ghibliapi.herokuapp.com/films", {
      signal: controller.signal,
    });
    let data = await res.json();
    console.log(data);
    setFilms(data);
  }

  useEffect(() => {
    fetchFilms();
    return () => controller.abort();
  }, []);

  if (films) {
    return (
      <div className="container">
        <h1>Films</h1>
        <div className="flex">
          {films.map((film) => {
            return (
              <div className="card basis-50" key={film.id}>
                <Link to={`${film.id}`}>
                  <p>{film.title}</p>
                  <small>{film.director}</small>
                  <span
                    className={`badge badge-${
                      film.rt_score > 85
                        ? "success"
                        : film.rt_score > 70
                        ? "warning"
                        : "danger"
                    }`}
                  >
                    {film.rt_score}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
};

export default Films;
