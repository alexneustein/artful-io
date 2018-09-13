import React, { Component } from 'react';
import { Form } from 'formsy-semantic-ui-react'
import { Label, Container, Segment } from 'semantic-ui-react';

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

export default class SignUpForm extends Component {
  onValidSubmit = (formData) => alert(JSON.stringify(formData)).console.log(formData)
  render() {

    const errorLabel = <Label color="red" pointing="left"/>;


    return (
      <Segment>
        <Container style={ styles.root }>
          <h1>Welcome to artful.io</h1>

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
                  validations={"minLength:8", "maxLength:16"}
                  errorLabel={ errorLabel }
                  validationErrors={{
                    isEmail: 'That is not a valid password',
                    isDefaultRequiredValue: 'Password is Required',
                  }}
                />
                <Form.Input
                  name="RepeatedPassword"
                  label="Re-Enter Password"
                  placeholder="Enter again your Password"
                  required
                  // eslint-disable-next-line
                  validations={"equalsField:password", "minLength:8", "maxLength:16"}
                  errorLabel={ <div style={ styles.customErrorLabel }/> }
                  validationErrors={{
                    isEmail: 'That is not a valid password',
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

              <h5> Artist Area of Experties: </h5>
              <p>Check all that apply</p>
              <Form.Group>
                <Form.Checkbox
                  name="Animation"
                  label="Animation"
                />
                <Form.Checkbox
                  name="DigitalArts"
                  label="Digital Arts"
                />
                <Form.Checkbox
                  name="Graphic Design"
                  label="Graphic Design"
                />
                <Form.Checkbox
                  name="HandCrafts"
                  label="Hand Crafts"
                />
                <Form.Checkbox
                  name="Ilustration"
                  label="Ilustration"
                />
                <Form.Checkbox
                  name="Film"
                  label="Film"
                />
                <Form.Checkbox
                  name="Painting"
                  label="Painting"
                />
                <Form.Checkbox
                  name="Photography"
                  label="Photography"
                />
                <Form.Checkbox
                  name="Sculpture"
                  label="Sculpture"
                />
                <Form.Checkbox
                  name="VisualArts"
                  label="Visual Arts"
                />
              </Form.Group>

              <Form.Group>
                <Form.Button content="Submit" color="green"/>
                <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
              </Form.Group>
            </Form>
          </Container>
      </Segment>
    );
  };
};
