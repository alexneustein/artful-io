import React, { Component } from 'react';
import PostCard from './PostCard'
import { Grid, Container } from 'semantic-ui-react';


class TopPosts extends Component {
  state = {
    topImages: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/images-top/')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      topImages: resData,
    })
  }


  render() {
    return (
      <Container>
        <Grid relaxed columns={3}>
          { this.state.topImages.map(image => {
            return (<Grid.Column>
            <PostCard key={image.id} image={image}/>
            </Grid.Column>)
          }) }
        </Grid>
      </Container>
    );
  }
};

export default TopPosts
