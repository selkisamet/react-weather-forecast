import './App.css';
import Body from './components/body';
import { ForecastProvider } from './context/ForecastContext';
import { SearchProvider } from './context/SearchContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <ForecastProvider>
        <SearchProvider>
          <Body />
        </SearchProvider>
      </ForecastProvider>
    </WeatherProvider>
  )

}

export default App;
