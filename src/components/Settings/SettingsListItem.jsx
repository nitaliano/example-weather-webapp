import React, { PropTypes } from 'react';
import SettingsItem from './SettingsItem';
import SettingsLabel from './SettingsLabel';
import { settingsChange } from '../../actions';

export default class SettingsListItem extends React.Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    active: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.target.value !== this.props.active) {
      this.props.dispatch(settingsChange(this.props.settings));
    }
  }

  get items() {
    return this.props.options.map((option, key) => {
      const optionLabel = option.charAt(0).toUpperCase() + option.substring(1);
      const isActive = this.props.active === option;

      return (
        <div key={key} className="settings-list-item">
          <input type="radio" name={this.props.label} value={option} checked={isActive} onClick={this.onClick}/>
          <label className="settings-list-item-label">
            {optionLabel}
          </label>
        </div>
      );
    });
  }

  render() {
    return (
      <SettingsItem>
        <SettingsLabel text={this.props.label} />
        <div className="settings-list-items">
          {this.items}
        </div>
      </SettingsItem>
    );
  }
}
