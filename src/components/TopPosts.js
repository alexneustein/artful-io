import React, { Component } from 'react';
import PostCard from './PostCard'
import { Dimmer, Loader, Grid, Container } from 'semantic-ui-react';


class TopPosts extends Component {
  state = {
    loading: true,
    topImages: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/images-top/')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      topImages: resData,
      loading: false

    })
  }


  render() {
    if(this.state.loading) {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader>Loading Top Images</Loader>
          </Dimmer>
        </Container>
      )
    }
    return (
      <Container>
        <Grid relaxed columns={3}>
          { this.state.topImages.map(image => {
            return (<Grid.Column>
            <PostCard key={image.id} image={image} artist={image.artist}/>
            </Grid.Column>)
          }) }
        </Grid>
      </Container>
    );
  }
};

export default TopPosts
