import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { usePosition } from "use-position";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../services/weather-forecast";

const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {

    // ==================== Situations ==================== //
    const [forecast, setForecast] = useState(null);
    const { latitude, longitude, } = usePosition();
    // ==================== Situations ==================== //

    const getForecastData = async (lati, long) => {
        const key = WEATHER_API_KEY;
        const url = WEATHER_API_URL;
        const language = navigator.language.split("-")[0];
        const unit = "metric";

        try {
            const { data } = await axios.get(`${url}/forecast?lang=${language}&units=${unit}&lat=${lati}&lon=${long}&appid=${key}`);
            setForecast(data);

        } catch (error) {
            alert("Veri alınırken hata meydana geldi " + error);
        }
    }

    const WEEK_DAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    const dayOfWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

    // ==================== Values ==================== //
    const values = {
        forecast,
        setForecast,
        forecastDays,
        getForecastData
    }
    // ==================== Values ==================== //

    useEffect(() => {
        latitude && longitude && getForecastData(latitude, longitude);
    }, [latitude, longitude]);

    return (
        <ForecastContext.Provider value={values}>
            {children}
        </ForecastContext.Provider>
    )
}

export const useForecast = () => useContext(ForecastContext);