import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const SingleFilm = (props) => {
    let [film, setFilm] = useState({});

    let navigate = useNavigate();
    let location = useLocation();
    let { filmId } = useParams();

    const fetchFilm = async () => {
        let data = await apiService(STUDIO_GHIBLI_URL + "films/" + filmId);
        if (!data) navigate("not_found", { replace: true, state: filmId });
        setFilm(data);
    }

    useEffect(() => {
        fetchFilm();
    }, [location.pathname])

    return (
        <div className="card">
                <button onClick={() => navigate(-1)}>Back</button>
            <h1>{film.title}</h1>
            <p>{film.title}</p>
            <p>{film.release_date}</p>
            <p>{film.rt_score}</p>
        </div>
    )
}

export default SingleFilm;