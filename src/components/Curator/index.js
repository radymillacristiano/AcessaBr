import React from 'react'
import './styles.scss'
import curatorPhoto from '../../images/curatorFoto.jpg'

function curatorItem() {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto curador Radymilla"/>
      </div>
      <div className="curator__details">
        <div>
        <h3>Radymilla Cristiano</h3>
        <h6>Curadoria</h6>          
        </div>
        <p>Estudante do Ensino Médio/Técnico,aprendendo sobre progamação e design</p>
      </div>
    </div>
  )
}

export default curatorItem