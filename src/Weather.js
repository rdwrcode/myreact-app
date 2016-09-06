import React from 'react';
import xhr from 'xhr';
import Plot from './Plot';
import { connect } from 'react-redux';
import { 
  changeLocation, 
  setData,
  setDates,
  setTemps,
  setSelectedTemp, 
  setSelectedDate } from './actions';

class Weather extends React.Component {
  
  fetchData = (evt) => {
    evt.preventDefault();
    //console.log('fetch data!');

    let location = encodeURIComponent(this.props.location);

    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=dbe69e56e7ee5f981d76c3e77bbb45c0&units=metric';
    let url = urlPrefix + location + urlSuffix;

    let self = this;

    xhr({
      url: url
    }, function (err, data) {
      let body = JSON.parse(data.body);
      let list = body.list;
      let dates = [];
      let temps = [];
      for (let i = 0; i < list.length; i++) {
        dates.push(list[i].dt_txt);
        temps.push(list[i].main.temp);
      }

      self.props.dispatch(setData(body));
      self.props.dispatch(setDates(dates));
      self.props.dispatch(setTemps(temps));
      self.props.dispatch(setSelectedTemp(null));
      self.props.dispatch(setSelectedDate(''));
    });

  };

  changeLocation = (evt) => {
    this.props.dispatch(changeLocation(evt.target.value));
  };

  onPlotClick = (data) => {
    //console.log(data);
    if (data.points) {
      const number = data.points[0].pointNumber;
      this.props.dispatch(setSelectedDate(this.props.dates[number]));
      this.props.dispatch(setSelectedTemp(this.props.temps[number]));
    }
  };

  render() {
    let currentTemp = 'not loaded yet';
    if (this.props.data.list) {
      currentTemp = this.props.data.list[0].main.temp;
    }

    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input 
              placeholder={"City, Country"} 
              type="text" 
              value={this.props.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
        {(this.props.data.list) ? (
          <div className="wrapper">
            <p className="temp-wrapper">
              <span className="temp">
                { this.props.selected.temp ? this.props.selected.temp : currentTemp }
              </span>
              <span className="temp-symbol">°C</span>
              <span className="temp-date">
                { this.props.selected.temp ? this.props.selected.date : ''}
              </span>
            </p>
            <h2>Forecast</h2>
              <Plot
                xData={this.props.dates}
                yData={this.props.temps}
                onPlotClick={this.onPlotClick}
                type="scatter"
              />
          </div>
        ) : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

//export default Weather;
export default connect(mapStateToProps)(Weather);
