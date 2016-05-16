import React, { PropTypes } from 'react';
import SettingsItem from './SettingsItem';
import SettingsLabel from './SettingsLabel';

export default class SettingsTextItem extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    if (typeof this.onChange === 'undefined') {
      throw new TypeError('You must implement onChange');
    }

    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <SettingsItem>
        <SettingsLabel text={this.props.label} />

        <div className="settings-text-item">
          <input className="settings-text-item-input" value={this.props.value} onChange={this.onChange} />
        </div>
      </SettingsItem>
    );
  }
}
