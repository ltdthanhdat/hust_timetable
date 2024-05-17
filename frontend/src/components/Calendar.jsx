// Calendar.js
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Thiết lập localizer sử dụng moment
const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 1000 }}
            />
        </div>
    );
};

export default MyCalendar;
