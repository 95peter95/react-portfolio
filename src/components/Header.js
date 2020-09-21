import React, { Component } from 'react';
import logo from './../assets/logo-white.png'
import '../main.scss';

class Header extends Component {
    render() {
        return (

        <div>
            <header className="header">

                <div className="header__logo-box"> 

                  <img src={logo} alt="Logo" className= "header__logo"/>
                  
                </div>

                <div className="header__text-box">

                <h1 className="heading-primary">
                  <span className="heading-primary--main">
                    PETER PAUČO
                  </span>
                  <span className="heading-primary--sub">
                    FRONT END DEVELOPER
                  </span>
                </h1>

                <a href="https://github.com/95peter95" target="_blank" rel="noopener noreferrer" className="btn btn--white">My GITHUB</a>
                
                </div>
              
            </header>
        </div>

        );
    }
}

export default Header;
