import React, { Component } from 'react';
import ArtistCard from './ArtistCard'
import { Grid } from 'semantic-ui-react';


class TopArtists extends Component {
  render() {
    return (
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
    );
  }
};

export default TopArtists
