import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const Films = (props) => {
    let [films, setFilms] = useState([]);

    let controller = new AbortController();
    let location = useLocation();

    const fetchInitialData = async () => {
        let data = await apiService(STUDIO_GHIBLI_URL + "films", "GET", { signal: controller.signal,
        });
        if (!data) return alert("Failed to fetch films");
        setFilms(data);
    }

//    async function fetchFilms() {
//        let res = await fetch("https://ghibliapi.herokuapp.com/films", { signal: AbortController.signal});
//        let data = await res.json();
//        setFilms(data);
//    }
    
    useEffect(() => {
        fetchInitialData();
        return () => { 
            controller.abort(); 
        };
    }, []);

    if (location.pathname.endsWith("Films")) {
        console.log(films);
        return (
            <div className="container">
                <h1>Films</h1>
                <ul>
                {films.map(film => {
                    return <li key={film.id}>
                    <Link to={`${film.id}`}>{film.title}</Link> by {film.director}
                    </li>
                })}
                </ul>
            </div>
        )
    } else return <Outlet />;
};

export default Films;