import React, {useState} from 'react'
import './CountryList.css'
import {countries} from './App'
import CountryCard from './CountryCard'
export default function CountryList(props) {
  const [text, setText] = useState('');
  const [toggleList, setToggleList] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(['Filter by Region', 0])
  const toggleListStyle = {
    height: toggleList ? 'auto' : '0',
    opacity: toggleList ? '1' : '0',
    transition: '0.4s'
  }
  const regions = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
    'None'
  ]
  const handleListChange = (x) => {
    if (x != 'None')
      setSelectedRegion([x, 1]);
    else
      setSelectedRegion(['Filter by Region', 0])
    setToggleList(0);
  }
  const regex1 = new RegExp(text, "i")
  const regex2 = new RegExp(selectedRegion[1] ? selectedRegion[0] : '', "i")
  return (
    <div className='countryList'>
      <div className='filters'>
        <input
          className={`filter_text ${props.mode ? 'filter_text_dark' : 'filter_text_light'}`}
          type='text'
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          placeholder='&#xf002;      Search for a country'
        />
        <div className={`filter_region ${props.mode ? 'filter_region_dark' : 'filter_region_light'}`}>
          <div className={`selected ${props.mode ? 'selected_dark' : 'selected_light'}`}
            onClick={() => setToggleList(!toggleList)}>
            {selectedRegion[0]} <span style={toggleList ? {transform: 'rotateZ(180deg) translateY(-5px)'} : {}}>&#x2304;</span>
          </div>
          <div className={`filter_region_list ${props.mode ? 'filter_region_list_dark' : 'filter_region_list_light'}`}
            style={toggleListStyle}
          >
            {
              regions.map(val => (
                <div className={`option ${props.mode ? 'option_dark' : 'option_light'}`}
                  onClick={() => handleListChange(val)}
                >
                  <input
                    type='radio'
                    id={val}
                    name='category' />
                  <label for={val}>{val}</label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='country_card'>
        {
          countries.map((val, ind) => {
            if ((val.name.search(regex1) !== -1 || val.alpha3Code.search(regex1) !== -1 || val.alpha2Code.search(regex1) !== -1) && val.region.search(regex2) !== -1)
              return (<CountryCard
                alpha={val.alpha3Code}
                key={ind}
                mode={props.mode}
                name={val.name}
                population={val.population.toLocaleString()}
                capital={val.capital}
                flag={val.flag}
                region={val.region}
              />)
            else
              return
          })
        }
      </div>
    </div>
  );
}
