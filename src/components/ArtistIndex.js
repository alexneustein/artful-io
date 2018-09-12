import React, { Component } from 'react'
import ArtistCard from './ArtistCard'
import { Pagination, Dimmer, Loader, Container, Grid } from 'semantic-ui-react'


class ArtistIndex extends Component {
  state = {
    loading: true,
    artistIndex: [],
    activePage: 1,
  }

  componentDidMount() {
    fetch('http://localhost:3001/artists/')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      artistIndex: resData,
      loading: false
    })
  }

handlePage = (e, { activePage }) => {
  let gotopage = { activePage }
  let pagenum = gotopage.activePage
  let pagestring = pagenum.toString()
  this.setState({
    loading: true
  })
  const url = "http://localhost:3001/artists/?page=" + pagestring

  fetch(url)
  .then(res => res.json())
  .then(this.initialState)
}

  render() {
    if(this.state.loading) {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader>Loading Artists</Loader>
          </Dimmer>
        </Container>
      )
    }

    return (
      <Container>
        <h5>All Artists</h5>
        <Pagination onPageChange={this.handlePage} size='mini' siblingRange="6" defaultActivePage={this.state.artistIndex.page} totalPages={this.state.artistIndex.pages} />
        <Grid relaxed columns={5}>
          { this.state.artistIndex.artists.map(artist => {
            return (<Grid.Column>
                <ArtistCard key={artist.id} artist={artist}/>
            </Grid.Column>)
          }) }
        </Grid>
      </Container>
    );
  }

}

export default ArtistIndex;
