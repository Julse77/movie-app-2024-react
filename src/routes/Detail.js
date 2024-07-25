import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.state === undefined) {
        console.log(undefined);
        navigate(-1);
    } else {
        console.log(location.state);

        return <span>{location.state.title}</span>;
    }
}

export default Detail;