import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class PostCard extends Component {

  dateFormatter = (datestring) => {
    const dateMonths = ["","January","February","March","April","May","June","July","August","September","October","November","December"]
    if (!!datestring) {
      let dateArray = datestring.split('-');
      const thestring = dateMonths[parseInt(dateArray[1])] + ", " + dateArray[0]
      return thestring
    }
  }

  render() {
    return (
      <div>
        <Card color='red'>
          <Image src={this.props.image.url} height />
          <Card.Content>
            <Card.Header>{this.props.image.title}</Card.Header>
            <Card.Meta>
              <span className='date'>Posted in {this.dateFormatter(this.props.image.image_date)}</span>
            </Card.Meta>
            <Card.Description>by {this.props.image.artist.name_first} {this.props.image.artist.name_last}</Card.Description>
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
