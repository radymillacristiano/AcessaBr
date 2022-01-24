import React from 'react'
import './style.scss'
import logoAcessaBr from '../../images/logoAcessaBr.svg'
import logoEbac from '../../images/logoEbac.svg'

const Header = (props) => {
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <img src={logoAcessaBr} alt="Logo acessabr" />
        <span className="header__city"> / {props.city} - {props.state}</span>
      </div>
      <div className="header__logo header__logo--ebac">
        <span className="header__span">Apoio:</span>
        <img src={logoEbac} alt="Logo ebac" />
      </div>
    </header>
  )
}

export default Header
