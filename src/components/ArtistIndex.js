import React, { Component } from 'react'
import ArtistCard from './ArtistCard'
import { Dimmer, Loader, Image, Segment, Container, Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'


class ArtistIndex extends Component {
  state = {
    loading: true,
    artistIndex: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/artists/')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      artistIndex: resData,
      loading: false
    })
  }


  render() {
    if(this.state.loading) {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader>Loading Artists</Loader>
          </Dimmer>
        </Container>
      )
    }

    return (
      <Container>
        <h5>All Artists</h5>
        <Grid relaxed columns={5}>
          { this.state.artistIndex.map(artist => {
            return (<Grid.Column>
            <ArtistCard key={artist.id} artist={artist}/>
            </Grid.Column>)
          }) }
        </Grid>
      </Container>
    );
  }

}

export default ArtistIndex;
