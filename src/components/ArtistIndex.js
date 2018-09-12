import React, { Component } from 'react'
import PostCard from './PostCard'
import { Container, Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'


class ArtistIndex extends Component {
  state = {
    imageIndex: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/artists/')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      imageIndex: resData,
    })
  }


  render() {
    return (
      <Container>
        <h5>All Artists</h5>
        <Grid relaxed columns={5}>
          { this.state.imageIndex.map(image => {
            return (<Grid.Column>
            <PostCard key={image.id} image={image}/>
            </Grid.Column>)
          }) }
        </Grid>
      </Container>
    );
  }

}

export default ArtistIndex;
