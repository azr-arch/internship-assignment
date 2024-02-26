import { SecondaryNav } from "@/constants";

export const HeroNav = () => {
    return (
        <nav className="hidden md:block w-full my-4">
            <ul className="flex items-center">
                {SecondaryNav.map((item, idx) => (
                    <li key={idx} className="px-4 py-2 text-accent_2 text-sm">
                        {item.value}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
