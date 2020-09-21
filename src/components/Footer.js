import React, { Component } from 'react'
import "../main.scss"
import "../styles.css"
import fb from './../assets/fb.svg'
import gh from './../assets/github.svg'
import linkedin from './../assets/linkedin.svg'

export default class Footer extends Component {
    render() {
        return (
        <section className="section-footer">
        <div className="row">
        <div className="col-1-of-4">
  
        <a href="https://www.facebook.com/peter.pauco.144" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Logo" className= "footer-logo footer-logo--fb"/></a>
                  <p className='logo-text'>FACEBOOK</p>
        </div>

        <div className="col-1-of-4">
        <a href="https://github.com/95peter95" target="_blank" rel="noopener noreferrer"><img src={gh} alt="Logo" className= "footer-logo u-center-text"/></a>
                  <p className='logo-text'>GITHUB</p>
        </div>
            
        <div className="col-1-of-4">
        <a href="https://www.linkedin.com/in/peter-pau%C4%8Do-a4037b107/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Logo" className= "footer-logo"/></a>
                  <p className='logo-text'>LinkedIn</p>
        </div>
        
            <div className="col-1-of-4">
            <p className='paragraph'>Created by Peter Pauco</p>
        </div>
        </div>
        </section>
        )
    }
}