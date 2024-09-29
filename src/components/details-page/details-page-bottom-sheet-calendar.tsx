
'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/stylesheets/details-page-calendar.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { setSelectedDate } from '@/slices/places/current-place-slice';

interface PropType {
    placeId: string;
}

const DetailsPageBottomSheetCalendar: React.FC<PropType> = ({ placeId }) => {
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [date, setDate] = useState<Value | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const handleDateChange = (value: Value): void => {
        setDate(value);

        if (value && !Array.isArray(value)) {
            // Convert Date to ISO string before dispatching
            const dateString = value.toISOString(); // Change this if you want a different format
            dispatch(setSelectedDate({ placId: placeId, date: dateString }));
        }
    };

    return (
        <div className="centerAll mx-[13px]">
            <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()} // Restrict date selection to today onwards
                className="react-calendar bg-white rounded-[17px]"
            />
        </div>
    );
};

export default DetailsPageBottomSheetCalendar;

