import { NavItems } from "@/constants";
import { NavbarItem } from "./navbar-item";
import { Menu } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
    return (
        <nav className="ml-auto">
            {/* Desktop nav */}
            <ul className="hidden items-center gap-8 md:flex">
                {NavItems.map((item) => (
                    <li key={item.value}>
                        <NavbarItem href={item.href} value={item.value} />
                    </li>
                ))}
            </ul>

            {/* Mobile nav */}
            <MobileNav />
        </nav>
    );
};
