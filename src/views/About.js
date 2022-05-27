import React from 'react';
import { Link } from 'react-router-dom';
import UnderConstruction from '../assets/underConstruction.jpg';

    function NotFoundPage(){
        return (<div>
            <img src={UnderConstruction}  alt= "UnderConstruction"/>
            <p style={{textAlign:"center"}}>
                <h1>"Sorry, please try later... we are working too"</h1>
              <Link to="/">Go to Home </Link>
            </p>
          </div>)
    }

export default NotFoundPage;