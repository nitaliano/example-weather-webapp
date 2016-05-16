import React from 'react';

export default class SettingsItem extends React.Component {
  render() {
    return (
      <div className="settings-item">
        {this.props.children}
      </div>
    );
  }
}
