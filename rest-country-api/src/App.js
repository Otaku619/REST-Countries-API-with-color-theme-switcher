import React, {useState} from 'react';
import './App.css';
import CountryList from './CountryList'
import {Route, Switch} from 'react-router-dom'
import CountryDetails from './CountryDetails'
const httpReq = new XMLHttpRequest();
httpReq.open('GET', 'https://restcountries.eu/rest/v2/all', 0)
httpReq.send(null);
const countries = JSON.parse(httpReq.responseText);
var alpha = {};
countries.forEach((val, ind) => alpha[val.alpha3Code] = ind);
function App() {
  const [mode, setMode] = useState(0);
  console.log(countries);
  return (
    <div className={`${mode ? 'app_dark' : 'app_light'}`}>
      <div className={`app_header ${mode ? 'app_header_dark' : 'app_header_light'}`}>
        < h1 className='header_text'>Where in the world?</h1>
        <button
          className={`toggle_mode ${mode ? 'toggle_mode_dark' : 'toggle_mode_light'}`}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setMode(!mode);
          }}>
          <div>
            {
              mode ?
                <i class="fas fa-sun"></i> :
                <i class="fas fa-moon"></i>
            }
            {mode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </button>
      </div>
      <Switch>
        <Route exact path='/'
          render={props => <CountryList mode={mode} {...props} />} />
        {
          countries.map(val => (
            <Route exact path={[`/${val.name}`, `/${val.alpha3Code}`, `/${val.alpha2Code}`]}
              render={props => <CountryDetails country={val} {...props} />}
            />
          ))
        }
      </Switch>
    </div>
  )
}

export default App;
export {countries, alpha};
