import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
    // useEffect(() => {
    //     fetch("https://api.github.com/users/RudrakshaSingh")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className="text-center flex flex-col items-center  justify-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers : {data.followers}
            <img className="my-5 rounded-full" src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/RudrakshaSingh");
    return response.json();
};
