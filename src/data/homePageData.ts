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
}


const Places: eachPlace[] = [


    {
        id: "01",
        images: ["https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        nameOfPlace: "Home in Los Angeles Horizon moon Heart",
        location: "Hapania, Rabindra Palli Near KK Home Solutions",
        reviewCount: "14",
        peopleCount: "12",
        price: "350",
        areaInSqft: '1200',
        amenityIds: ['1', '2', '3', '4', '5']

    },
    {
        id: "02",
        images: ["https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        nameOfPlace: "Home in Los Angeles Horizon moon Heart",
        location: "Hapania, Rabindra Palli Near KK Home Solutions",
        reviewCount: "14",
        peopleCount: "12",
        price: "350",
        areaInSqft: '1300',
        amenityIds: ['1', '2', '3']

    },
    {
        id: "03",
        images: ["https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        nameOfPlace: "Home in Los Angeles Horizon moon Heart",
        location: "Hapania, Rabindra Palli Near KK Home Solutions",
        reviewCount: "14",
        peopleCount: "12",
        price: "350",
        areaInSqft: '1700',
        amenityIds: ['1', '2', '3']

    },
    {
        id: "04",
        images: ["https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        nameOfPlace: "Home in Los Angeles Horizon moon Heart",
        location: "Hapania, Rabindra Palli Near KK Home Solutions",
        reviewCount: "14",
        peopleCount: "12",
        price: "350",
        areaInSqft: '1100',
        amenityIds: ['1', '2', '3']

    },

]

export default Places;
