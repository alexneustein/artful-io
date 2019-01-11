import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TopContainer from './TopContainer'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import ArtistProfile from './ArtistProfile'
import ImageIndex from './ImageIndex'
import ArtistIndex from './ArtistIndex'
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
          <Route path="/artists/:id" render={(props) => <ArtistProfile {...props} />}/>
          <Route exact path="/artists" component={ArtistIndex}/>
          <Route path="/images/:id" render={(props) => <GalleryPost {...props} />}/>
          <Route exact path="/images" component={ImageIndex}/>
          <Route exact path='/file_upload' component={FileUpload}/>
        </Switch>
      </div>
    );
  }

}

export default AppContainer;
