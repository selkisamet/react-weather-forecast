import { useForecast } from "../../context/ForecastContext";
import { useSeacrh } from "../../context/SearchContext";
import { useWeather } from "../../context/WeatherContext";
import { } from "./index.css";

function CitySearch() {

    const { city, setCity, cityList } = useSeacrh();
    const { getWeatherData } = useWeather();
    const { getForecastData } = useForecast();

    const changeItem = (event) => {
        cityList.filter((item) => {
            if (item.name === event.target.value) {
                setCity(item);
                getWeatherData(item.latitude, item.longitude);
                getForecastData(item.latitude, item.longitude);
            }
        })
    }

    return (
        <div>
            <div className="select-box">
                <label>Şehirler</label>
                <div className="select">
                    <select onChange={changeItem} id="standard-select">
                        {
                            cityList.map((item, key) => {
                                return <option key={key} value={item.name}>
                                    {item.plate} - {item.name}
                                </option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default CitySearch;