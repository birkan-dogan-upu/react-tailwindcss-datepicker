import { forwardRef, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Arrow = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            className="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] bg-white"
        />
    );
});

Arrow.displayName = "Arrow";

export default Arrow;
