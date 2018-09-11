import React, { Component } from 'react';
import { Container, Header, Comment } from 'semantic-ui-react'
import PostComment from './PostComment'



class CommentContainer extends Component {

  render() {
    return (
      <Container >
        <Header as='h3'> Post Comments:</Header>
        <Comment.Group size='medium'>
          { this.props.commentArray.map(comment => {
            return <PostComment comment={comment} />
          }) }
        </Comment.Group>
      </Container>
    );
  }

}


export default CommentContainer;

CommentContainer.defaultProps = {
  commentArray: ['There are no comments.']
};
