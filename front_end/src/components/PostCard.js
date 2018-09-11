import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class PostCard extends Component {

  render() {
    return (
      <div>
        <Card color='red'>
          <Image src='https://picsum.photos/200/300/?random' height />
          <Card.Content>
            <Card.Header>Top Images</Card.Header>
            <Card.Meta>
              <span className='date'>Posted in 2015</span>
            </Card.Meta>
            <Card.Description>This are the most voted posts</Card.Description>
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

export default PostCard;
