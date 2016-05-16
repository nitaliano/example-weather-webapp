import React, { PropTypes } from 'react';

export default class SettingsLabel extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const text = this.props.text.toLowerCase();
    const title = text.charAt(0).toUpperCase() + text.substring(1);

    return (
      <h2 className="settings-label">
        {title}
      </h2>
    );
  }
}
