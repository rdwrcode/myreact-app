import xhr from 'xhr';

export function fetchData(url) {
  return function thunk(dispatch) {
    xhr({
      url: url
    }, function (err, data) {

      let dataBody = JSON.parse(data.body);
      let list = dataBody.list;
      let dates = [];
      let temps = [];
      for (let i = 0; i < list.length; i++) {
        dates.push(list[i].dt_txt);
        temps.push(list[i].main.temp);
      }
 
      dispatch(setData(dataBody));
      dispatch(setDates(dates));
      dispatch(setTemps(temps));
      dispatch(setSelectedDate(''));
      dispatch(setSelectedTemp(null));
    });
  }
}

export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
}

export function setData(data) {
  return {
    type: 'SET_DATA',
    data: data
  };
}

export function setDates(dates) {
  return {
    type: 'SET_DATES',
    dates: dates
  };
}

export function setTemps(temps) {
  return {
    type: 'SET_TEMPS',
    temps: temps
  };
}

export function setSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date: date
  };
}

export function setSelectedTemp(temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp: temp
  };
}



// TODO Not wired up yet for the counter. Complete the Weather component first.
export function incrementCount() {
  return {
    type: 'INC_COUNT',
  };
}
