export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
}

export function incrementCount() {
  return {
    type: 'INC_COUNT',
  };
}
