import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const SingleSpecies = (props) => {
    let [species, setSpecies] = useState({});

    let navigate = useNavigate();
    let location = useLocation();
    let { speciesId } = useParams();

    const fetchSpecies = async () => {
        let data = await apiService(STUDIO_GHIBLI_URL + "species/" + speciesId);
        if (!data) navigate("not_found", { replace: true, state: speciesId });
        setSpecies(data);
    }

    useEffect(() => {
        fetchSpecies();
    }, [location.pathname])

    return (
        <div className="card">
                <button onClick={() => navigate(-1)}>Back</button>
            <h1>{species.name}</h1>
            <p>{species.name}</p>
            <p>{species.eye_colors}</p>
            <p>{species.classification}</p>
        </div>
    )
}

export default SingleSpecies;