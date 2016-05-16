import { SETTINGS_UNITS, SETTINGS_LOCATION } from '../constants';

const settings = {
  units: {
    value: 'imperial',
    title: 'Units',
    options: [
      'metric',
      'imperial'
    ]
  },
  location: {
    title: 'Location',
    value: 94066
  }
};

export default function (state = settings, action) {
  switch (action.type) {
    case SETTINGS_UNITS:
      const units = Object.assign({}, state.units, { value: action.value });
      return Object.assign({}, state, { units: units });
    case SETTINGS_LOCATION:
      const loc = Object.assign({}, state.location, { value: action.value });
      return Object.assign({}, state, { location: loc });
    default:
      return state;
  }
}
