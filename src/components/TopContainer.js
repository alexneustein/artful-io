import React, { Component } from 'react';
import TopArtists from './TopArtists'
import TopPosts from './TopPosts'
import { Grid } from 'semantic-ui-react';


class TopContainer extends Component {

  render() {
    return (
      <Grid relaxed columns={2}>
        <Grid.Column>
          <TopArtists />
        </Grid.Column>
        <Grid.Column>
          <TopPosts />
        </Grid.Column>
      </Grid>
    );
  }

}

export default TopContainer;
