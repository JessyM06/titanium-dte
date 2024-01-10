import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
  return (
    <div className="container-footer">
    <footer>
        <div className="redes-footer">
            <Link to="/"><FontAwesomeIcon  icon={faFacebook} className='facebook btn' /></Link>
            <Link to="/"><FontAwesomeIcon  icon={faGooglePlusG} className='google btn' /></Link>
            <Link to="/"><FontAwesomeIcon  icon={faInstagram} className='instagram btn' /></Link>
        </div>

        <hr/>
        <h4>© 2024 Gammasoft - Todos los Derechos Reservados</h4>
    </footer>
</div>
  )
}

export default Footer