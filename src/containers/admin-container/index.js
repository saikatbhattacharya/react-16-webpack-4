import React, { Component } from 'react';
import Loadable from 'react-loadable';
import './index.css';

const LeftPanel = Loadable({
  loader: () => import('./LeftPanel'),
  loading: () => <div>Loading...</div>,
});

const RightPanel = Loadable({
    loader: () => import('./RightPanel'),
    loading: () => <div>Loading...</div>,
  });

const AdminComponent = () => (
  <div className="admin-container">
    <LeftPanel className="leftPane"/>
    <RightPanel className="rightPane"/>
  </div>
);

export default AdminComponent;