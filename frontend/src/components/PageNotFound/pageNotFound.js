import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import './pageNotFound.css'

function PageNotFound (props){
    return(
        <div className="page-not__found">
             <FontAwesomeIcon  className="icon-exclamation fa-3x" icon={faExclamationTriangle}></FontAwesomeIcon>            
            <h2>404</h2>
            <h3>Page Not Found</h3>
        </div>
    )
}

export default PageNotFound;