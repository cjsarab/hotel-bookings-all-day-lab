import React from 'react';
import {useParams} from 'react-router-dom';

const ShowBooking = ({bookingID}) => {

    const {id} = useParams(bookingID)


  return (
    <div>this is the booking page</div>
  );
};

export default ShowBooking;