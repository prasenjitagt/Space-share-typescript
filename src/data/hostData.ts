type Month =
    | "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun"
    | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";

export interface eachHost {
    hostId: string;
    hostName: string;
    placeIdsList: string[];
    joiningMonth: Month;
    joiningYear: number;
    hostImageUrl: string;
    hostReviewCount: number;
}

export const Hosts: eachHost[] = [
    { hostId: "1", hostName: "Alice Johnson", placeIdsList: ["01", "02"], joiningMonth: "Jan", joiningYear: 2022, hostImageUrl: "/images/profile.jpg", hostReviewCount: 10 },
    { hostId: "2", hostName: "Bob Smith", placeIdsList: ["03"], joiningMonth: "Feb", joiningYear: 2023, hostImageUrl: "/images/bob.jpg", hostReviewCount: 5 },
    { hostId: "3", hostName: "Charlie Brown", placeIdsList: ["04"], joiningMonth: "Mar", joiningYear: 2021, hostImageUrl: "/images/charlie.jpg", hostReviewCount: 8 },
    { hostId: "4", hostName: "Dana White", placeIdsList: ["05"], joiningMonth: "Apr", joiningYear: 2024, hostImageUrl: "/images/dana.jpg", hostReviewCount: 12 },
    { hostId: "5", hostName: "Eve Davis", placeIdsList: ["06"], joiningMonth: "May", joiningYear: 2023, hostImageUrl: "/images/eve.jpg", hostReviewCount: 15 },
    { hostId: "6", hostName: "Frank Martin", placeIdsList: ["07", "08"], joiningMonth: "Jun", joiningYear: 2022, hostImageUrl: "/images/frank.jpg", hostReviewCount: 20 },
    { hostId: "7", hostName: "Grace Lee", placeIdsList: ["09"], joiningMonth: "Jul", joiningYear: 2021, hostImageUrl: "/images/grace.jpg", hostReviewCount: 9 },
    { hostId: "8", hostName: "Hank Wilson", placeIdsList: ["10", "11"], joiningMonth: "Aug", joiningYear: 2020, hostImageUrl: "/images/hank.jpg", hostReviewCount: 6 },
    { hostId: "9", hostName: "Ivy Chen", placeIdsList: ["12"], joiningMonth: "Sep", joiningYear: 2024, hostImageUrl: "/images/ivy.jpg", hostReviewCount: 14 },
    { hostId: "10", hostName: "Jack Smith", placeIdsList: ["13", "14"], joiningMonth: "Oct", joiningYear: 2019, hostImageUrl: "/images/jack.jpg", hostReviewCount: 3 }
];
