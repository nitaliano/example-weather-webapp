import React, { PropTypes } from 'react';
import weatherUtils from '../../utils/weatherUtils';
import { Link } from 'react-router';
import './index.less';

class WeatherTimelineItem extends React.Component {
  static propTypes = {
    dt: PropTypes.number,
    name: PropTypes.string,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    iconClass: PropTypes.string,
    isActive: PropTypes.bool
  };

  render() {
    let linkProps = {
      pathname: 'details',
      query: {
        dt: this.props.dt
      }
    };

    return (
      <li className="weather-timeline-item" data-active={this.props.isActive}>
        <Link className="weather-timeline-link" to={linkProps}>
          <p className="weather-timeline-item-day">{this.props.name}</p>
          <i className={`${this.props.iconClass} weather-timeline-item-icon`}></i>
          <p className="weather-timeline-item-temp">
            <span className="degrees">{this.props.maxTemp}</span>
            <span className="temp-divider">/</span>
            <span className="degrees">{this.props.minTemp}</span>
          </p>
        </Link>
      </li>
    );
  }
}

export default class WeatherTimeline extends React.Component {
  static propTypes = {
    selectedIndex: PropTypes.number,
    weatherList: PropTypes.array
  };

  get list() {
    const items = [];

    this.props.weatherList.forEach((weatherItem, key) => {
      const formattedItem = weatherUtils.getFormattedWeather(weatherItem, key);

      items.push(
        <WeatherTimelineItem
          key={key}
          isActive={key === this.props.selectedIndex}
          name={formattedItem.actualDayName.substring(0, 3)}
          dt={weatherItem.dt}
          minTemp={formattedItem.minTemp}
          maxTemp={formattedItem.maxTemp}
          iconClass={formattedItem.iconClass} />
      );
    });

    return items;
  }

  render() {
    return (
      <div className="weather-timeline-cnt">
        <ul className="weather-timeline">
          {this.list}
        </ul>
      </div>
    );
  }
}
