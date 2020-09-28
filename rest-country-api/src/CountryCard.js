import React from 'react'
import './countryCard.css'

export default function countryCard(props) {
  return (
    <div>
      <div className={`card ${props.mode ? 'card_dark' : 'card_light'}`}
        onClick={() => window.location = `/${props.alpha}`}
      >
        <svg className="flag_parent">
          <image preserveAspectRatio="none" xlinkHref={props.flag} className="flag" width="auto" height="auto"/>
        </svg>
        <div className="data">
          <h2 style={{fontSize: props.name.length > 15 ? '0.8em' : '1.2em'}}>{props.name}</h2>
          <strong>Population:</strong> <span>{props.population}</span> <br />
          <strong>Region:</strong> <span>{props.region}</span><br />
          <strong>Capital:</strong> <span>{props.capital}</span><br />
        </div>
      </div>
    </div>
  );
}
