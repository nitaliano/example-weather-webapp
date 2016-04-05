import { OPEN_WEATHER_BASE_IMG_URL } from '../constants';

const DAY_ENUM = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wedensday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};

const TODAY_ENUM = {
  0: 'Today',
  1: 'Tomorrow'
};

const weatherUtils = {
  getFormattedWeather: function (item, indexInList) {
    let date = new Date(item.dt * 1000);
    let dayName = TODAY_ENUM[indexInList] || DAY_ENUM[date.getDay()];

    return {
      index: indexInList,
      actualDayName: DAY_ENUM[date.getDay()],
      dayName: dayName,
      dayTemp: Math.round(item.temp.day),
      minTemp: Math.round(item.temp.min),
      maxTemp: Math.round(item.temp.max),
      pressure: Math.round(item.pressure) + '%',
      humidity: Math.round(item.humidity) + '%',
      weatherDesc: item.weather[0].main,
      iconClass: `wi wi-owm-${item.weather[0].id}`
    };
  },

  getWeatherByTime: function (weatherList, dt) {
    let selected;

    if (!weatherList) {
      return selected;
    }

    for (let i = 0; i < weatherList.length; i++) {
      let weather = weatherList[i];

      if (weather && dt === weather.dt) {
        selected = {
          item: weather,
          formatted: weatherUtils.getFormattedWeather(weather, i)
        };
        break;
      }
    }

    return selected;
  }
};

export default weatherUtils;
