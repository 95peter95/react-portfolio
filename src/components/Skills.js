import React, { Component } from 'react'
import "../main.scss"
import "../styles.css"

export default class Skills extends Component {
    render() {
        return (
        <section className="section-skills">
        <div className="u-center-text u-margin-bottom">
            <h1 className="heading-primary">
            <h1 className="heading-primary--main">
                    SKILLS
            </h1>
            </h1>
        </div>
        <div className="row">
            <div className="col-1-of-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-pencil-ruler"></i>
                    <h3 className="heading-teartiary">FRONTEND</h3>
                    <p className="feature-box__text">
                        HTML5 / advanced<br></br>
                        CSS(SASS) / advanced<br></br>
                        JAVASCRIPT / advanced<br></br>
                        WORDPRESS / basics<br></br>
                        REACT / basics
                        
                    </p>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-archive"></i>
                    <h3 className="heading-teartiary">BACKEND</h3>
                    <p className="feature-box__text">
                        PHP / basics<br></br>
                        Laravel / basics<br></br>
                        Python / basics<br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-upload"></i>
                    <h3 className="heading-teartiary">Database</h3>
                    <p className="feature-box__text">
                        MySQL / basics<br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-server-upload"></i>
                    <h3 className="heading-teartiary u-margin-bottom-small">VCS</h3>
                    <p className="feature-box__text">
                        GITHUB / basics
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
        </section>
        )
    }
}