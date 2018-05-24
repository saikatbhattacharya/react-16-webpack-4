import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RightPanel extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        }
  
    }
  
    
  
    render() {
      return (
        <div className="RightPanel">
          <b>Right Panel</b>
          <p>{this.props.sampleIndex}</p>
        </div>
      );
    }
  }

  RightPanel.defaultProps = {
    sampleIndex: 1,
  };
  
  RightPanel.propTypes = {
    sampleIndex: PropTypes.number
  };
  
  export default RightPanel;