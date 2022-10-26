import React from 'react';
import BookingItem from './BookingItem';

const BookingsList = ({
    bookings,
    bookingID,
    selectedBookingItem,

    getBookingID,
    getSelectedBookingItem
}) => {

    const bookingsItems = bookings.map((bookingItem, index) => {
      return <BookingItem
      bookingItem={bookingItem}
      key={index}
      bookingID={bookingID}
      selectedBookingItem={selectedBookingItem}

      getBookingID={getBookingID}
      getSelectedBookingItem={getSelectedBookingItem}
      />
    });

  return (
    <>
    <div>
    {bookingsItems}
    </div>
    </>
  );
};

export default BookingsList;