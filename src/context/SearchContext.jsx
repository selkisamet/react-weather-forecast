import { createContext, useContext, useEffect, useState } from "react";
import cityList from "../services/turkey-cities.json";


const SeacrhContext = createContext();

export const SearchProvider = ({ children }) => {
    const [city, setCity] = useState();

    // ==================== Values ==================== //
    const values = {
        city,
        setCity,
        cityList
    }
    // ==================== Values ==================== //


    
    return (
        <SeacrhContext.Provider value={values}>
            {children}
        </SeacrhContext.Provider>
    )
}

export const useSeacrh = () => useContext(SeacrhContext);