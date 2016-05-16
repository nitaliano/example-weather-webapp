import React, { PropTypes } from 'react';
import path from 'path';
import { connect } from 'react-redux';
import { modalToggle } from '../../actions';
import './index.less';

class Modal extends React.Component {
  static defaultProps = {
    isHidden: true,
    modalType: ''
  };

  static propTypes = {
    isHidden: PropTypes.bool,
    modalType: PropTypes.string,
    components: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.dispatch(modalToggle());
  }

  get content() {
    if (!this.props.modalType.length) {
      return;
    }
    let Component = this.props.components[this.props.modalType];
    return <Component />;
  }

  render() {
    return (
      <div id="modal" className="modal" data-hidden={this.props.isHidden}>
        <div className="modal-close" onClick={this.onClose}>
          <i className="fa fa-times"></i>
        </div>
        <div className="modal-content">
          {this.content}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    components: state.modal.components
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
