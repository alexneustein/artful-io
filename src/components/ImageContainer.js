import React, { Component } from 'react'
import PostCard from './PostCard'
import { Container, Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import ImageIndex from './ImageIndex'


class ImageContainer extends Component {

  render() {
    return (
      <ImageIndex />
    );
  }

}

export default ImageContainer;
