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

export default class NewPostForm extends Component {

  onValidSubmit = (formData) => {
    const newPost = JSON.stringify(formData)
    console.log(newPost)
    // this.setState({
    //   ...formData
    // }, () => console.log(formData))
    fetch('http://localhost:3001/images/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newPost
    })
  }
  render() {

    const errorLabel = <Label color="red" pointing="left"/>;

    console.log('State', this.state);
    return (
      <Segment floated='right'>
        <Modal trigger={<Button basic color='blue' >Create New Post</Button>}>
            <Modal.Header>Please fill up the form to upload an Image</Modal.Header>
            <Segment>
              <Modal.Description>
                <Form
                  ref={ ref => this.form = ref }
                  onValidSubmit={ this.onValidSubmit }
                  >
                    <Form.Group widths="equal">
                      <Form.Input
                        name="url"
                        label="URL"
                        placeholder="Enter a a URL"
                        required
                        errorLabel={ errorLabel }
                        validationErrors={{
                          isDefaultRequiredValue: 'Description is Required',
                        }}
                      />
                      <Form.Input
                        name="title"
                        label="Title"
                        placeholder="Enter a Title"
                        required
                        errorLabel={ errorLabel }
                        validationErrors={{
                          isDefaultRequiredValue: 'The Title is Required',
                        }}
                      />
                      <Form.TextArea
                        name="details"
                        label="Details"
                        placeholder="Enter a a Description"
                        required
                        errorLabel={ errorLabel }
                        validationErrors={{
                          isDefaultRequiredValue: 'Description is Required',
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
