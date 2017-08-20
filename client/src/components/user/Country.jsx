import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
    };
    this.selectCountry = this.selectCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectCountry(val, next) {
    this.setState({ country: val });
  }

  handleSubmit(e) {
    axios({
      method: 'post',
      url: 'api/settings',
      data: {
        country: this.state.country,
      }
    }).then(res => {
      res.redirect('/myMap');
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const { country } = this.state;
    return (
      <div className="col text-center">
        <h1>What country do you live in?</h1>
        <br />
        <CountryDropdown
          value={country}
          onchange={(val) => this.selectCountry(val)}
          style={{"marginTop":"40px"}} />
        <br />
        <p>{this.state.country}</p>
      </div>
    )
  }
}

export default Country;
