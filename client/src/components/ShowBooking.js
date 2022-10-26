import React from 'react';

const ShowBooking = ({bookingItem}) => {

  return (
    <>
    <p>Guest Name: {bookingItem.guest_name}</p>
    <p>Guest Email: {bookingItem.guest_email}</p>
    <p>Checked In? {bookingItem.checked_in ? <span>True</span> : <span>False</span> }</p>
    </>
  );
};

export default ShowBooking;