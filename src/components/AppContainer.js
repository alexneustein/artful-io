import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Navbar from './Navbar';
import TopContainer from './TopContainer'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import ArtistProfile from './ArtistProfile'
import ArtistGallery from './ArtistGallery'
import GalleryPost from './GalleryPost'
import EditArtistForm from './EditArtistForm'

const API = "https://localhost:3000"

class AppContainer extends Component {

  state = {
    artists: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(this.setInitialState)
  }

  setInitialState = (initialState) => {
    this.setState({
      artists: initialState,
    });
  }

  displayArtists = (artists) => {
    this.setState({artists: artists})
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch >
          <Route exact path='/' component={TopContainer}/>
          <Route exact path='/login' component={LogInForm}/>
          <Route exact path='/signup' component={SignUpForm}/>
          <Route exact path='/edit_artist' component={EditArtistForm}/>
          <Route exact path='/artist' component={ArtistProfile}/>
          <Route exact path='/gallery' component={ArtistGallery}/>
          <Route exact path='/gallery_item' component={GalleryPost}/>
        </Switch>
      </div>
    );
  }

}

export default AppContainer;
