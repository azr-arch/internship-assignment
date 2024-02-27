import { cn } from "@/lib/utils";

interface ButtonProps {
    className?: string;
    children?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
    const baseStyle =
        "bg-blue hover:bg-blue/70 transition-colors duration-200 ease-in-out text-white  flex items-center justify-center ";

    return <button className={cn(baseStyle, className)}>{children}</button>;
};
