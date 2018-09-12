import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TopContainer from './TopContainer'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import ArtistProfile from './ArtistProfile'
import ImageContainer from './ImageContainer'
import ArtistContainer from './ArtistContainer'
import GalleryPost from './GalleryPost'
import EditArtistForm from './EditArtistForm'
import FileUpload from '../FileUpload'

class AppContainer extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <Switch >
          <Route exact path='/' component={TopContainer}/>
          <Route exact path='/login' component={LogInForm}/>
          <Route exact path='/signup' component={SignUpForm}/>
          <Route exact path='/edit_artist' component={EditArtistForm}/>
          <Route exact path='/artists' component={ArtistContainer}/>
          <Route exact path='/artist' component={ArtistProfile}/>
          <Route exact path='/gallery' component={ImageContainer}/>
          <Route exact path='/gallery_item' component={GalleryPost}/>
          <Route exact path='/file_upload' component={FileUpload}/>
        </Switch>
      </div>
    );
  }

}

export default AppContainer;
