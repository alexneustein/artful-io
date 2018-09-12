import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import dateFormatter from "./helpers";

class PostCard extends Component {

  render() {

    const expandlink = 'images/' + this.props.image.id + '/'

    return (
      <div>
        <Card color='blue'>
          <a href={expandlink}><Image src={this.props.image.url} height /></a>

            <Card.Content>
            <Card.Header><a href={expandlink}>{this.props.image.title}</a></Card.Header>
            <Card.Meta>
              <span className='date'>Posted in {dateFormatter(this.props.image.image_date)}</span>
            </Card.Meta>
            <Card.Description>by {this.props.artist}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              {this.props.image.likes} Likes
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }

}

export default PostCard;
