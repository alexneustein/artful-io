import React, { Component } from 'react';
import ArtistCard from './ArtistCard'
import { Dimmer, Loader, Grid, Container } from 'semantic-ui-react';
import { RAILS_URL } from "./RailsURL";


class TopArtists extends Component {

  state = {
    loading: true,
    topArtists: []
  }

  componentDidMount() {
    fetch(`${RAILS_URL}/artists-top/`)
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      topArtists: resData,
      loading: false
    })
  }

  render() {
    if(this.state.loading) {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader>Loading Top Artists</Loader>
          </Dimmer>
        </Container>
      )
    }
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
