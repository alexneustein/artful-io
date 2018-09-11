import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import TopContainer from './components/TopContainer'
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'
import ArtistProfile from './components/ArtistProfile'
import ArtistGallery from './components/ArtistGallery'
import GalleryPost from './components/GalleryPost'
import EditArtistForm from './components/EditArtistForm'
import App from './App'
// import NotFound from './NotFound';

const history = createBrowserHistory();
const Routes = () =>
  <Router history={history}>
    <Switch>
      <Route path="/artist/:id/edit" component={EditArtistForm} />
      <Route path="/artist/new" component={SignUpForm} />
      <Route path="/artists/" component={ArtistProfile} />
      <Route path="/home/" component={App} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </Router>;

export default Routes;
