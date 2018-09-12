import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'artful-io',
    dirName: 'photos',
    region: 'sa-east-1',
    accessKeyId: "AKIAJWKRQKJXRGOEGXQA",
    secretAccessKey: "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",
}


class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  upload = (e) => {
    // debugger
    // console.log(e.target.children[1].children[1].value)
    e.preventDefault();
    ReactS3.upload(e.target.children[1].children[1].value , config)
    .then(data => {
      console.log(data)
    }).catch(error => {
      alert(error)
    });
  }

  handleChooseFile = (e) => {
    this.setState({file: e.target.files});
  }

  render () {
    console.log(this.state);
    return (
      // <div>Hello</div>
      <Form onSubmit={this.upload}>
        <h1>I am the image uploader</h1>
        <Input label='upload file' type='file' onChange={this.handleChooseFile} />
        <Form.Button color='blue' content='Upload your picture' type='submit' />
      </Form>
    );
  }
}

export default FileUpload;
