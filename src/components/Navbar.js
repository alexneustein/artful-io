import React, { Component } from 'react';
import { Button, Menu, Header, Icon } from 'semantic-ui-react'

class Navbar extends Component {

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            <Icon name='camera retro' size='huge'/>
            <Header as='h1'> Artfol.io </Header>
            <Header as='h5'> Sharing the art whithin you... </Header>
          </Menu.Item>
          <Menu.Item>
            <Button primary >Sign up</Button>
          </Menu.Item>

          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }

}

export default Navbar;
