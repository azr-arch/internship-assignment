import { Button } from "./ui/button";

export const SignUpBanner = () => {
    return (
        <div className="my-10 border-y border-y-primary px-2.5 py-8 flex items-center justify-between gap-3">
            <h2 className="text-xl sm:text-3xl text-accent_3 ">
                Sign up and get exclusive <br /> special deals
            </h2>

            <Button className="rounded-r-lg  sm:h-[52px]  px-3 text-sm sm:text-base py-2.5 sm:py-0 sm:px-5">
                Sign Up
            </Button>
        </div>
    );
};
