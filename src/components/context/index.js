import {
    createContext
} from "react"

const WebContext = createContext({
    Api_key: '',
    url: '',
    handelserch: () => {},
    serch: '',
    handelLatandLon: () => {},
    coord: {},
    handelSearchError: () => {},
    searchError:''

})

export default WebContext