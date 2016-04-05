import { ACTIONS_DROPDOWN_TOGGLE } from '../constants';
import { LOCATION_CHANGE } from 'react-router-redux';
const header = {
  title: 'Awesome Weather Weekly',
  isActionsDropdownVisible: false,
  isBack: false,
  actionOptions: [
    {
      title: 'Settings'
    }
  ]
};

export default function (state = header, action) {
  switch (action.type) {
    case LOCATION_CHANGE: {
      let title = header.title;
      let isBack = header.isBack;

      if (location.pathname === '/details') {
        title = 'Awesome Weather Details';
        isBack = true;
      }

      return Object.assign({}, state, {
        title: title,
        isBack: isBack
      });
    }
    case ACTIONS_DROPDOWN_TOGGLE:
      return Object.assign({}, state, {
        isActionsDropdownVisible: !state.isActionsDropdownVisible
      });
    default:
      return state;
  }
}
