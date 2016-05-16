import React from 'react';
import { connect } from 'react-redux';
import { settingsChangeUnits } from '../../actions';
import SettingsListItem from './SettingsListItem';

export class Units extends SettingsListItem {
  onClick(e) {
    this.props.dispatch(settingsChangeUnits(this.props.settings, e.target.value));
  }
}

export default connect(null, (dispatch) => ({ dispatch: dispatch }))(Units);
