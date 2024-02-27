import Image from "next/image";
import { Button } from "./ui/button";

interface DealsItemProps {
    data: {
        id?: number;
        title?: string;
        discount?: string;
        currentPrice?: string;
        oldPrice?: string;
        info?: string;
    };
}

export const DealsItem = ({ data }: DealsItemProps) => {
    return (
        <div className="max-w-[333px] h-[425px] w-full p-5 flex flex-col gap-y-[63px] bg-white rounded-md shadow-sm">
            <Image
                src={"/product.png"}
                width={141}
                height={103}
                alt={data.title || ""}
                className="mx-auto"
            />

            <div className="flex flex-col items-start gap-2.5">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-rating bg-discount px-2 py-1 rounded-sm">
                        {data?.discount}
                    </span>

                    <span className="text-sm text-rating bg-discount px-2 py-1 rounded-sm">
                        Limited time
                    </span>
                </div>

                <div className="space-y-1.5 text-accent_2  ">
                    <p className=" font-bold">{data.title}</p>
                    <p className="text-sm">{data.info}</p>
                </div>

                <div className="flex items-center gap-2.5">
                    <span className="text-accent_3 text-xl">{data.currentPrice}</span>
                    <span className="text-accent_4 text-sm">{data.oldPrice}</span>
                    <span className="text-softRed text-sm">{`(${data.discount})`}</span>
                </div>

                <Button className="w-full h-[48px] rounded-md">View Deal</Button>
            </div>
        </div>
    );
};
