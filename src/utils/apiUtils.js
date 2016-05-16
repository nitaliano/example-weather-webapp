import http from 'superagent';
import { OPEN_WEATHER_BASE_URL } from '../constants';

const apiUtils = {
  getWeather: function (location, units) {
    return new Promise((resolve, reject) => {
      http
        .get(OPEN_WEATHER_BASE_URL + 'daily')
        .query({
          zip: location,
          units: units,
          cnt: 7,
          appid: window.appConfig.openWeatherApiKey
        })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res.body);
        });
    });
  }
};

export default apiUtils;
