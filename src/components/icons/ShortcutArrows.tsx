const ShortcutLeftArrow = ({ color = "#344054", hoverColor = "#344054" }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${color} hover:${hoverColor} transition-colors duration-200`}
        >
            <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const ShortcutRightArrow = ({ color = "#344054", hoverColor = "#344054" }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${color} hover:${hoverColor} transition-colors duration-200`}
        >
            <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { ShortcutLeftArrow, ShortcutRightArrow };
