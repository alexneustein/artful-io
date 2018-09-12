import React, { Component } from 'react';
import { Container, Image, Header, Card, Icon } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'

class GalleryPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageId: this.props.match.params.id,
      liked: false,
      imageobj: {}
    }
  }

  componentDidMount() {
    const fetchPath = `http://localhost:3001/images/${this.state.imageId}`
    fetch(fetchPath)
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
      const thestring = dateMonths[parseInt(dateArray[1])] + ", " + dateArray[0];
      return thestring
    }
  }

  handleLike = () => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        imageobj: {...this.state.imageobj, likes: this.state.imageobj.likes + 1}
      })
      fetch(`http://localhost:3001/images/${this.state.imageobj.id}/addlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })

    } else {
      this.setState({
        liked: false,
        imageobj: {...this.state.imageobj, likes: this.state.imageobj.likes - 1}
      })
      fetch(`http://localhost:3001/images/${this.state.imageobj.id}/unlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })

    }
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Header as='h2'>Image Detail</Header>
        <Image src={this.state.imageobj.url} size='large' rounded />
        <Header as='h3'>Title: {this.state.imageobj.title}</Header>
          <Card.Content extra>
            <a onClick={this.handleLike}>
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
