import React from 'react';
import BookingItem from './BookingItem';

const BookingsList = ({
    bookings,
    getBookingID,
}) => {

    const bookingsItems = bookings.map((bookingItem, index) => {
      return <BookingItem
      bookingItem={bookingItem}
      key={index}

      getBookingID={getBookingID}
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