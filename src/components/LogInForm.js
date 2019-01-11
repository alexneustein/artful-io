import React, { Component } from 'react';
import { Form } from 'formsy-semantic-ui-react'
import { Label, Container, Segment, Modal, Button, Header } from 'semantic-ui-react';

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

export default class LogInForm extends Component {
  onValidSubmit = (formData) => console.log(JSON.stringify(formData))

  render() {

    const errorLabel = <Label color="red" pointing="left"/>;


    return (
      <Segment>
        <Modal trigger={<Button>Login</Button>}>
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
                        name="password"
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
      </Segment>
    );
  }
}
