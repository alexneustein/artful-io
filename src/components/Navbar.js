import React, { Component } from 'react';
import { Button, Menu, Header, Icon, Input, Confirm, Label, Container, Segment, Modal } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'

class Navbar extends Component {
  state = {
    open: false,
    id: "",
    name_first: "",
    name_last: "",
    username: "",
    password: "",
    about: "",
    photo: null,
    animation: null,
    digital_arts: null,
    graphic_design: null,
    hand_crafts: null,
    illustration: null,
    film: null,
    painting: null,
    photography: null,
    sculpture: null,
    visual_arts: null
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  onValidSubmit = (formData) => {
    const newArtist = JSON.stringify(formData)
    this.setState({
      ...formData
    }, () => console.log(formData))
    fetch('http://localhost:3001/artists/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newArtist
    })
  }


  render() {
    console.log("State", this.state);
    const errorLabel = <Label color="red" pointing="left"/>;
    const styles = {
      root: {
        marginTop: 18,
        // padding: '0 24px 24px 24px',
      },
      customErrorLabel: {
        color: '#f00',
        textAlign: 'center',
      }
    }

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
              <Modal trigger={<Button basic color='blue'>Sign Up</Button>}>
                  <Modal.Header>Please enter all the required fields</Modal.Header>
                  <Segment>
                    <Modal.Description>
                      <Segment>
                        <Container style={ styles.root }>
                          <h1>This is the Sign-up Form</h1>
                          <Form
                            ref={ ref => this.form = ref }
                            onValidSubmit={ this.onValidSubmit }
                            >
                              <Form.Group widths="equal">
                                <Form.Input
                                  required
                                  name="firstName"
                                  label="First name"
                                  placeholder="First name"
                                  validations="isWords"
                                  errorLabel={ errorLabel }
                                  validationErrors={{
                                    isWords: 'No numbers or special characters allowed',
                                    isDefaultRequiredValue: 'First Name is Required',
                                  }}
                                />
                                <Form.Input
                                  name="lastName"
                                  label="Last name"
                                  placeholder="Last name"
                                  required
                                  validations="isWords"
                                  errorLabel={ errorLabel }
                                  validationErrors={{
                                    isWords: 'No numbers or special characters allowed',
                                    isDefaultRequiredValue: 'Last Name is Required',
                                  }}
                                />
                                <Form.Input
                                  name="email"
                                  placeholder="username@domain.com"
                                  label="Email"
                                  icon="mail"
                                  instantValidation
                                  required
                                  validations="isEmail"
                                  validationErrors={{
                                    isEmail: 'This is not a valid email',
                                    isDefaultRequiredValue: 'Email is Required',
                                  }}
                                  errorLabel={ errorLabel }
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Input
                                  name="username"
                                  label="Username"
                                  placeholder="Username"
                                  required
                                  // eslint-disable-next-line
                                  validations={"isWords", "minLength:6", "maxLength:16"}
                                  errorLabel={ errorLabel }
                                  validationErrors={{
                                    isWords: 'No numbers or special characters allowed',
                                    isDefaultRequiredValue: 'Username is Required'
                                  }}
                                />
                                <Form.Input
                                  name="Password"
                                  label="Password"
                                  placeholder="Enter Password"
                                  required
                                  hided
                                  // eslint-disable-next-line
                                  validations={{minLength: 8}}
                                  errorLabel={ errorLabel }
                                  validationErrors={{
                                    minLength: 'The password must be at least 8 characters long',
                                    isDefaultRequiredValue: 'Password is Required',
                                  }}
                                />
                                <Form.Input
                                  name="RepeatedPassword"
                                  label="Re-Enter Password"
                                  placeholder="Enter again your Password"
                                  required
                                  // eslint-disable-next-line
                                  validations={{equalsField: "Password"}}
                                  errorLabel={ <div style={ styles.customErrorLabel }/> }
                                  validationErrors={{
                                    equalsField: 'Passwords are not the same',
                                    isDefaultRequiredValue: 'Password is Required',
                                  }}
                                />
                              </Form.Group>

                              <Form.TextArea
                                name="Biography"
                                label="Biography"
                                placeholder="Tell us your story..."
                                required
                                errorLabel={ errorLabel }
                                validationErrors={{
                                  isDefaultRequiredValue: 'We need to know more about you',
                                }}
                              />
                              <Segment>
                                <h5> Artist Area of Experties: </h5>
                                <p>Check all that apply</p>
                                <Form.Group >
                                  <Form.Checkbox
                                    name="animation"
                                    label="Animation"
                                  />
                                  <Form.Checkbox
                                    name="digitalarts"
                                    label="Digital Arts"
                                  />
                                  <Form.Checkbox
                                    name="graphicdesign"
                                    label="Graphic Design"
                                  />
                                  <Form.Checkbox
                                    name="handcrafts"
                                    label="Hand Crafts"
                                  />
                                  <Form.Checkbox
                                    name="ilustration"
                                    label="Ilustration"
                                  />
                                </Form.Group>
                                <Form.Group>
                                  <Form.Checkbox
                                    name="film"
                                    label="Film"
                                  />
                                  <Form.Checkbox
                                    name="Painting"
                                    label="Painting"
                                  />
                                  <Form.Checkbox
                                    name="photography"
                                    label="Photography"
                                  />
                                  <Form.Checkbox
                                    name="sculpture"
                                    label="Sculpture"
                                  />
                                  <Form.Checkbox
                                    name="visualArts"
                                    label="Visual Arts"
                                  />
                                </Form.Group>
                              </Segment>
                              <Form.Group>
                                <Form.Button content="Submit" color="green"/>
                                <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
                              </Form.Group>
                            </Form>
                          </Container>
                      </Segment>
                    </Modal.Description>
                  </Segment>
                </Modal>
            </Menu.Item>
            <Menu.Item>
              <Modal trigger={<Button basic color='green'>Login</Button>}>
                  <Modal.Header>Please enter your login and password</Modal.Header>
                  <Segment>
                    <Modal.Description>
                      <Form
                        ref={ ref => this.form = ref }
                        onValidSubmit={ this.onValidSubmit }
                        >
                          <Form.Group widths="equal">
                            <Form.Input
                              name="username"
                              label="Username"
                              placeholder="Username"
                              required
                              // eslint-disable-next-line
                              validations={"isWords", "minLength:6", "maxLength:16"}
                              errorLabel={ errorLabel }
                              validationErrors={{
                                isWords: 'No numbers or special characters allowed',
                                isDefaultRequiredValue: 'Username is Required',
                              }}
                            />
                            <Form.Input
                              name="Password"
                              label="Password"
                              placeholder="Enter Password"
                              required
                              hided
                              // eslint-disable-next-line
                              validations={"minLength:8", "maxLength:16"}
                              errorLabel={ errorLabel }
                              validationErrors={{
                                isEmail: 'That is not a valid password',
                                isDefaultRequiredValue: 'Password is Required',
                              }}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Button content="Submit" color="green"/>
                            <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
                          </Form.Group>
                        </Form>
                      </Modal.Description>
                  </Segment>
                </Modal>
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
