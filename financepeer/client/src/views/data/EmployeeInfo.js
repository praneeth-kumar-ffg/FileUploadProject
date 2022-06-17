import React, { useState, useEffect, Fragment } from 'react';

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
                });
        }
    }, []);


return (
    <Fragment>
        <h1>hi</h1>
    </Fragment>
)

};
export default EmployeeInfo;


