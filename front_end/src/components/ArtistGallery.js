import React, { Component } from 'react'
import PostCard from './PostCard'
import { Container, Grid } from 'semantic-ui-react'


class ArtistGallery extends Component {

  render() {
    return (
      <Container>
        <h5>This is the artist top Gallery</h5>
        <Grid relaxed columns={5}>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
          <Grid.Column>
            <PostCard />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }

}

export default ArtistGallery;
