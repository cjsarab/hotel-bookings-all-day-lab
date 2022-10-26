import React from 'react';
import {Link} from 'react-router-dom';

const BookingItem = ({
    bookingItem,
    getBookingID,
}) => {
  return (
    <>
    <p>Guest Name: {bookingItem.guest_name}</p>
    <p>Guest Email: {bookingItem.guest_email}</p>
    <p>Checked In? {bookingItem.checked_in ? <span>True</span> : <span>False</span> }
    </p>
        <li>
            <Link to="/bookings/show-booking/:id" onClick={getBookingID(bookingItem._id)}>Show Booking</Link>
        </li>
    <br/>
    </>
  );
};

export default BookingItem;