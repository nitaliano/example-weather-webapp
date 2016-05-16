import React from 'react';
import { connect } from 'react-redux';
import { settingsChangeLocation } from '../../actions';
import SettingsTextItem from './SettingsTextItem';

export class Location extends SettingsTextItem {
  onChange(e) {
    this.props.dispatch(settingsChangeLocation(this.props.settings, e.target.value));
  }
}

export default connect(null, (dispatch) => ({ dispatch: dispatch }))(Location);
