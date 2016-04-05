import apiUtils from '../utils/apiUtils';

import {
  HEADER_TITLE_UPDATE,
  ACTIONS_DROPDOWN_TOGGLE,
  WEATHER_SUCCESS,
  WEATHER_FAILURE
} from '../constants';

export function headerTitleUpdate() {
  return { type: HEADER_TITLE_UPDATE };
}

export function actionsDropdownToggle() {
  return { type: ACTIONS_DROPDOWN_TOGGLE };
}

export function getWeatherSuccess(data) {
  return { type: WEATHER_SUCCESS, data: data };
}

export function getWeatherFailure() {
  return { type: WEATHER_FAILURE, data: null };
}

export function getWeather(settings) {
  return function (dispatch) {
    apiUtils.getWeather(settings.location.value, settings.units.value).then(
      (data) => {
        return dispatch(getWeatherSuccess(data));
      },
      () => {
        return dispatch(getWeatherFailure());
      }
    );
  };
}
