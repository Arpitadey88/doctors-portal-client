import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 15,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '08.00 AM - 09.00 AM',
        price: 25,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        price: 25,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00 PM',
        price: 35,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        price: 40,
        space: 10,
    },
]
const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }} >
                Available Appointments On {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">
                Appointment Booked Successfully!! </Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;