import React, { Component } from 'react'
import ImageIndex from './ImageIndex'
import GalleryPost from './GalleryPost'
import { Switch, Redirect, Route } from 'react-router-dom';


class ImageContainer extends Component {

  render() {
    return (
      <div>
      <Switch>
        <Route path="/images/:id" render={(props) => <GalleryPost {...props} />}/>
        <Route exact path="/images" component={ImageIndex}/>
      </Switch>
      </div>
    );
  }

}

export default ImageContainer;
