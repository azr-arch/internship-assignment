"use client";

import { NavItems, SecondaryNav } from "@/constants";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavbarItem } from "./navbar-item";
import { DropDown } from "@/components/dropdown";

export const MobileNav = () => {
    const { isOpen, onOpen, onOpenChange } = useMobileNav();

    return (
        <>
            <button onClick={onOpen} className="block md:hidden">
                <Menu className="w-6 h-6 text-white" />
            </button>

            <div
                data-state={isOpen ? "open" : "closed"}
                className="fixed z-50 top-0 right-0 data-[state='closed']:translate-x-full data-[state='open']:translate-x-0  bg-black/20 w-full h-full"
            >
                <div className="ml-auto bg-header border-r border-r-primary w-[60%] h-full relative">
                    <button className="absolute top-5 right-5" onClick={onOpenChange}>
                        <X className="w-6 text-white h-6" />
                    </button>
                    <ul className="flex flex-col gap-y-5 w-full h-full pt-16 pl-5 ">
                        {NavItems.map((item, idx) => (
                            <NavbarItem href={item.href} value={item.value} key={idx} />
                        ))}

                        <DropDown value="More" menuItems={SecondaryNav} />
                    </ul>
                </div>
            </div>
        </>
    );
};
