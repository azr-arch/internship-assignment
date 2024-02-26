import Link from "next/link";

interface NavbarItemProps {
    value?: string;
    href?: string;
}

export const NavbarItem = ({ href, value }: NavbarItemProps) => {
    // Use href value here
    return (
        <Link href={"/"}>
            <p className="text-navItem text-sm">{value}</p>
        </Link>
    );
};
