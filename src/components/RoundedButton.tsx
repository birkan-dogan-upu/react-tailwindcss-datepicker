import { useCallback, useContext } from "react";

import { BUTTON_COLOR, TEXT_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { ButtonProps } from "../types";

const RoundedButton = (props: ButtonProps) => {
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
            ? `w-full tracking-wide ${activeClass} transition-all duration-300 px-3 ${padding} uppercase rounded-lg focus:ring-1`
            : `${activeClass} transition-all duration-300 rounded-lg p-[0.45rem] focus:ring-1`;
        const buttonFocusColor =
            BUTTON_COLOR.focus[primaryColor as keyof typeof BUTTON_COLOR.focus];
        const disabledClass = disabled ? "line-through" : "";

        return `${defaultClass} ${buttonFocusColor} ${disabledClass}`;
    }, [disabled, padding, primaryColor, roundedFull, active]);

    return (
        <button
            type="button"
            className={`${getClassName()} px-[16px] rounded-lg text-secondary-700`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default RoundedButton;
