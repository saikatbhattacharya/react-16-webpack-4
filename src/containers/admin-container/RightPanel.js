import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RightPanel.css';
import Loadable from 'react-loadable';
import SummaryComponent from '../../components/summary';
import CustomerComponent from '../../components/customer';

const SummaryPanel = Loadable({
  loader: () => import('../../components/summary'),
  loading: () => <div>Loading...</div>,
});

const CustomerPanel = Loadable({
  loader: () => import('../../components/customer'),
  loading: () => <div>Loading...</div>,
});


class RightPanel extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedValue:'summary'
        }
      this.renderRighPanel = this.renderRighPanel.bind(this)
    }
  
    renderRighPanel(){
   if(this.state.selectedValue==='customer'){
     return(
   <SummaryPanel />
     )
   }
  else{
    return(
    <CustomerPanel />
    )
  }
  }
    
  
    render() {
      return (
        <div className="RightPanel">
          {this.renderRighPanel()}
         
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