"use client";

import { NavbarItem } from "@/app/(site)/_components/navbar/navbar-item";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropDownProps {
    value?: string;
    menuItems?: { value: string }[];
}

export const DropDown = ({ value, menuItems }: DropDownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const onChange = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div className="text-navItem text-sm transition-colors duration-200 ease-in-out hover:text-navItem/50 select-none">
            <p className="flex items-center " onClick={onChange}>
                {value}
                <span className="ml-2">
                    <ChevronDown
                        className={`${
                            dropdownOpen ? "rotate-180" : "rotate-0"
                        } transition-transform duration-200 ease-in-out w-4 h-4`}
                    />
                </span>
            </p>

            {/* menuItems */}
            {dropdownOpen ? (
                <div className="px-3 mt-2 flex flex-col items-start gap-2">
                    {menuItems?.map((item, idx) => (
                        <NavbarItem value={item.value} href="/" key={idx} />
                    ))}
                </div>
            ) : null}
        </div>
    );
};
