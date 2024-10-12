"use client";
import React, { useState } from "react";
import Image from "next/image";

interface DropdownParams {
  options: string[];
  onSelect: (option: string) => void;
  placeholder: string;
}

const HomePageDropDown: React.FC<DropdownParams> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    placeholder || "Select an option"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm(""); // Reset the search term when an option is selected
    if (onSelect) onSelect(option);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-[319px] mt-[3.65px] z-50">
      {/* Dropdown button */}
      <div
        onClick={toggleDropdown}
        className="rounded-full pl-[16px] pr-[12px] py-[11px] bg-[#FAFAFB] cursor-pointer"
      >
        <div className="flex justify-between">
          <span className="dropdown-button">{selectedOption}</span>
          <Image
            alt="dropdown icon"
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-transform duration-300 ease-in-out`}
            src="./icons/bottomArrow.svg"
            width={18}
            height={18}
          />
        </div>
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-2xl border border-slate-300 bg-white shadow-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-t-2xl border-b border-slate-300 focus:outline-none"
          />
          <ul className="max-h-48 overflow-y-auto py-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option: string, index: number) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePageDropDown;
