import { Navbar } from "./navbar/navbar";
import { Container } from "@/components/container";

import { Search } from "lucide-react";
export const Header = ({}) => {
    return (
        <header className="bg-header  h-16 w-full flex items-center justify-center">
            <Container>
                <div className="flex items-center bg-white p-2 rounded-md">
                    <Search className="w-5 h-5 text-list" />
                    <input type="text" className="bg-transparent" />
                </div>
                <Navbar />
            </Container>
        </header>
    );
};
