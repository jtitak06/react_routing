import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { apiService } from "../utils/apiService";
import { STUDIO_GHIBLI_URL } from "../utils/data";

const SingleVehicle = (props) => {
    let [vehicle, setVehicle] = useState({});

    let navigate = useNavigate();
    let location = useLocation();
    let { vehicleId } = useParams();

    const fetchVehicle = async () => {
        let data = await apiService(STUDIO_GHIBLI_URL + "vehicles/" + vehicleId);
        if (!data) navigate("not_found", { replace: true, state: vehicleId });
        setVehicle(data);
    }

    useEffect(() => {
        fetchVehicle();
    }, [location.pathname])

    return (
        <div className="card">
                <button onClick={() => navigate(-1)}>Back</button>
            <h1>{vehicle.name}</h1>
            <p>{vehicle.name}</p>
            <p>{vehicle.description}</p>
            <p>{vehicle.vehicle_class}</p>
        </div>
    )
}

export default SingleVehicle;