import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faArrowRightFromBracket, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
      <nav>

          <div className="title">
          <h1 >
              <FontAwesomeIcon icon={faCoins} />
              {' '}
            Finance Peer App
              </h1>
        </div>
          <br />
      <ul>
        {isAuth === true ? (
          <Fragment>
            {' '}
           <Link to='/dashboard' className="buttongreen">Dashboard Page</Link>
            {'  '}
            <Link to='/logout' className="buttonred">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                {' '}
                Logout Page
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link to='/login' className="buttongreen">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                {' '}
                Login Page</Link>
            {'  '}
            <Link to='/signup' className="buttongreen">Signup Page</Link>
          </Fragment>
           
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
