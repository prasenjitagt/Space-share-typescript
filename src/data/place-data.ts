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
    operatingHours: OperatingHours[],
    aboutplace:string,
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
        ],
        aboutplace: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi laboriosam ad itaque inventore aperiam consequatur. Assumenda eos sunt dolor consequuntur quibusdam, alias eius fugiat quam voluptatibus voluptas eveniet magni eligendi, sapiente totam reiciendis! Debitis repudiandae natus ratione, ab quis eligendi voluptas, doloremque perferendis maxime earum voluptate beatae odio at deserunt? Beatae, molestiae nisi! Voluptatum sint doloribus excepturi reiciendis numquam molestiae mollitia itaque explicabo exercitationem, minima perspiciatis deleniti ducimus architecto facilis ex dolores nam eaque voluptas dolorum vero animi. Ex, minima sequi explicabo aut eius totam qui cum, ad error ipsa, perferendis nam incidunt magnam aperiam sint porro asperiores sit commodi itaque id doloremque soluta. Totam qui odio quod incidunt modi ipsum expedita sint omnis, aliquam ullam earum iste quibusdam minus est, voluptatem eos illum nemo, provident maiores et quidem dignissimos quas! Dolores, iure facere. Debitis quae doloribus, maxime nulla aliquam aperiam, iure voluptatem, similique odio quibusdam veniam. Repellat, perferendis porro necessitatibus dolorem minima eum blanditiis provident incidunt natus sequi debitis mollitia ipsum! Tenetur quam non ad officia obcaecati saepe assumenda fugit dicta laboriosam itaque aperiam inventore deleniti laborum vitae suscipit esse molestias consequuntur quo consectetur qui, ullam soluta sint. Tempora laboriosam debitis provident, consequuntur iste labore facilis asperiores, vel natus reprehenderit nemo consectetur aliquid rerum. Quis excepturi aliquid possimus autem soluta repellendus optio provident mollitia in itaque, explicabo reprehenderit magni perspiciatis nostrum fugit at esse sunt debitis ratione eaque molestiae quibusdam quia, iusto rem? Necessitatibus blanditiis ipsam libero? Inventore maiores tempora nostrum accusantium, enim ea esse itaque aperiam suscipit dolorem dolore provident dolorum? Odio excepturi quos qui porro, quasi eos. Repellendus atque odio excepturi totam quas non voluptates quam quaerat consectetur nostrum officia enim dolores nam impedit laboriosam molestiae eligendi debitis, ipsum id esse laudantium. Quis a distinctio ut rem aspernatur aliquam praesentium eos temporibus. Similique magnam nam consequuntur reiciendis vitae et, eius delectus corporis asperiores nobis vero qui aspernatur quasi. Assumenda illum iusto laudantium beatae laborum aliquid doloremque, omnis cumque quae maiores! Facere itaque iusto accusantium quas esse ipsa corrupti cupiditate obcaecati! Eum soluta aliquid eaque accusantium praesentium quas necessitatibus voluptatum in recusandae. Error dolorem odit eum quibusdam, dolores alias eveniet cum repudiandae quidem! Voluptatibus accusamus vitae perspiciatis hic repellat vel soluta, assumenda enim dolore reiciendis, alias ducimus animi placeat quia nobis minus voluptatum? Et porro distinctio nulla quod dolore deserunt dolores quis accusantium facere magnam, ipsum molestias aliquam voluptas, reiciendis odio corporis excepturi iste ex laboriosam officiis. Voluptatibus a nesciunt accusantium tempore ex. Ut repudiandae tenetur laudantium non labore delectus dignissimos ad cupiditate, sed dolorum a eveniet quam minima voluptatem, eos quibusdam. Repellendus molestias dolorem quae quo commodi eaque consequuntur quidem dolore ab maxime eum aliquam quas, exercitationem deleniti rerum! Corrupti provident culpa asperiores maxime quia vero iste expedita non reiciendis quae nulla ipsa, adipisci molestias. Suscipit, alias fuga impedit harum minus ipsam repudiandae nam molestiae veritatis, quia praesentium, porro animi delectus a autem excepturi doloribus eveniet ut quidem ab et! Minus porro voluptatibus eveniet. Delectus quae aspernatur deserunt laboriosam doloribus atque magnam esse amet, error nulla?"
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
        ],
        aboutplace:"asdfjasd asdkf asdk'f a a'sdfk'asdflkgaksdf"
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
        ],
        aboutplace:"asdfjasd asdkf asdk'f a a'sdfk'asdflkgaksdf"
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
        ],
        aboutplace:"asdfjasd asdkf asdk'f a a'sdfk'asdflkgaksdf"
    }
]

export default Places;
