import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

function TeatcherList() {
    return ( 
        <div id="page-teacher-list" className="container">
            <div className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>


            </div>
        </div>
    );
}

export default TeatcherList;