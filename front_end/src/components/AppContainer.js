import React, { Component } from 'react';
import Navbar from './Navbar';
import TopContainer from './TopContainer'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import ArtistProfile from './ArtistProfile'
import ArtistGallery from './ArtistGallery'
import GalleryPost from './GalleryPost'

class AppContainer extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <TopContainer />
        <LogInForm />
        <SignUpForm />
        <ArtistProfile />
        <ArtistGallery />
        <GalleryPost />
      </div>
    );
  }

}

export default AppContainer;
