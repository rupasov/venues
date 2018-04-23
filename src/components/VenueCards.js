import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BASE_GOOGLE_MAP_URL } from '../constants';

const VenueCards = ({ venues }) =>
  venues.response.groups[0].items.map((item, index) => (
    <div>
      <Card key={index} style={{ width: '40%' }}>
        <CardTitle
          title={item.venue.name}
          subtitle={item.venue.categories[0].name}
        />
        <CardText>
          <a
            href={`${BASE_GOOGLE_MAP_URL}${item.venue.location.lat},${
              item.venue.location.lng
            }`}
            target="_blank"
          >
            {item.venue.location.address}
          </a>
        </CardText>
      </Card>
    </div>
  ));

export default VenueCards;
