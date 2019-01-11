import React, { Component } from 'react';
import TopArtists from './TopArtists'
import TopPosts from './TopPosts'
import { Divider, Grid, Container } from 'semantic-ui-react';


class TopContainer extends Component {

  render() {
    return (
      <Container>
        <Divider hidden />
      <Grid relaxed columns={2}>
        <Grid.Column>
          <TopArtists />
        </Grid.Column>
        <Grid.Column>
          <TopPosts />
        </Grid.Column>
      </Grid>
    </Container>
    );
  }

}

export default TopContainer;
