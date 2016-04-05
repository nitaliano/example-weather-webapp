import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { connect } from 'react-redux';
import { getWeather } from '../../actions';
import Header from '../Header';
import './index.less';

class App extends React.Component {
  static propTypes = {
    settings: PropTypes.object
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
        <ReactCSSTransitionGroup transitionName="main">
          <main key={key} data-leave={transitionFlow} className="main">
            {this.props.children}
          </main>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const AppContainer = connect(
  (state) => ({ settings: state.settings }),
  (dispatch) => ({ dispatch: dispatch })
)(App);

export default function ({ children }) {
  return <AppContainer children={children} />;
}
