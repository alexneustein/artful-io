import React, { Component } from 'react';
import { List, Divider, Container, Grid, Image, Header, Card, Icon } from 'semantic-ui-react'
import dateFormatter from "./helpers";
import PostCard from './PostCard'


class ArtistProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artistId: this.props.match.params.id,
      liked: false,
      artistobj: {types: [""], images: [""]}
    }
  }

  componentDidMount() {
    const fetchPath = `http://localhost:3001/artists/${this.state.artistId}`
    fetch(fetchPath)
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      artistobj: resData,
    })
  }

  handleLike = () => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        artistobj: {...this.state.artistobj, likes: this.state.artistobj.likes + 1}
      })
      fetch(`http://localhost:3001/artists/${this.state.artistobj.id}/addlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })

    } else {
      this.setState({
        liked: false,
        artistobj: {...this.state.artistobj, likes: this.state.artistobj.likes - 1}
      })
      fetch(`http://localhost:3001/artists/${this.state.artistobj.id}/unlike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
      })

    }
  }

  render() {
    return (
      <Container>
        <Divider hidden />
        <Grid relaxed>
          <Grid.Column width={8}>
              <Header as='h2'>{this.state.artistobj.name_first} {this.state.artistobj.name_last}</Header>
                  <Card.Content extra>
                    <a onClick={this.handleLike}>
                      <Icon name='like' />
                      {this.state.artistobj.likes} Likes
                    </a>
                  </Card.Content>
                  <Divider hidden />
                <p><b>Joined</b> {dateFormatter(this.state.artistobj.created_at)}</p>
                <p><b>Artist Biography:</b> {this.state.artistobj.about} </p>
                <p><b>Specialities:</b></p>
                  <List bulleted>
                  { this.state.artistobj.types.map(type => {
                    return ( <List.Item>{type}</List.Item> )
                  }) }
                </List>

          </Grid.Column>
          <Grid.Column width={4}>
            <Image src='https://picsum.photos/200/300/?random' size='medium' rounded border='red' />
          </Grid.Column>
        </Grid>
        <Container>
          <Header as='h3'>{this.state.artistobj.name_first}'s Images</Header>
            <Grid relaxed columns={5}>
              { this.state.artistobj.images.map(image => {
                return (<Grid.Column>
                <PostCard key={image.id} image={image} artist={this.state.artistobj.name_first + " " + this.state.artistobj.name_last}/>
                </Grid.Column>)
              }) }
            </Grid>
        </Container>

      </Container>
    );
  }

}

export default ArtistProfile;
