import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { connect } from 'react-redux';
import { getWeather } from '../../actions';
import Header from '../Header';
import Modal from '../Modal';
import './index.less';

export class App extends React.Component {
  static propTypes = {
    settings: PropTypes.object,
    modal: PropTypes.object
  };

  componentWillMount() {
    this.props.dispatch(getWeather(this.props.settings));
  }

  render() {
    const childProps = this.props.children.props;

    let transitionFlow = 'left';
    if (childProps.location.pathname !== '/') {
      transitionFlow = 'right';
    }

    let key = childProps.location.pathname;
    if(key[0] === '/') {
      key = key.substring(1);
    }

    return (
      <div className="app-cnt">
        <Header />

        <ReactCSSTransitionGroup transitionName="main" transitionAppear={true} transitionAppear={0} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
          <main key={key} data-leave={transitionFlow} className="main">
            {this.props.children}
          </main>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="modal" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
          <Modal key={this.props.modal.isHidden} isHidden={this.props.modal.isHidden} modalType={this.props.modal.modalType} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const AppContainer = connect(
  (state) => ({ settings: state.settings, modal: state.modal }),
  (dispatch) => ({ dispatch: dispatch })
)(App);

export default function ({ children }) {
  return <AppContainer children={children} />;
}
