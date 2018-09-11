import React, { Component } from 'react';
import { Container, Image, Header, Comment } from 'semantic-ui-react'
import PostComment from './PostComment'

class GalleryPost extends Component {

  render() {
    return (
      <Container>
        <Header as='h2'> Post Title </Header>
        <Image src='https://picsum.photos/200/300/?random' size='massive' rounded />
        <Container >
          <Header as='h3'> Post Comments:</Header>
          <Comment.Group size='large'>
            <PostComment />
            <PostComment />
          </Comment.Group>
        </Container>
      </Container>
    );
  }

}

export default GalleryPost;
