import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for {appointment.serviceName} </h2>
            <h3>Pay: ${appointment.price}</h3>
        </div>
    );
};

export default Payment;