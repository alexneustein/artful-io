import React, { Component } from 'react';
import ArtistCard from './ArtistCard'
import { Grid, Container } from 'semantic-ui-react';


class TopArtists extends Component {
  render() {
    return (
      <Container>
        <Grid relaxed columns={3}>
          <Grid.Column>
            <ArtistCard />
          </Grid.Column>
          <Grid.Column>
            <ArtistCard />
          </Grid.Column>
          <Grid.Column>
            <ArtistCard />
          </Grid.Column>
          <Grid.Column>
            <ArtistCard />
          </Grid.Column>
          <Grid.Column>
            <ArtistCard />
          </Grid.Column>
          <Grid.Column>
            <ArtistCard />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
};

export default TopArtists
