import { Container } from "@/components/container";
import { BreadCrumbs } from "@/components/breadcrumbs";
import { HeroMeta } from "./hero-meta";
import { HeroNav } from "./hero-nav";
import { ProductList } from "./product-list";

export const Hero = () => {
    return (
        <section className="mt-10">
            <Container className=" mx-auto">
                <div className="w-full ">
                    <h1 className="text-4xl md:text-5xl text-accent_1">
                        Best Website builders in the US
                    </h1>
                    <HeroMeta />
                    <HeroNav />
                    <BreadCrumbs />
                    <ProductList />
                </div>
            </Container>
        </section>
    );
};
