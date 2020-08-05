import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveCLassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logocontainer">
                    <img src={logoImg} alt="Proffy"/>

                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                   src={landingImg}
                   alt=""
                   className="hero-image"
                />

                <div className="buttons-container">
                    <a href="http://#" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar aa
                    </a>

                    <a href="http://#" className="give-classes">
                        <img src={giveCLassesIcon} alt="Estudar"/>
                        Estudar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeart} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )

}

export default Landing;