import React from 'react';
import {Link} from 'react-router-dom';
import ShowBooking from './ShowBooking';

const BookingItem = ({
    bookingItem,
    bookingID,
    selectedBookingItem,

    getBookingID,
    getSelectedBookingItem
}) => {

const id = bookingItem._id

const onClick = () => {
    getBookingID(id);
    getSelectedBookingItem(bookingItem);
};

  return (
    <>
        <li>
            <button onClick={onClick}>{bookingItem.guest_name}</button>
        </li>
        <div>
            {
            selectedBookingItem 
            && 
            bookingItem._id == bookingID
            ? 
            <ShowBooking
            bookingID={bookingID} 
            bookingItem={bookingItem}
            />
            :
            null 
            }
        </div>
    <br/>
    </>
  );
};

export default BookingItem;