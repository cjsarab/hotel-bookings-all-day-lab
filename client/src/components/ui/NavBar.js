import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (bookingID) => {
  return (
    <>
    <ul className="nav-bar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/bookings">Bookings</Link>
        </li>
        <li>
            <Link to="/bookings/create-booking">Create Booking</Link>
        </li>
        {/* <li>
            <Link to="/bookings/:id">Delete Booking</Link>
        </li>
        <li>
            <Link to="/bookings/:id">Update Booking</Link>
        </li>  */}
    </ul>
    </>
  );
};

export default NavBar;