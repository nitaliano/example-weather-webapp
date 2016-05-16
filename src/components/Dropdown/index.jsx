import React, { PropTypes } from 'react';
import domUtils from '../../utils/domUtils';
import './index.less';

class DropdownItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  onClick(e) {
    this.props.onClick(domUtils.getData(e.currentTarget, 'itemId'));
  }

  render() {
    return (
      <li className="dropdown-item" data-item-id={this.props.id} onClick={this.onClick.bind(this)}>
        <span className="dropdown-item-title">{this.props.title}</span>
      </li>
    );
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
    const list = [];

    this.props.options.forEach((option, key) => {
      list.push(
        <DropdownItem
          key={key}
          id={option.id}
          title={option.title}
          onClick={this.props.onDropdownItemClick} />
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
