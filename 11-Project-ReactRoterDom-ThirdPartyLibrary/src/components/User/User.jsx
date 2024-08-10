import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();
    return <div className="bg-gray-600 flex justify-center  text-white text-3xl p-4 mx-0">User:{userid}</div>;
}

export default User;
