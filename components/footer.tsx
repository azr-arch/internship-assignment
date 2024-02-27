import { NavbarItem } from "@/app/(site)/_components/navbar/navbar-item";
import { Container } from "./container";

export const Footer = () => {
    const categoriesItem = [
        {
            value: "Web Builder",
        },
        {
            value: "Hosting",
        },
        {
            value: "Data Center",
        },
        {
            value: "Robotic-Automation",
        },
    ];

    const contactItem = [
        {
            value: "Contact",
        },
        {
            value: "Privacy Policy",
        },
        {
            value: "Terms Of Service",
        },
        {
            value: "Categories",
        },
        {
            value: "About",
        },
    ];

    return (
        <footer className="w-full bg-header py-[53px]">
            <Container className="justify-around flex-wrap gap-10">
                <div>
                    <p className="uppercase text-white mb-5">Categories</p>
                    <ul className="flex flex-col items-start gap-3">
                        {categoriesItem.map((item, idx) => (
                            <NavbarItem value={item.value} href="/" key={idx} />
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="uppercase text-white mb-5">Contact</p>
                    <ul className="flex flex-col items-start gap-3">
                        {categoriesItem.map((item, idx) => (
                            <NavbarItem value={item.value} href="/" key={idx} />
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
};
