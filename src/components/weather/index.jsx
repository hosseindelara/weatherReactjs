import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap";
import WebContext from "../context";

const Weather = () => {

    const { url, Api_key, search, handelLatandLon, coord, handelSearchError } = useContext(WebContext);

    const [data, setData] = useState({})

    const dataFetching = async () => {
        try {
            const res = await axios.get(`${url}/weather`, {
                params: {
                    q: search,
                    APPID: Api_key,
                    units: 'metric'
                }
            })
            const resData = await res.data

            setData(resData);

            if (resData.coord.lat === coord.lat) {

            } else {
                handelLatandLon(resData.coord)
            }

        } catch (error) {
            handelSearchError(error.response.data.message);
        }

    }

    useEffect(() => {
        dataFetching()
        const timerupdate = setInterval(dataFetching, (1000 * 60 * 5));

        return () => clearInterval(timerupdate);

    }, [search])




    return (
        <Col lg={6} md={6} sm={12} xs={12} >
            {
                data?.sys ?
                    <Card>
                        <Card.Header>
                            <img src={`http://openweathermap.org/images/flags/${data.sys.country.toLowerCase()}.png`} alt="" className=" d-flex ml-auto img-flag" />

                            <p>cityname: <span>{data.name}</span>  </p>
                        </Card.Header>
                        <Card.Body>

                            <div  >
                                < img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.name} className="img-fluid ml-auto " />
                                <span>{data.main.temp} <sup>°С</sup> </span>
                            </div>


                            <p> feels like : <span>{data.main.feels_like} <sup>°С</sup> </span></p>
                            <p> humidity : <span>{data.main.humidity}</span></p>
                            <p> pressure : <span>{data.main.pressure}</span></p>
                            <p> temp max : <span>{data.main.temp_max}<sup>°С</sup> </span></p>
                            <p> temp min : <span>{data.main.temp_min}<sup>°С</sup> </span></p>
                        </Card.Body>

                    </Card>
                    : null
            }
        </Col >
    )
}

export default Weather