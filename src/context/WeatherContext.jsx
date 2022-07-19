import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { usePosition } from "use-position";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../services/weather-forecast";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    // ==================== Situations ==================== //
    const [weather, setWeather] = useState(null);
    const { latitude, longitude, } = usePosition();
    // ==================== Situations ==================== //

    const getWeatherData = async (lati, long) => {
        const key = WEATHER_API_KEY;
        const url = WEATHER_API_URL;
        const language = navigator.language.split("-")[0];
        const unit = "metric";

        try {
            const { data } = await axios.get(`${url}/weather?lang=${language}&units=${unit}&lat=${lati}&lon=${long}&appid=${key}`);
            setWeather(data);
        } catch (error) {
            alert("Veri alınırken hata meydana geldi " + error);
        }
    }

    // ==================== Values ==================== //
    const values = {
        weather,
        setWeather,
        getWeatherData
    }
    // ==================== Values ==================== //

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]);

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);