import http from 'superagent/lib/client';
import { OPEN_WEATHER_BASE_URL } from '../constants';

const apiUtils = {
  getWeather: function (location, units) {
    return new Promise((resolve, reject) => {
      http
        .get(OPEN_WEATHER_BASE_URL + 'daily')
        .query({ q: location })
        .query({ units: units })
        .query({ cnt: 7 })
        .query({ appid: window.appConfig.openWeatherApiKey })
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
