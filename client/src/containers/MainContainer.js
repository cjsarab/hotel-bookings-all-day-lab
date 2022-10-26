import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '.././components/ui/NavBar';
import HomePage from "../components/HomePage";
import BookingsList from "../components/BookingsList";
import ShowBooking from "../components/ShowBooking";

const MainContainer = () => {

    const [bookings, setBookings] = useState([])
    var [bookingID, setBookingID] = useState(null)

    useEffect(() => {
      getBookings();
    }, []);

    const getBookings = function(){
        fetch("http://localhost:9000/api/bookings")
        .then(res => res.json())
        .then(bookings => setBookings(bookings))
    };

    const getBookingID = function(id) {
        setBookingID(id)
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
              getBookingID={getBookingID}
              />} />

              <Route path="/bookings/show-booking/id" element={
              <ShowBooking 
              bookingID={bookingID}
              />} />

            </Routes>
        </Router>
        </>
    );
};

export default MainContainer;
