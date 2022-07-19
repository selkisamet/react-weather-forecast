import "./index.css";
import { useForecast } from "../../context/ForecastContext";
import WeatherIcon from 'react-open-weather-icons'



function Forecast() {

    const { forecast, forecastDays } = useForecast();

    if (!forecast) {
        return <p style={{ textAlign: "center" }}>
            <img src="img/loading.gif" alt="" />
        </p>
    }

    return (
        <div>
            <h1 className="forecast-title">7 Günlük Hava Tahmini</h1>

            <div className="days">
                {
                    forecast.list.splice(0, 7).map((item, key) => {
                        return <div key={key}>
                            <div className="day">
                                <div className="overlay">
                                <div className="row">
                                        <div className="title">Hissedilen</div>
                                        <div className="value">{Math.round(item.main.feels_like)} °C</div>
                                    </div>

                                    <div className="row">
                                        <div className="title">Rüzgar</div>
                                        <div className="value">{item.wind.speed} m/s</div>
                                    </div>

                                    <div className="row">
                                        <div className="title">Nem</div>
                                        <div className="value">{item.main.humidity} %</div>
                                    </div>

                                    <div className="row">
                                        <div className="title">Basınç</div>
                                        <div className="value">{item.main.pressure} hPa</div>
                                    </div>
                                </div>
                                <WeatherIcon name={`${item.weather[0].icon}`} className="icon-forecast" />
                                <div className="temp">{Math.round(item.main.temp)} °C</div>
                                <div className="description">{item.weather[0].description}</div>
                            <div className="day-name">{forecastDays[key]}</div>
                            </div>

                        </div>
                    })
                }
            </div>

        </div>
    );
}

export default Forecast;