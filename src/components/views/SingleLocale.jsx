import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const SingleLocale = (props) => {
    let [locale, setLocale] = useState({});

    let navigate = useNavigate();
    let location = useLocation();
    let { localeId } = useParams();

    const fetchLocale = async () => {
        let data = await apiService(STUDIO_GHIBLI_URL + "locations/" + localeId);
        if (!data) navigate("not_found", { replace: true, state: localeId });
        setLocale(data);
    }

    useEffect(() => {
        fetchLocale();
    }, [location.pathname])

    return (
        <div>
        <button onClick={() => navigate(-1)}>Back</button>
            <h1>{locale.name}</h1>
            <p>${locale.name}</p>
            <p>{locale.climate}</p>
            <p>{locale.terrain}</p>
        </div>
    )
}

export default SingleLocale;