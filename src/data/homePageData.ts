export interface OperatingHours {
    days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[],
    startingTime?: string,
    endingTime?: string,
    closed?: boolean,
}

export interface eachPlace {
    id: string,
    images: string[],
    nameOfPlace: string,
    location: string,
    reviewCount: string,
    peopleCount: string,
    price: string,
    areaInSqft: string,
    amenityIds: string[],
    operatingHours: OperatingHours[]
}

const Places: eachPlace[] = [
    {
        id: "01",
        images: [
            "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        nameOfPlace: "Home in Los Angeles Horizon moon Heart",
        location: "Hapania, Rabindra Palli Near KK Home Solutions",
        reviewCount: "14",
        peopleCount: "12",
        price: "350",
        areaInSqft: '1200',
        amenityIds: ['1', '2', '3', '4', '5', '6'],
        operatingHours: [
            {
                days: ['Monday', 'Wednesday', 'Friday'],
                startingTime: '09:00 AM',
                endingTime: '05:00 PM',
            },
            {
                days: ['Saturday', 'Sunday'],
                startingTime: '10:00 AM',
                endingTime: '03:00 PM',
            },
            {
                days: ['Tuesday', 'Thursday'],
                closed: true
            }
        ]
    },
    {
        id: "02",
        images: [
            "https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        nameOfPlace: "Cozy Villa in Sunnyvale",
        location: "Sunnyvale, CA",
        reviewCount: "22",
        peopleCount: "18",
        price: "450",
        areaInSqft: '1300',
        amenityIds: ['1', '2', '3', '6'],
        operatingHours: [
            {
                days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                startingTime: '08:00 AM',
                endingTime: '06:00 PM',
            },
            {
                days: ['Saturday'],
                startingTime: '09:00 AM',
                endingTime: '02:00 PM',
            },
            {
                days: ['Sunday'],
                closed: true
            }
        ]
    },
    {
        id: "03",
        images: [
            "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        nameOfPlace: "Luxury Apartment Downtown",
        location: "Downtown, NY",
        reviewCount: "35",
        peopleCount: "20",
        price: "600",
        areaInSqft: '1700',
        amenityIds: ['1', '2', '3'],
        operatingHours: [
            {
                days: ['Monday', 'Wednesday', 'Friday'],
                startingTime: '07:00 AM',
                endingTime: '03:00 PM',
            },
            {
                days: ['Saturday', 'Sunday'],
                startingTime: '10:00 AM',
                endingTime: '04:00 PM',
            },
            {
                days: ['Tuesday', 'Thursday'],
                closed: true
            }
        ]
    },
    {
        id: "04",
        images: [
            "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        nameOfPlace: "Modern House with Garden",
        location: "Beverly Hills, CA",
        reviewCount: "18",
        peopleCount: "15",
        price: "500",
        areaInSqft: '1100',
        amenityIds: ['1', '2', '3'],
        operatingHours: [
            {
                days: ['Monday', 'Wednesday', 'Friday'],
                startingTime: '08:00 AM',
                endingTime: '06:00 PM',
            },
            {
                days: ['Saturday'],
                startingTime: '09:00 AM',
                endingTime: '03:00 PM',
            },
            {
                days: ['Sunday'],
                closed: true
            }
        ]
    }
]

export default Places;
