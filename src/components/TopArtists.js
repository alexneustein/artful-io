import React, { Component } from 'react';
import ArtistCard from './ArtistCard'
import { Grid, Container } from 'semantic-ui-react';


class TopArtists extends Component {

  state = {
    topArtists: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/artists-top/')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      topArtists: resData,
    })
  }

  render() {
    return (
      <Container>
        <Grid relaxed columns={3}>
          { this.state.topArtists.map(artist => {
            return (<Grid.Column>
            <ArtistCard key={artist.id} artist={artist}/>
            </Grid.Column>)
          }) }
        </Grid>
      </Container>
    );
  }
};

export default TopArtists
