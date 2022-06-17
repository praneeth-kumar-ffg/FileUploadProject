import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button,Row } from 'react-bootstrap';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const EmployeeInfo = () => {
    const [data, setData] = useState();


    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('http://localhost:3000/login');
        } else {
            fetch('http://127.0.0.1:8000/viewdata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    console.log(data);
                });
        }
    }, []);


return (
    <Fragment >
        <div classname="employee">
        {
            data && data.length!=0 ? data.map(item => (

                <Container>
                    <Row style={{margin: '4px'}}>
                    <Col>
                        <Card border="secondary"  className="bg-secondary text-white" >
                                <Card.Header style={{ color: 'orange' }}>
                                    <FontAwesomeIcon icon={faUserCheck} />
                                    {' '}
                                    EmployeeId  {item.employee_id}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ color: 'darkgrey' }}>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                  </Row>
                </Container>

               
            )) :
                <h2>No Data !!!</h2>
        }
        </div>
    </Fragment>
)

};
export default EmployeeInfo;


