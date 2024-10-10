// import { useState } from "react";

// const HomePageFilterSection = () => {
//     // State to keep track of the selected filters
//     const [selected, setSelected] = useState<string[]>([]);

//     const handleSelect = (itemName: string) => {
//         setSelected((prev) =>
//             prev.includes(itemName)
//                 ? prev.filter(item => item !== itemName)
//                 : [...prev, itemName]
//         );
//     };

//     return (
//         <div className="mb-[14px] grid grid-cols-3 gap-2">
//             {["Music Studio", "Photo Studio", "Meeting", "Workshop", "Party", "Live Music", "Wedding Reception", "Event"]
//                 .map((itemName) => (
//                     <FilterSectionItem
//                         key={itemName}
//                         itemName={itemName}
//                         isSelected={selected.includes(itemName)}
//                         onClick={() => handleSelect(itemName)}
//                     />
//                 ))
//             }
//         </div>
//     );
// }

// export default HomePageFilterSection;

// interface PropsType {
//     itemName: string;
//     isSelected: boolean;
//     onClick: () => void;
// }

// export const FilterSectionItem = ({ itemName, isSelected, onClick }: PropsType) => {
//     return (
//         <div
//             onClick={onClick}
//             className={`my-inter inline-flex items-center justify-center gap-px px-3 py-2.5 relative bg-white rounded-[36px] border-[0.5px] border-solid
//             ${isSelected ? 'border-blue-600 border-[3px]' : 'border-black text-black'} cursor-pointer`}
//         >
//             <div className="relative w-fit mt-[-0.50px] font-light text-xs tracking-[-0.25px] leading-[12.5px] whitespace-nowrap">
//                 {itemName}
//             </div>
//         </div>
//     );
// };
