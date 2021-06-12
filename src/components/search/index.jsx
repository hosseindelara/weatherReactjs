
import { useContext } from 'react';

import { Form, Row, Col, Alert } from 'react-bootstrap'

import WebContext from '../context/index'

const Search = () => {

    const { handelSearch, handelSearchError, searchError } = useContext(WebContext)


    const handelSubmit = (event) => {

        event.preventDefault();
        
        if (event.target[0].value.length > 2) {

            handelSearch(event.target[0].value)
            handelSearchError('')
            event.target[0].value=''
        }
        else {
            handelSearchError('please enter full')
        }
    }

    return (

        <>
            <Row className=' align-content-center justify-content-center  mt-5 mb-2 ' >
                <Col lg={4} md={6} sm={12} xs={12} >
                    <Form onSubmit={handelSubmit}   >
                        <Form.Group >
                            <Form.Label>weather </Form.Label>
                            <Form.Control type="text" placeholder="search city name" />
                        </Form.Group>
                    </Form>
                    {
                        searchError ?
                            <Alert variant='danger'>{searchError}</Alert>
                            : null
                    }
                </Col>

            </Row>
        </>

    )
}

export default Search