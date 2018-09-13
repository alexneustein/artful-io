import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import dateFormatter from "./helpers";

class ArtistCard extends Component {

  render() {
    const avatars =  ["download-1.jpg", "download-1.png", "download-2.jpg", "download-2.png", "download-3.jpg", "download-3.png", "download-4.jpg", "download-4.png", "download-5.jpg", "download-5.png", "download-6.jpg", "download-6.png", "download-7.jpg", "download-7.png", "download.jpg", "download.png"]

    const expandlink = '/artists/' + this.props.artist.id + '/'

    return (
      <div>
        <Card color='red'>
          <a href={expandlink}><Image src={'/avatar/' + avatars[Math.floor(Math.random() * ((avatars.length)-1))]} height/> </a>
          <Card.Content>
            <Card.Header>{this.props.artist.name_first} {this.props.artist.name_last}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in {dateFormatter(this.props.artist.created_at)}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              {this.props.artist.likes} Likes
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }

}

export default ArtistCard;
