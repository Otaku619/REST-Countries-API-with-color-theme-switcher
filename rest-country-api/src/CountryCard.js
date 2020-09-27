import React from 'react'
import './countryCard.css'

export default function countryCard(props) {
  return (
    <a href={`/${props.alpha}`}>
      <div className={`card ${props.mode ? 'card_dark' : 'card_light'}`}>
        <svg className="flag_parent">
          <image preserveAspectRatio="none" xlinkHref={props.flag} className="flag" />
        </svg>
        <div className="data">
          <h2 style={{fontSize: props.name.length > 20 ? '0.8em' : '1.2em'}}>{props.name}</h2>
          <strong>Population:</strong> <span>{props.population}</span> <br />
          <strong>Region:</strong> <span>{props.region}</span><br />
          <strong>Capital:</strong> <span>{props.capital}</span><br />
        </div>
      </div>
    </a>
  );
}
