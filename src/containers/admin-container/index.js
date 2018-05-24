import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import { sampleAction } from 'Actions/sampleActions';
import './index.css';

const LeftPanel = Loadable({
  loader: () => import('./LeftPanel'),
  loading: () => <div>Loading...</div>,
});

const RightPanel = Loadable({
    loader: () => import('./RightPanel'),
    loading: () => <div>Loading...</div>,
  });

const AdminComponent = (props) => (
  <div className="admin-container">
    <LeftPanel className="leftPane" addIndex={props.addIndex}/>
    <RightPanel className="rightPane" sampleIndex={props.sampleIndex} />
  </div>
);

const mapStateToProps = (state) => ({
    sampleIndex: state.adminReducer.sampleIndex
});

const mapDispatchToProps = dispatch => ({
  addIndex: (number) => {
    dispatch(sampleAction(number))
  }
})

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminComponent);

export default AdminContainer;
