import { Container } from "@/components/container";
import { DealsItem } from "@/components/deals-item";
import { dealsData } from "@/constants";

export const RelatedItems = () => {
    return (
        <div className="mt-[80px] w-full">
            <Container className="flex-col gap-9">
                <h2 className="text-accent_1 text-3xl">Related deals you might like for</h2>

                <div className="flex flex-col md:flex-row gap-6">
                    {dealsData.map((item) => (
                        <DealsItem data={item} key={item.id} />
                    ))}
                </div>
            </Container>
        </div>
    );
};
