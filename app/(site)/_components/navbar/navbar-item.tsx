import Link from "next/link";

interface NavbarItemProps {
    value?: string;
    href?: string;
}

export const NavbarItem = ({ href, value }: NavbarItemProps) => {
    // Use href value here
    return (
        <Link
            href={"/"}
            className="text-navItem select-none text-sm transition-colors duration-200 ease-in-out hover:text-navItem/50"
        >
            <p>{value}</p>
        </Link>
    );
};
