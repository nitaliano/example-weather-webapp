import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import weatherUtils from '../../utils/weatherUtils';
import WeatherTimeline from '../WeatherTimeline';
import './index.less';

class WeatherDetails extends React.Component {
  static propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    weatherList: PropTypes.array
  };

  render() {
    let dt = this.props.location.query.dt|0;
    let selected = weatherUtils.getWeatherByTime(this.props.weatherList, dt);

    if (!selected) {
      return (<div className="weather-details-cnt"></div>);
    }

    return (
      <div className="weather-details-cnt">
        <div className="weather-details-bg">
          <div className="weather-details-headers-cnt">
            <h3 className="weather-details-title">{this.props.city}, {this.props.country}</h3>
            <h4 className="weather-details-day">{selected.formatted.dayName}</h4>
            <h4 className="weather-details-weather-desc">{selected.formatted.weatherDesc}</h4>
          </div>

          <div className="weather-details-meta-cnt">
            <i className={`${selected.formatted.iconClass} weather-icon pull-left`}></i>

            <div className="weather-details-temp pull-left">
              <div className="weather-details-minmax">
                <span className="degrees">{selected.formatted.maxTemp}</span>
                <span className="temp-divider">/</span>
                <span className="degrees">{selected.formatted.minTemp}</span>
              </div>
            </div>

            <div className="weather-details-meta">
              <div className="weather-details-pressure">Pressure: {selected.formatted.pressure}</div>
              <div className="weather-details-humidity">Humidity: {selected.formatted.humidity}</div>
            </div>
          </div>
        </div>

        <div className="weather-details-timeline">
          <WeatherTimeline selectedIndex={selected.formatted.index} weatherList={this.props.weatherList} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.weather.city,
    country: state.weather.country,
    weatherList: state.weather.weatherList
  };
}

export default connect(mapStateToProps)(WeatherDetails);
