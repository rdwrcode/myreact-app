import React from 'react';
import xhr from 'xhr';

class Weather extends React.Component {
  state = {
    location: '',
    data: {}
  };

  fetchData = (evt) => {
    evt.preventDefault();
    //console.log('fetch data!');

    let location = encodeURIComponent(this.state.location);

    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=dbe69e56e7ee5f981d76c3e77bbb45c0&units=metric';
    let url = urlPrefix + location + urlSuffix;

    let self = this;

    xhr({
      url: url
    }, function (err, data) {
      self.setState({
        data: JSON.parse(data.body)
      });
      //console.log(data);
    });

  };

  changeLocation = (evt) => {
    this.setState({
      location: evt.target.value
    });
  };

  render() {
    let currentTemp = 'not loaded yet';
    if (this.state.data.list) {
      currentTemp = this.state.data.list[0].main.temp;
    }

    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input 
              placeholder={"City, Country"} 
              type="text" 
              value={this.state.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
        <p className="temp-wrapper">
          <span className="temp">{ currentTemp }</span>
          <span className="temp-symbol">°C</span>
        </p>
      </div>
    );
  }
}

export default Weather;
