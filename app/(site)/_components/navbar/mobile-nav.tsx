"use client";

import { useMobileNav } from "@/hooks/use-mobile-nav";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const MobileNav = () => {
    const { isOpen, onOpen, onOpenChange } = useMobileNav();

    console.log({ isOpen });

    return (
        <>
            <button onClick={onOpenChange} className="block md:hidden">
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Menu className="w-6 h-6 text-white" />
                )}
            </button>
        </>
    );
};
