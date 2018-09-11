import React, { Component } from 'react';
import { Container, Image, Header, Comment, Card, Icon } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'

class GalleryPost extends Component {
  state = {
    imageobj: {}
  }

  componentDidMount() {
    fetch('http://localhost:3001/images/3')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      imageobj: resData,
    })
  }

  dateFormatter = (datestring) => {
    const dateMonths = ["","January","February","March","April","May","June","July","August","September","November","December"]
    if (!!datestring) {
      let dateArray = datestring.split('-');
      const thestring = dateMonths[parseInt(dateArray[1])] + ", " + dateArray[0]
      return thestring
    }
  }

  render() {
    return (
      <Container>
        <Header as='h2'>Image Detail</Header>
        <Image src={this.state.imageobj.url} size='massive' rounded />
        <Header as='h3'>Title: {this.state.imageobj.title}</Header>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              {this.state.imageobj.likes} Likes
            </a>
          </Card.Content>
        <p><b>Date:</b> {this.dateFormatter(this.state.imageobj.image_date)}</p>
        <p><b>Details:</b> {this.state.imageobj.details}</p>
        <CommentContainer commentArray={this.state.imageobj.comments} />
      </Container>
    );
  }

}

export default GalleryPost;
