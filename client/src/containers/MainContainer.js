import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '.././components/ui/NavBar';
import HomePage from "../components/HomePage";
import BookingsList from "../components/BookingsList";
import BookingService from "../services/BookingsService";
import CreateBooking from "../components/CreateBooking";

const MainContainer = () => {

    const [bookings, setBookings] = useState([])
    const [bookingID, setBookingID] = useState(null)
    const [selectedBookingItem, setSelectedBookingItem] = useState([])

    useEffect(() => {
        BookingService.getBookings()
        .then(bookings => setBookings(bookings))
    }, []);

    const getBookingID = function(id) {
        console.log("haha");
        setBookingID(id)
    };

    const getSelectedBookingItem =function(bookingItem) {
        setSelectedBookingItem(bookingItem)
    };

    const addBooking = (booking) => {
        const temp = bookings.map(s => s);
        temp.push(booking);
        setBookings(temp);
    }

    return (
        <>
        <Router>
          <NavBar />
            <Routes>
              <Route path="/" element={
              <HomePage/>} />

              <Route path="/bookings" element={
              <BookingsList 
              bookings={bookings}
              bookingID={bookingID}
              selectedBookingItem={selectedBookingItem}

              getBookingID={getBookingID}
              getSelectedBookingItem={getSelectedBookingItem}
              />} />

              <Route path="/bookings/create-booking" element={
              <CreateBooking addBooking={addBooking}/>
              }/>

            </Routes>
        </Router>
        </>
    );
};

export default MainContainer;
