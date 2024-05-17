// Calendar.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Thiết lập localizer sử dụng moment
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([{}])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/event-calendar')
                console.log(res.data)
                setEvents(res.data)
            }
            catch (err) {
                console.log(err)
                res.send("err")
            }
        }
        fetchData()
    }, [])

    return (
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={events}
                style={{ height: 500 }}
            />
        </div>
    );
};

export default MyCalendar;
