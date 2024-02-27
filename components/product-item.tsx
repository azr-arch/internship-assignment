import { CheckCircle2, Gem, Minus, Trophy } from "lucide-react";
import { StarRating } from "./star-rating";
import Image from "next/image";
import { Button } from "./ui/button";

export const ProductItem = ({ data }: { data: any }) => {
    return (
        <div className="px-8 py-5 flex lg:flex-row flex-col gap-y-4 items-start justify-around  max-w-[420px] lg:max-w-full lg:w-full  relative bg-white shadow-sm rounded-md">
            <Image
                src={"/product.png"}
                width={141}
                height={103}
                alt="product-image"
                className="my-auto"
            />

            {/* INfo */}
            <div className="flex flex-col items-start max-w-[490px] ">
                <p className="text-accent_2 mb-1 text-sm sm:text-base">
                    <strong>{data.title}</strong>
                    <span className="inline-flex">
                        <Minus className="w-4 h-3 " />
                    </span>

                    {data.info}
                </p>

                <strong className="text-accent_1 my-2 text-sm sm:text-base">Main highlights</strong>

                <p className="px-5 text-accent_2 text-sm sm:text-base">{data?.highlight}</p>
                {data?.highlightFeatures && (
                    <div className=" px-5 w-full">
                        <div className="w-full bg-highlight rounded-md space-y-3 py-2 px-5">
                            {data.highlightFeatures.map((item: any) => (
                                <div key={item.score} className="flex items-center gap-4">
                                    <span className="bg-white text-blue text-base rounded-sm p-1">
                                        {item.score}
                                    </span>
                                    <p className="text-accent_2">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {data?.features && (
                    <div className="w-full mt-4">
                        <p className="text-accent_1">Why we love it</p>
                        <ul className="space-y-1">
                            {data.features.map((item: any, idx: number) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <p className="text-accent_2">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Rating */}
            <div className="flex flex-row lg:flex-col h-full items-center gap-4 lg:gap-[72px]">
                <div className="min-w-[135px] lg:min-h-[118px] p-2 lg:p-0 lg:space-y-2 rounded-sm bg-rating flex lg:flex-col flex-row items-center justify-center gap-x-3 lg:gap-x-0">
                    <p className="text-2xl lg:text-3xl text-rating">{data?.rating}</p>
                    <p className="text-xs lg:text-sm text-rating">{data?.ratingValue}</p>
                    <StarRating rating={data.stars} />
                </div>

                <Button className="w-auto px-10 lg:px-0 lg:w-[232px] py-1.5 lg:h-12 rounded-md">
                    View
                </Button>
            </div>

            {/* Tag */}
            {data?.tag && (
                <span className="absolute right-0 sm:right-auto sm:-left-[5px] -top-[15px] z-20 bg-tag px-2 py-1 rounded-l-md sm:rounded-l-none sm:rounded-r-md text-sm text-white flex items-center gap-2">
                    {data.tag === "Best Choice" ? (
                        <Trophy className="w-4 h-4" />
                    ) : (
                        <Gem className="w-4 h-4" />
                    )}
                    {data.tag}
                </span>
            )}
            {/* List number */}

            <div className="hidden bg-white border border-primary sm:flex items-center justify-center w-[44px] h-[44px] rounded-full absolute top-8 -left-[22px]">
                <p className="text-list text-xl">{data.id}</p>
            </div>
        </div>
    );
};
