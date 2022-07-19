import { useWeather } from "../../context/WeatherContext";
import "./index.css";
import WeatherIcon from 'react-open-weather-icons'

function Weather() {
    const { weather } = useWeather();

    if (!weather) {
        return <p style={{textAlign: "center"}}>
            <img src="img/loading.gif" alt="" />
        </p>
    }

    return (
        <div>
            <div className="card-wrap">
                <div className="card-white"></div>
                <div className="card">
                    <div className="col">
                        <WeatherIcon name={`${weather.weather[0].icon}`} className="icon-forecast" />
                        <div className="city-name">{weather.name}</div>
                        <div className="description">{weather.weather[0].description}</div>
                    </div>
                    <div className="col">
                        <div className="temp">{Math.round(weather.main.temp)} °C</div>
                        <div className="detail-title">DETAY</div>
                        <div className="details">
                        <div className="row">
                                <div className="title">Hissedilen</div>
                                <div className="value">{Math.round(weather.main.feels_like)} °C</div>
                            </div>

                            <div className="row">
                                <div className="title">Rüzgar</div>
                                <div className="value">{weather.wind.speed} m/s</div>
                            </div>

                            <div className="row">
                                <div className="title">Nem</div>
                                <div className="value">{weather.main.humidity} %</div>
                            </div>

                            <div className="row">
                                <div className="title">Basınç</div>
                                <div className="value">{weather.main.pressure} hPa</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="small-partial"></div>
                <div className="big-partial"></div>
            </div>
        </div>
    );
}

export default Weather;