import React, { Component } from 'react';
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
        <TopContainer />
        <LogInForm />
        <SignUpForm />
        <EditArtistForm />
        <ArtistProfile />
        <ArtistGallery />
        <GalleryPost />
      </div>
    );
  }

}

export default AppContainer;
