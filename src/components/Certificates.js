import React, { Component } from 'react'
import cer1 from './../assets/cer1.jpg'
import cer2 from './../assets/cer2.jpg'
import cer3 from './../assets/cer3.jpg'
import "../main.scss"
import "../styles.css"

export default class Certificates extends Component {
    render() {
        return (
        <section className="section-certificates">
        <div className="u-center-text u-margin-bottom-big">
                   <h2 className="heading-secondary">
                        Certificates
                    </h2>
                </div> 
        <div className="row">
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                <img src={cer1} alt="i1" className="card__side card__side--front--pic"></img>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                <p className="feature-box__text u-center-text-2 ">About this course
                    The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design.
                </p></div>
                </div>    
            </div>
        <div className="col-1-of-3">
        <div className="card">
                <div className="card__side card__side--front">
                <img src={cer2} alt="i1" className="card__side card__side--front--pic"></img>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                <p className="feature-box__text u-center-text-2 ">
                Reactjs, Hooks, Redux, React Routing, Animations, Next.js.</p>
                </div>
            </div>    
        </div>
            <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                <img src={cer3} alt="i1" className="card__side card__side--front--pic"></img>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                <p className="feature-box__text u-center-text-2 ">ES6 Javascript Development from scratch. Get practice with live examples and learn exactly where to apply ES6 features.</p>
                </div>
            </div>    
        </div>
        </div>
        </section>
        
        )
    }
}