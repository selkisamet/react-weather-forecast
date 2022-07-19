import CitySearch from "../city-search";
import Forecast from "../forecast";
import Weather from "../weather";

function Body() {
    return (
        <div className="container">
            <CitySearch />
            <Weather />
            <Forecast />
        </div>
    );
}

export default Body;