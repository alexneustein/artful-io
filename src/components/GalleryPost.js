import React, { Component } from 'react';
import { Divider, Container, Image, Header, Card, Icon } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'
import dateFormatter from "./helpers";
import { RAILS_URL } from "./RailsURL";


class GalleryPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageId: this.props.match.params.id,
      liked: false,
      imageobj: {},
      artistobj: {}
    }
  }

  componentDidMount() {
    const fetchPath = `${RAILS_URL}/images/${this.state.imageId}`
    fetch(fetchPath)
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      imageobj: resData,
      artistobj: resData.artist
    })
  }

  handleLike = () => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        imageobj: {...this.state.imageobj, likes: this.state.imageobj.likes + 1}
      })
      fetch(`${RAILS_URL}/images/${this.state.imageobj.id}/addlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })

    } else {
      this.setState({
        liked: false,
        imageobj: {...this.state.imageobj, likes: this.state.imageobj.likes - 1}
      })
      fetch(`${RAILS_URL}/images/${this.state.imageobj.id}/unlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })

    }
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Divider hidden />
        <Header as='h2'>Image Detail</Header>
        <Image src={this.state.imageobj.url} size='large' rounded />
        <Header as='h3'>Title: {this.state.imageobj.title}</Header>
          <Header as='h4'>By {this.state.artistobj.name_first} {this.state.artistobj.name_last}</Header>

          <Card.Content extra>
            <a onClick={this.handleLike}>
              <Icon name='like' />
              {this.state.imageobj.likes} Likes
            </a>
          </Card.Content>
        <p><b>Date:</b> {dateFormatter(this.state.imageobj.image_date)}</p>
        <p><b>Details:</b> {this.state.imageobj.details}</p>
        <CommentContainer commentArray={this.state.imageobj.comments} />
      </Container>
    );
  }

}

export default GalleryPost;
