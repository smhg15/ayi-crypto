import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/error404.jpg';

    function NotFoundPage(){
        return (<div>
            <img src={NotFoundImage}  alt= "NotFoundPage"/>
            <p style={{textAlign:"center"}}>
                <h1>"ERROR 404 ("NotFoundPage")"</h1>
              <Link to="/">Go to Home </Link>
            </p>
          </div>)
    }

export default NotFoundPage;