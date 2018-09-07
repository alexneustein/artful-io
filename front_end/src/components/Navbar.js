import React, { Component } from 'react';
import { Button, Menu, Header, Icon, Input, Confirm } from 'semantic-ui-react'

class Navbar extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            <Header as='h1'>
              <Icon name='camera retro' size='huge' />
              <Header.Content>
                Artfol.io
                <Header.Subheader>Sharing the art within you...</Header.Subheader>
              </Header.Content>
            </Header>
          </Menu.Item>
          <Menu.Item position='right'>
            <Menu.Item >
              <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
              <Button basic color='blue' floated='right' >Sign up</Button>
            </Menu.Item>
            <Menu.Item>
              <Button basic color='green' floated='right' >Log-in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button basic color='red' floated='right' onClick={this.open} >Log-Out</Button>
              <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.close} />
            </Menu.Item>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
