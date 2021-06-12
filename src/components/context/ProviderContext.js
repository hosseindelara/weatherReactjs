import { useState } from "react";

import WebContext from "."

const ProviderContext = ({ children }) => {

    const [search, setSearch] = useState('Tehran,ir');

    const handelSearch = (value) => setSearch(value);

    const [coord, setCoord] = useState({ lat: 35.6944, lon: 51.4215 })

    const handelLatandLon = (data) => setCoord(data)

    const [searchError, setSearchError] = useState('');
    
    const handelSearchError = (value) => setSearchError(value)

    return (
        <WebContext.Provider value={{
            url: 'http://api.openweathermap.org/data/2.5',
            Api_key: '4fc440bc3b8f66a8bc70ac9c98440d8c',
            handelSearch,
            search,
            handelLatandLon,
            coord,
            handelSearchError,
            searchError

        }} >
            { children}
        </WebContext.Provider>
    )


}

export default ProviderContext