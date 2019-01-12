import React, { Component } from 'react';
import { Form } from 'formsy-semantic-ui-react'
import { Label, Container, Segment, Modal, Button, Header } from 'semantic-ui-react';
import { RAILS_URL } from "./RailsURL";


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
  state = {
    open: false
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })


  onValidSubmit = (formData) => {

    const body = {...formData, artist_id: this.props.artistId}

    fetch(`${RAILS_URL}/images/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
  }
  render() {

    const errorLabel = <Label color="red" pointing="left"/>;

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
                      <Form.Button content="Submit" color="green"
                      onClick={this.close}

                      />
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
