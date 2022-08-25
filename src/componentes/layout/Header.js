import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="principal">
            <div className="opac">
                <header className="header">
                    <nav className="men1">
                        <ul>
                            <li>Inicio</li>
                            <li>Servicio</li>
                        </ul>
                    </nav>
                    <div className="logo">
                        <img src="assets/img/Gegova-05.png" alt="Logo" />
                    </div>
                    <nav className="men2">
                        <ul>
                            <li>Portafolio</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                </header>
                <div className="ban">
                    <h1>Desarrollo <br /><strong>Web</strong></h1>
                    <p>Lorem Ipsum is simply
                        dummy text of the
                        printing.<br />
                        <button> Leer Mas </button>
                    </p>

                </div>
                <div className="redes">
                    <img src="assets/img/instagram.png" alt="instagram" />
                    <img src="assets/img/linkedin.png" alt="linkedin" />
                    <img src="assets/img/whatsapp.png" alt="Whatsapp" />
                </div>
            </div>
        </div>
    )
}
