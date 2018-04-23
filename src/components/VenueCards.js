import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = ({ venues }) =>
  venues.response.groups[0].items.map((item, index) => (
    <Card key={index}>
      <CardTitle
        title={item.venue.name}
        subtitle={item.venue.categories[0].name}
      />
      <CardText>
        <a
          href={`http://www.google.com/maps/place/${item.venue.location.lat},${
            item.venue.location.lng
          }`}
          target="_blank"
        >
          {item.venue.location.address}
        </a>
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  ));

export default CardExampleWithAvatar;
