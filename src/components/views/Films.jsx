import { useState, useEffect } from "react"

const Films = () => {
    let [films, setFilms] = useState(null);

    let controller = new AbortController();

    async function fetchFilms() {
        let res = await fetch("https://ghibliapi.herokuapp.com/films", { signal: AbortController.signal});
        let data = await res.json();
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
            {films.map(film => {
                return <p key={film.id}>{film.title}</p>
            })}
        </div>
    )
        } else return null;
};

export default Films;