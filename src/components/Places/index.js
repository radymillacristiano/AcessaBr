import React from 'react'
import './styles.scss'
import Slider from '../Slider'

function Places() {
  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">Locais 
        <span> Acessíveis</span></h2>
        <div className="places__select">
          <h5>Ordenar por:</h5>
          <select>
            <option>Distância</option>
            <option>Alfabeto</option>
          </select>
        </div>
      </div>
      <div className="places__content">
        <Slider />
      </div>
    </section>
  )
}

export default Places