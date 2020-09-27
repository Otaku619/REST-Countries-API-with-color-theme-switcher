import React from 'react'
import './CountryDetails.css'
import {alpha, countries} from './App'
export default function CountryDetails(props) {
  const details = props.country;
  return (
    <div className="country_details">
      <button className={`btn btn_back ${props.mode ? 'btn_dark' : 'btn_light'}`}
        type='submit'
        onClick={() => props.history.go(-1)}>
        &larr; &nbsp;&nbsp;Back
        </button>
      <div className="details">
        <img
          className='detail_flag'
          src={details.flag}
          alt="flag"
        />
        <div className={`text_details ${props.mode ? 'text_details_dark' : 'text_details_light'}`}>
          <h1>{details.name}</h1>
          <div className='smaller_details_parent'>
            <div className="smaller_details">
              <span><strong>Native Name: </strong>{details.nativeName}<br /></span>
              <span><strong>Population: </strong>{details.population.toLocaleString()}<br /></span>
              <span><strong>Region: </strong>{details.region}<br /></span>
              <span><strong>Sub Region: </strong>{details.subregion}<br /></span>
              <span><strong>Capital: </strong>{details.capital}<br /></span>
            </div>
            <div className="smaller_details">
              <span><strong>Top Level Domain: </strong>{details.topLevelDomain.join(', ')}<br /></span>
              <span><strong>Currencies: </strong>{details.currencies.map(val => val.name).join(', ')}<br /></span>
              <span><strong>Languages: </strong>{details.languages.map(val => val.name).join(', ')}<br /></span>
            </div>
          </div>
          <div className='neighbours'>
            {details.borders.length ? <strong>Border Countries: </strong> : <></>}
            {
              details.borders.map(val => {
                return (
                  <button className={`btn btn_border ${props.mode ? 'btn_dark' : 'btn_light'}`}
                    type='submit'
                    onClick={() => window.location = `/${val}`}
                  >
                    {countries[alpha[val]].name}
                  </button>
                )
              })}
          </div>
        </div>
      </div>
    </div >
  );
}
