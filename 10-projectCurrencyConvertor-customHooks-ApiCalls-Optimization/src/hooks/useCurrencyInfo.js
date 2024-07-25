import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    //empty object is given so that if nothing come in fetch there is a contingency plan if we loop empty object atleast it wont crash
    const [data, setData] = useState({});
    useEffect(() => {
        //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({}); // <- Optional: Set empty data in case of an error
            });
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo; //export whole function so we will also get usestate
