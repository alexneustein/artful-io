import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class ArtistCard extends Component {

  render() {
    return (
      <div>
        <Card color='red'>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' height/>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              22 Likes
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }

}

export default ArtistCard;
