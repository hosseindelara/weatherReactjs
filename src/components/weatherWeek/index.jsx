import { useContext, useEffect, useState } from "react"

import axios from "axios"
import { Accordion, Card, Col } from "react-bootstrap"

import WebContext from "../context";

const WeatherWeek = () => {

    const { url, Api_key, coord } = useContext(WebContext);

    const [data, setData] = useState({})

    const dataFetching = async () => {

        try {

            const res = await axios.get(`${url}/onecall`, {
                params: {
                    ...coord,
                    units: 'metric',
                    APPID: Api_key,
                }
            })
            const resData = await res.data
            setData(resData)

        } catch (error) {

        }
    }

    useEffect(() => {
        dataFetching()
        return () => {

        }
    }, [coord])

    return (
        <Col lg={6} md={6} sm={12} xs={12}  >

            <p className=' mt-3 mb-3 mt-sm-3 mt-md-0 mt-lg-0 '>8-day forecast</p>

            <Accordion  >
                {
                    data.daily && data.daily.map((item, index) => (
                        <Card key={index.toString()}  >
                            <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className=' bg-white d-flex ' >
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' width='48' height='48' className=' img-flag' />
                                <p><span>{item.temp.max}</span> / <span>{item.temp.min}</span> <sup>°С</sup></p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index.toString()}>
                                <Card.Body>
                                    <p>feels_like:</p>
                                    <div className=' d-md-flex d-inline-flex ' >
                                        <p className='mr-4' >day
                                        <br />
                                            <span>{item.feels_like.day}</span>
                                        </p>
                                        <p className='mr-4'>eve
                                            <br />
                                            <span>{item.feels_like.eve}</span></p>
                                        <p className='mr-4'>morn
                                            <br />
                                            <span>{item.feels_like.morn}</span>
                                        </p>
                                        <p >night
                                            <br />
                                            <span>{item.feels_like.night}</span>
                                        </p>
                                    </div>
                                    <p>temp:</p>
                                    <div className=' d-md-flex d-inline-flex ' >
                                        <p className='mr-4' >day
                                        <br />
                                            <span>{item.temp.day}</span>
                                        </p>
                                        <p className='mr-4'>eve
                                            <br />
                                            <span>{item.temp.eve}</span></p>
                                        <p className='mr-4'>morn
                                            <br />
                                            <span>{item.temp.morn}</span>
                                        </p>
                                        <p >night
                                            <br />
                                            <span>{item.temp.night}</span>
                                        </p>
                                    </div>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))
                }

            </Accordion>
        </Col>
    )
}

export default WeatherWeek