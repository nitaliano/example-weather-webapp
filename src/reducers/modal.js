import { MODAL_TOGGLE } from '../constants';
import Settings from '../components/Settings';

const modal = {
  isHidden: true,
  modalType: '',
  components: {
    Settings: Settings
  }
};

export default function (state = modal, action) {
  switch (action.type) {
    case MODAL_TOGGLE:
      return Object.assign({}, state, {
        isHidden: !state.isHidden,
        modalType: action.modalType
      });
    default:
      return state;
  }
}
