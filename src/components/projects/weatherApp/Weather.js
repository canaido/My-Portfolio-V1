import React from 'react'
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const Weather = ({ weatherData }) => {
    return (
        <div class="text-black md:p-16 sm:p-8 p-2 m-0">
            <div class="rounded-xl  bg-weather-3000 pb-2">
                <div class="rounded-t-xl bg-weather-2000 flex justify-center">
                    <div>
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
                    </div>
                    <h1 class="md:text-3xl sm:text-2xl text-lg sm:m-2 m-1 text-center">
                        Town / City Name: <u>{weatherData.name}</u>
                    </h1>
                    <div>
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
                    </div>
                </div>
                <div class="flex justify-between  my-6 mx-2 md:text-xl text-sm">
                    <p>
                        {moment().format('dddd')}, <span>{moment().format('LL')}</span>
                    </p>
                    <p class="capitalize">
                        {weatherData.weather[0].description}
                    </p>
                </div>
                <div class="flex justify-between my-6 mx-2 md:text-xl text-sm">
                    <p>
                        Temperature: {weatherData.main.temp} &deg;C
                    </p>
                    <p>
                        Humidity: {weatherData.main.humidity} %
                    </p>
                </div>
                <div class="flex justify-between my-6 mx-2 md:text-xl text-sm">
                    <p>
                        Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                    </p>
                    <p>
                        Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                    </p>
                </div>
            </div>
            <div class="md:m-12 m-4 p-4 rounded bg-weather-5000">
                <p><b>Disclaimer:</b> this is a geolocation weather application, please accepted request for location for correct functionality.<br /> Service being used is <a href="https://openweathermap.org/" target="_blank" class="italic font-semibold">https://openweathermap.org/</a>. Please click link if you wish to know more.</p>
            </div>
        </div>
    )
}
/*<button
class="rounded mb-2 p-4 bg-weather-4000"
onClick={refresh}
>
Refresh
</button>*/

export default Weather

