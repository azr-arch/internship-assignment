"use client";
import { useState } from "react";

export const useMobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenChange = () => {
        setIsOpen((prev) => !prev);
    };

    const onOpen = () => {
        setIsOpen(true);
    };

    return { isOpen, onOpenChange, onOpen };
};
