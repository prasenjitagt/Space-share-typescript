'use client'
import React from 'react'

import { useState } from 'react';
import { Range } from 'react-range';

const HomePageFilterRangeSlider: React.FC = () => {

    const [values, setValues] = useState([400, 3000]);
    const MIN = 100;
    const MAX = 5000;

    return (
        <>

            <Range
                step={100}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="w-full h-2 bg-gray-300 rounded-full"
                        style={{ ...props.style }}
                    >
                        <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{
                                position: 'absolute',
                                left: `${(values[0] - MIN) / (MAX - MIN) * 100}%`,
                                right: `${(MAX - values[1]) / (MAX - MIN) * 100}%`
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-4 w-4 bg-blue-500 rounded-full shadow-lg focus:outline-none"
                        style={{ ...props.style }}
                    />
                )}
            />
            <div className="flex justify-between mt-2">
                <span className="text-blue-600">₹{values[0]}</span>
                <span className="text-blue-600">₹{values[1]}</span>
            </div>
        </>
    );
};

export default HomePageFilterRangeSlider;

