import { ChevronRight } from "lucide-react";
import Link from "next/link";

const crumbs = [
    {
        path: "",
        value: "Home",
    },
    {
        path: "",
        value: "Hosting for all",
    },
    {
        path: "",
        value: "Hosting",
    },
    {
        path: "",
        value: "Hosting6",
    },
    {
        path: "",
        value: "Hosting5",
    },
];
export const BreadCrumbs = () => {
    const baseStyle = "text-accent_3  text-xs sm:text-sm truncate";

    return (
        <div className="flex items-center mt-3 ">
            {crumbs.map((item, idx) => {
                if (idx === crumbs.length - 1) {
                    return (
                        <Link key={idx} href={"/"} title={item.value} className={baseStyle}>
                            {item.value}
                        </Link>
                    );
                }

                return (
                    <>
                        <Link key={idx} href={"/"} title={item.value} className={baseStyle}>
                            {item.value}
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-accent_3" />
                    </>
                );
            })}
        </div>
    );
};
