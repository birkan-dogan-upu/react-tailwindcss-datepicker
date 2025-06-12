import { useCallback, useContext } from "react";

import { BUTTON_COLOR, TEXT_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { ButtonProps } from "../types";

const GoTodayButton = (props: ButtonProps) => {
    const {
        children,
        onClick,
        disabled,
        roundedFull = true,
        padding = "py-[0.55rem]",
        active = false
    } = props;

    // Contexts
    const { primaryColor } = useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        const activeClass = active
            ? `font-semibold bg-gray-50 ${TEXT_COLOR["500"][primaryColor]}`
            : "";

        const defaultClass = !roundedFull
            ? `w-full tracking-wide ${activeClass} transition-all duration-300 px-3 ${padding} uppercase rounded-lg`
            : `${activeClass} transition-all duration-300 rounded-lg p-[0.45rem]`;

        const hoverColor = BUTTON_COLOR.hover?.[primaryColor as keyof typeof BUTTON_COLOR.hover];

        const disabledClass = disabled ? "line-through" : "";

        return `${defaultClass}  hover:${hoverColor} ${disabledClass}`;
    }, [disabled, padding, primaryColor, roundedFull, active]);

    return (
        <button
            type="button"
            className={`${getClassName()} px-[16px] rounded-lg ${TEXT_COLOR["500"][primaryColor]} whitespace-nowrap py-2.5 flex gap-1`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default GoTodayButton;
