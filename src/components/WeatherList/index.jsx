import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import weatherUtils from '../../utils/weatherUtils';
import './index.less';

class WeatherListItem extends React.Component {
  static propTypes = {
    dt: PropTypes.number,
    name: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    icon: PropTypes.string
  };

  render() {
    let linkProps = {
      pathname: 'details',
      query: {
        dt: this.props.dt
      }
    };

    return (
      <li className="weather-list-item">
        <Link className="weather-list-item-link" to={linkProps}>
          <span className="weather-list-item-name">{this.props.name}</span>
          <span className="weather-list-item-min-max">
            <i className={`${this.props.icon} weather-icon`}></i>
            <span className="degrees">{this.props.max}</span> <span className="degrees">{this.props.min}</span>
          </span>
        </Link>
      </li>
    );
  }
}

class WeatherList extends React.Component {
  static defaultProps = {
    weatherList: []
  };

  static propTypes = {
    weatherList: PropTypes.array
  };

  get list() {
    const items = [];

    this.props.weatherList.forEach((weatherItem, key) => {
      const formattedWeather = weatherUtils.getFormattedWeather(weatherItem, key);
      items.push(
        <WeatherListItem
          key={key}
          dt={weatherItem.dt}
          name={formattedWeather.dayName}
          min={formattedWeather.minTemp}
          max={formattedWeather.maxTemp}
          icon={formattedWeather.iconClass}/>
      );
    });

    return items;
  }

  render() {
    let isHidden = this.props.weatherList.length === 0;

    return (
      <div className="weather-list-cnt" data-hidden={isHidden}>
        <ul className="weather-list">
          {this.list}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherList: state.weather.weatherList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
