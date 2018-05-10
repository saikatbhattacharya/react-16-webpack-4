import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Sidebar from 'react-sidebar';
import Sidebarsubcomponent from './sidebar/Sidebarsubcomponent';

const sidebarstyle = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    width: '260px'
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      }

  }

  

  render() {
    var sidebarContent = <Sidebarsubcomponent />;
    return (
      <div className="App">
        <Sidebar styles={sidebarstyle}
        sidebar={sidebarContent}
               open={true}
               
               docked={true}
               >
        <b>Main content</b>
      </Sidebar>
      </div>
    );
  }
}

export default App;
