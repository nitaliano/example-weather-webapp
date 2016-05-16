import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Units from './Units';
import Location from './Location';
import './index.less';

export class Settings extends React.Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  };

  isList(setting) {
    return !!setting.options;
  }

  get items() {
    const items = [];

    const units = this.props.settings.units;
    items.push(<Units settings={this.props.settings} label={units.title} active={units.value} options={units.options} />);

    const loc = this.props.settings.location;
    items.push(<Location settings={this.props.settings} label={loc.title} value={loc.value} />);

    return items;
  }

  render() {
    return (
      <div className="settings">
        {this.items}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}



export default connect(mapStateToProps)(Settings);
