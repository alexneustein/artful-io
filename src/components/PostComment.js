import React, { Component } from 'react';
import { Comment, Card, Icon } from 'semantic-ui-react'


class PostComment extends Component {

  render() {
    return (
        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <span>Today at 5:42PM</span>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Card.Content extra>
              <a>
                <Icon name='like' />
                22 Likes
              </a>
            </Card.Content>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    );
  }

}

export default PostComment;
