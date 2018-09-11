import React, { Component } from 'react';
import PostCard from './PostCard'
import { Grid, Container } from 'semantic-ui-react';


class TopPosts extends Component {
  render() {
    return (
      <Container>
        <Grid relaxed columns={3}>
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
};

export default TopPosts
