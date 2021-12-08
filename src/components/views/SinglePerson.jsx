import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const SinglePerson = (props) => {
    let [person, setPerson] = useState({});

    let navigate = useNavigate();
    let location = useLocation();
    let { personId } = useParams();

    const fetchPerson = async () => {
        let data = await apiService(STUDIO_GHIBLI_URL + "people/" + personId);
        if (!data) navigate("not_found", { replace: true, state: personId });
        setPerson(data);
    }

    useEffect(() => {
        fetchPerson();
    }, [location.pathname])
    console.log(SinglePerson, personId);
    return (
        <div className="card">
                <button onClick={() => navigate(-1)}>Back</button>
            <h1>{person.name}</h1>
            <p>{person.name}</p>
            <p>{person.gender}</p>
            <p>{person.age}</p>
        </div>
    )
}

export default SinglePerson;