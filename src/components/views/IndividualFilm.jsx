import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const IndividualFilm = (props) => {
  let [film, setFilm] = useState(null);

  let { filmId } = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/" + filmId)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          navigate("not_found");
        }
        setFilm(data);
      })
      .catch((err) => alert(err.message));
  }, [location.pathname]);

  if (film) {
    return (
      <div className="container">
        <div className="card">
          <button className="btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <h1>{film.title}</h1>
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
          <div>
            <label className="label" htmlFor="film_director">
              Director
            </label>
            <p className="mt-0" id="film_director">{film.director}</p>
            <label className="label" htmlFor="film_producer">
              Producer
            </label>
            <p className="mt-0" id="film_producer">{film.producer}</p>
            <label className="label" htmlFor="film_director">
              Description
            </label>
            <p className="mt-0">{film.description}</p>
            <label className="label" htmlFor="film_director">
              Release Date
            </label>
            <p className="mt-0">{film.release_date}</p>
            <label className="label" htmlFor="film_director">
              Running Time
            </label>
            <p className="mt-0">{film.running_time} minutes</p>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default IndividualFilm;
