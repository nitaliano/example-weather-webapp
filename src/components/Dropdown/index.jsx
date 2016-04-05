import React, { PropTypes } from 'react';
import './index.less';

class DropdownItem extends React.Component {
  static propTypes = {
     title: PropTypes.string.isRequired,
     onClick: PropTypes.func
  };

  render() {
    return (
      <li className="dropdown-item" onClick={this.props.onClick}>
        <span className="dropdown-item-title">{this.props.title}</span>
      </li>
    )
  }
}

export default class Dropdown extends React.Component {
  static defaultProps = {
    openFrom: 'open-from-left',
    isHidden: true
  };

  static propTypes = {
    className: PropTypes.string,
    openFrom: PropTypes.string,
    isHidden: PropTypes.bool,
    options: PropTypes.array.isRequired,
    onDropdownItemClick: PropTypes.func.isRequired
  };

  get list() {
    let list = [];

    this.props.options.forEach((option, key) => {
      list.push(
        <DropdownItem key={key} title={option.title} onClick={this.onDropdownItemClick} />
      );
    });

    return list;
  }

  render() {
    let className = `dropdown-list ${this.props.openFrom} ${this.props.className}`;

    return (
      <ul className={className} data-hidden={this.props.isHidden}>
        {this.list}
      </ul>
    );
  }
}
