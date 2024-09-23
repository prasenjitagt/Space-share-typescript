'use client'

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar: React.FC = () => {

    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];



    const [date, setDate] = useState<Value>(new Date());

    const selectedDate = date as Date;

    return (
        <div className="centerAll mx-[13px]">
            <Calendar
                onChange={setDate}
                value={date}
                className="react-calendar bg-white rounded-[17px]"

            />

            {/* Divider */}
            <div className="h-[1px] my-[24px] w-full bg-slate-500 opacity-50 " ></div>
        </div>
    );
};

export default MyCalendar;
