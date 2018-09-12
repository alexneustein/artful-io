import React, { Component } from 'react';
import { Comment, Card, Icon } from 'semantic-ui-react'


class PostComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      likes: this.props.comment.likes
    }
  }

  handleLike = () => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        likes: this.props.comment.likes += 1
      })
      fetch(`http://localhost:3001/comments/${this.props.comment.id}/addlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })
    } else {
      this.setState({
        liked: false,
        likes: this.props.comment.likes -= 1
      })
      fetch(`http://localhost:3001/comments/${this.props.comment.id}/unlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })
    }

  }

  makeNiceDate = (uglydate) => {
    let createdAtDate = new Date(uglydate)
    let betterdate = createdAtDate.toDateString()
    let bettertime = createdAtDate.toLocaleTimeString()
    return (betterdate + ", " + bettertime)
  }

  render() {
    if (typeof this.props.comment === 'string') {
      return 'There are no comments.'
    } else {
      return (
          <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
            <Comment.Content>
              <Comment.Author as='a'>{this.props.comment.author}</Comment.Author>
              <Comment.Metadata>
                <span>{this.makeNiceDate(this.props.comment.created_at)}</span>
              </Comment.Metadata>
              <Comment.Text>{this.props.comment.comment}</Comment.Text>
              <Card.Content extra>
                <a onClick={this.handleLike}>
                  <Icon name='like' />
                  {this.props.comment.likes} Likes
                </a>
              </Card.Content>
            </Comment.Content>
          </Comment>
      );
    }
  }

}

export default PostComment;
