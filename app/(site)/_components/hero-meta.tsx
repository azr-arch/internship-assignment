import { CheckCircle2, ChevronDown, Info, Minus } from "lucide-react";

export const HeroMeta = () => {
    return (
        <div className="border-y border-y-primary py-2 mt-4">
            <div className="text-accent_2  text-xs sm:text-sm flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                <p className="truncate" title="Last Updated">
                    Last Updated
                </p>

                <Minus className="w-4 h-3 mx-2" />
                <p className="truncate" title="February 22, 2020">
                    February 22, 2020
                </p>

                <Info className="w-4 h-4 ml-3 mr-2" />
                <p className="truncate" title=" Advertising Disclosure">
                    Advertising Disclosure
                </p>

                <div className="hidden md:flex ml-auto   items-center">
                    <p>Top Relevant</p>
                    <ChevronDown className="w-4 ml-1 h-4" />
                </div>
            </div>
        </div>
    );
};
