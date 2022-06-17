import React, { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import  EmployeeInfo  from '../data/EmployeeInfo';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState('');
    const [cover, setCover] = useState();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);



    const newfile = () => {
        const reader = new FileReader();
        reader.onload = function () {
            window.location.href = reader.result;
        }
        //reader.readAsDataURL(event.target.files[0]);

        fetch('http://127.0.0.1:8000/upload/', {
            method: 'POST',
            headers: {
                'Content-Type': undefined,
            },
            body: cover
        })
            .then(res=>res.json())
            .then(data => {
                setResponse(data);
                console.log(data);
            })
            .catch(error => console.log(error))
    }




  return (
      <div className="dashboard">
          {loading === false && (
            <Fragment className="welcome">
            <h2>Welcome {userEmail}!</h2>
        </Fragment>
          )}
          <br />
          <br />
          <Link className="buttonorange" to="/viewdata">
              <FontAwesomeIcon icon={faBookOpenReader}  />
              {' '}
              View Data
          </Link>
          <br />
          <br />
          <h3 className="txt">Upload Json File Only</h3>
 
      <label>
        <input type="file" onChange={(evt) => setCover(evt.target.files[0])}/>
      </label>
          <br />
          <button className="buttonblue" onClick={() => newfile()}>
              <FontAwesomeIcon icon={faUpload} />
              {' '}
              Upload
          </button>
    <br />
    <Fragment>
        <h4>{ response}</h4>
    </Fragment>

    </div>
  );
};

export default Dashboard;
