import React, { useEffect, useState } from "react";
import Weather from "./Weather";

const WeatherCard = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }

        console.log("Data is:", `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        fetchData();
    }, [lat, long])

    return (
        <div class="bg-weather-1000
        xl:h-screen lg:py-48 md:py-48 sm:py-48 py-44">
            <div>
                <h1 class="md:text-5xl sm:text-3xl text-xl text-center font-bold">
                    GeoLocation Weather Application
                </h1>
            </div>
            <div class="flex justify-center items-center">
                {(typeof data.main != 'undefined') ? (
                    <Weather weatherData={data} />
                ) : (
                    <div></div>
                )
                }
            </div >
        </div>

    );
}

export default WeatherCard

