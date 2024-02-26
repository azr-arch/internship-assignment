import { cn } from "@/lib/utils";

export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn("flex items-center justify-center max-w-[1050px] w-full px-4", className)}
        >
            {children}
        </div>
    );
};
