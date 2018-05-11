import React, { Component } from 'react';
import './Sidebarsubcomponent.css'
import { Image, Icon, Menu } from 'semantic-ui-react'
import avatar from 'Images/elliot.jpg';

class Sidebarsubcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'Summary' }

  }
  
  handleItemClick(e, { name }){this.setState({ activeItem: name })}

  render() {
    const { activeItem } = this.state
    return (
      <div>
      <div className='sidebarHeading'>WELCOME</div>
      <Image src={avatar} size='medium' circular />
      <h3>Saikat Bhattacharya</h3>
      <Menu vertical>
        <Menu.Item icon name='Summary View' active={activeItem === 'Summary'} onClick={this.handleItemClick} ><Icon name='windows' size='large'/>Summary View</Menu.Item>
        <Menu.Item icon name='Customer Management' active={activeItem === 'Customer'} onClick={this.handleItemClick} ><Icon name='user circle outline' size='large'/>Customer Management</Menu.Item>
        <Menu.Item icon name='Inventory Management' active={activeItem === 'Inventory'} onClick={this.handleItemClick} ><Icon name='calculator' size='large'/>Inventory Management</Menu.Item>
        <Menu.Item icon name='Employee Management' active={activeItem === 'Employee'} onClick={this.handleItemClick} ><Icon name='users' size='large'/>Employee Management</Menu.Item>
        <Menu.Item icon name="Today's Menu" active={activeItem === 'menu'} onClick={this.handleItemClick} ><Icon name='list ul' size='large'/>Today's Menu</Menu.Item>
        <Menu.Item icon name='Offers' active={activeItem === 'Offers'} onClick={this.handleItemClick} ><Icon name='tag' size='large'/>Offers</Menu.Item>
        <Menu.Item icon name='Analytics' active={activeItem === 'Analytics'} onClick={this.handleItemClick} ><Icon name='signal' size='large'/>Analytics</Menu.Item>
      
      </Menu>
      
      <Icon name='power' size='big'/>

      </div>
    );
  }
}

export default Sidebarsubcomponent;
