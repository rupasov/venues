import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BASE_GOOGLE_MAP_URL } from '../constants';

const styles = {
  card: {
    width: '30%',
    display: 'inline-block',
    textAlign: 'left',
    marginBottom: '40px',
    marginLeft: '20px',
    marginRight: '20px'
  },
  text: {
    color: '#21BE58'
  }
};

const VenueCards = ({ venues }) =>
  venues.response.groups[0].items.map((item, index) => (
    <Card key={index} style={styles.card}>
      <CardTitle
        title={item.venue.name}
        subtitle={item.venue.categories[0].name}
      />
      <CardText>
        <a
          className="map-link"
          href={`${BASE_GOOGLE_MAP_URL}${item.venue.location.lat},${
            item.venue.location.lng
          }`}
          target="_blank"
          style={styles.text}
        >
          {item.venue.location.address || 'Address'}
        </a>
      </CardText>
    </Card>
  ));

VenueCards.propTypes = {
  venues: PropTypes.object
};

export default VenueCards;
