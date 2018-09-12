import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import axios from 'axios';

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      // <div>Hello</div>
      <Form onSubmit={this.submitFile}>
        <h1>I am the image uploader</h1>
        <Input label='upload file' type='file' onChange={this.handleFileUpload} />
        <Form.Button color='blue' content='Upload your picture' type='submit' />
      </Form>
    );
  }
}

export default FileUpload;
