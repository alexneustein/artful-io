import React, { Component } from 'react';
import { Container, Grid, Image, Header, Card } from 'semantic-ui-react'



class ArtistProfile extends Component {

  render() {
    return (
      <Container>
        <Grid relaxed columns={2}>
          <Grid.Column>
            <Image src='https://picsum.photos/200/300/?random' size='medium' rounded border='red' />
          </Grid.Column>
          <Grid.Column>
            <Card color='red' >
              <Header as='h3'> Artist Information:</Header>
              <Card.Content>
                <Card.Header>Artist Name: Matthew Harris</Card.Header>
                <Card.Meta>Joined Sep, 11, 2018</Card.Meta>
                <Card.Description> Artist Biography: Matthew is a Painter living in New York. </Card.Description>
                <Card.Description> Artist email: artist@example.com </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }

}

export default ArtistProfile;
