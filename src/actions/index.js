import apiUtils from '../utils/apiUtils';
import weatherUtils from '../utils/weatherUtils';
import * as CONSTANTS from '../constants';

export function settingsUnits(value) {
  return { type: CONSTANTS.SETTINGS_UNITS, value: value };
}

export function settingsLocation(value) {
  return { type: CONSTANTS.SETTINGS_LOCATION, value: value };
}

export function settingsChangeLocation(settings, value) {
  return function (dispatch) {
    dispatch(settingsLocation(value));

    if (weatherUtils.isValidZipCode(value)) {
      const req = Object.assign({}, settings);
      req.location.value = value;
      return settingsChange(req)(dispatch);
    }
  };
}

export function settingsChangeUnits(settings, value) {
  return function (dispatch) {
    dispatch(settingsUnits(value));
    const req = Object.assign({}, settings);
    req.units.value = value;
    return settingsChange(req)(dispatch);
  };
}

export function settingsChange(settings) {
  return function (dispatch) {
    return getWeather(settings)(dispatch);
  };
}

export function headerTitleUpdate() {
  return { type: CONSTANTS.HEADER_TITLE_UPDATE };
}

export function actionsDropdownToggle(isHidden) {
  return { type: CONSTANTS.ACTIONS_DROPDOWN_TOGGLE, hidden: isHidden };
}

export function modalToggle(modalType, isHidden) {
  return { type: CONSTANTS.MODAL_TOGGLE, modalType: modalType, hidden: isHidden };
}

export function getWeatherSuccess(data) {
  return { type: CONSTANTS.WEATHER_SUCCESS, data: data };
}

export function getWeatherFailure() {
  return { type: CONSTANTS.WEATHER_FAILURE, data: null };
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
