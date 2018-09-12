import React, { Component } from 'react'
import PostCard from './PostCard'
import { Container, Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import ArtistIndex from './ArtistIndex'


class ArtistContainer extends Component {

  render() {
    return (
      <ArtistIndex />
    );
  }

}

export default ArtistContainer;
