import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Dropdown from '../Dropdown';
import { actionsDropdownToggle } from '../../actions';
import './index.less';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    actionOptions: PropTypes.array,
    isBack: PropTypes.bool,
    isActionsDropdownVisible: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.onActionsToggle = this.onActionsToggle.bind(this);
    this.onActionsItemClick = this.onActionsItemClick.bind(this);
  }

  onActionsToggle() {
    this.props.dispatch(actionsDropdownToggle());
  }

  onActionsItemClick() {
    // TODO: Do something with actions here
  }

  get title() {
    let arrow;
    if (this.props.isBack) {
      arrow = (
        <Link className="arrow-link" to="/">
          <i className="fa fa-arrow-left"></i>
        </Link>
      );
    }

    return (
      <h3 className="title pull-left">
        {arrow}
        <span className="title-name">{this.props.title}</span>
      </h3>
    );
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          {this.title}

          <div className="actions pull-right">
            <i className="fa fa-ellipsis-v actions-icon" onClick={this.onActionsToggle}></i>
            <Dropdown
              className="actions-dropdown-list"
              isHidden={!this.props.isActionsDropdownVisible}
              options={this.props.actionOptions}
              openFrom={"open-from-right"}
              onDropdownItemClick={this.onActionsItemClick} />
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.header.title,
    actionOptions: state.header.actionOptions,
    isBack: state.header.isBack,
    isActionsDropdownVisible: state.header.isActionsDropdownVisible
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
