import React, { Component } from 'react'
import "../main.scss"
import "../styles.css"
import img1 from './../assets/react.png'
import img2 from './../assets/bootstrap.png'
import img3 from './../assets/css.png'

export default class About extends Component {
    render() {
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-8">
                   <h2 className="heading-secondary">
                        About me
                    </h2>
                </div>
            <div className="row">
                <div className="col-1-of-2">
               <h3 className="heading-tertiary">
                   Personal info
                <p className="paragraph">
                I'm a college student of applied informatics. This year I am finishing my master's year at the UKF university in Nitra. I gained a lot of experience during my studies in programming, database technologies, software engineering, networking, web and data mining. 
                </p>
               </h3>
               <h3 className="heading-tertiary">
                   Experience
                <p className="paragraph">
                My first real experience from programming was while writing my bachelor thesis which dealt with statistical tests as a chi square test and so on, where I programmed a statistical tool for theese tests using framework preact and css framework bootstrap. 
                </p>

                <a href="https://www.dropbox.com/s/pxhs55njev6jqfq/CV_PeterPauco_EN.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="btn-text">CHECK RESUME &rarr;</a>
               </h3>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={img1} alt="i1" className="composition__photo composition__photo--p1"></img>
                        <img src={img2} alt="i2" className="composition__photo composition__photo--p2"></img>
                        <img src={img3} alt="i3" className="composition__photo composition__photo--p3"></img>
                    </div> 
                </div>
            </div>
        </section>
         )
        }
    }
        