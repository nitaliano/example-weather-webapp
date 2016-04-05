import { WEATHER_SUCCESS, WEATHER_FAILURE } from '../constants';

const weather = {
  city: '',
  country: '',
  weatherList: []
};

export default function (state = weather, action) {
  switch (action.type) {
    case WEATHER_SUCCESS:
      return Object.assign({}, state, {
        city: action.data.city.name,
        country: action.data.city.country,
        weatherList: action.data.list
      });
    default:
      return state;
  }
};
