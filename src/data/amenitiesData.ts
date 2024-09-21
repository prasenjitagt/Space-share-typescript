export interface eachAmenity {
    amenityId: string,
    amenityName: string,
    amenityIconName: string
}

const Amenities: eachAmenity[] = [
    {
        amenityId: '1',
        amenityName: 'River View',
        amenityIconName: 'riverView.svg'
    },
    {
        amenityId: '2',
        amenityName: 'Kitchen',
        amenityIconName: 'kitchen.svg'
    },
    {
        amenityId: '3',
        amenityName: 'Wifi',
        amenityIconName: 'wifi.svg'
    },
    {
        amenityId: '4',
        amenityName: 'Free Parking',
        amenityIconName: 'car.svg'
    },
    {
        amenityId: '5',
        amenityName: 'AC',
        amenityIconName: 'ac.svg'
    },
]

export default Amenities;