'use client'

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/stylesheets/details-page-calendar.css'

const MyCalendar: React.FC = () => {

    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];

    // Initialize with today's date as the minimum selectable date
    const [date, setDate] = useState<Value | null>(null);

    return (
        <div className="centerAll mx-[13px]">
            <Calendar
                onChange={setDate}
                value={date}
                minDate={new Date()} // Restrict date selection to today onwards
                className="react-calendar bg-white rounded-[17px]"
            />

            {/* Divider */}
            <div className="h-[1px] my-[24px] w-full bg-slate-500 opacity-20"></div>
        </div>
    );
};

export default MyCalendar;
