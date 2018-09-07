import React, { Component } from 'react';
import TopArtists from './TopArtists'
import TopPosts from './TopPosts'

class TopContainer extends Component {

  render() {
    return (
      <div>
        <TopArtists />
        <TopPosts />
      </div>
    );
  }

}

export default TopContainer;
