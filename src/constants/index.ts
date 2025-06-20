import { ColorKeys, Colors, DateLookingType, WeekStringType } from "../types";

export const COLORS = [
    "blue",
    "orange",
    "yellow",
    "red",
    "purple",
    "amber",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "indigo",
    "violet",
    "fuchsia",
    "pink",
    "rose"
] as const;

export const DEFAULT_COLOR: ColorKeys = "blue";

export const DEFAULT_SEPARATOR = "~";

export const LANGUAGE = "en";

export const DATE_FORMAT = "YYYY-MM-DD";

export const START_WEEK: WeekStringType = "sun";

export const DATE_LOOKING_OPTIONS = ["forward", "backward", "middle"] as const;

export const DEFAULT_DATE_LOOKING: DateLookingType = "forward";

export const DAYS = [0, 1, 2, 3, 4, 5, 6] as const;

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Beware, these maps of colors cannot be replaced with functions using string interpolation such as `bg-${color}-100`
// as described in Tailwind documentation https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export const BG_COLOR: Colors = {
    100: {
        blue: "bg-blue-100",
        orange: "bg-orange-100",
        yellow: "bg-yellow-100",
        red: "bg-red-100",
        purple: "bg-primary-100",
        amber: "bg-[#fef3c7]",
        lime: "bg-lime-100",
        green: "bg-green-100",
        emerald: "bg-[#d1fae5]",
        teal: "bg-teal-100",
        cyan: "bg-cyan-100",
        sky: "bg-sky-100",
        indigo: "bg-indigo-100",
        violet: "bg-violet-100",
        fuchsia: "bg-fuchsia-100",
        pink: "bg-pink-100",
        rose: "bg-rose-100"
    },
    200: {
        blue: "bg-blue-200",
        orange: "bg-orange-200",
        yellow: "bg-yellow-200",
        red: "bg-red-200",
        purple: "bg-primary-200",
        amber: "bg-[#fde68a]",
        lime: "bg-lime-200",
        green: "bg-green-200",
        emerald: "bg-[#a7f3d0]",
        teal: "bg-teal-200",
        cyan: "bg-cyan-200",
        sky: "bg-sky-200",
        indigo: "bg-indigo-200",
        violet: "bg-violet-200",
        fuchsia: "bg-fuchsia-200",
        pink: "bg-pink-200",
        rose: "bg-rose-200"
    },
    500: {
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
        purple: "bg-primary-600",
        amber: "bg-[#b54707]",
        lime: "bg-lime-500",
        green: "bg-green-500",
        emerald: "bg-[#107569]",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        indigo: "bg-indigo-500",
        violet: "bg-violet-500",
        fuchsia: "bg-fuchsia-500",
        pink: "bg-pink-500",
        rose: "bg-rose-500"
    },
    hover: {
        blue: "hover:bg-blue-600",
        orange: "hover:bg-orange-600",
        yellow: "hover:bg-yellow-600",
        red: "hover:bg-red-600",
        purple: "hover:bg-primary-600",
        amber: "hover:bg-[#93370d]",
        lime: "hover:bg-lime-600",
        green: "hover:bg-green-600",
        emerald: "hover:bg-[#0e6259]",
        teal: "hover:bg-teal-600",
        cyan: "hover:bg-cyan-600",
        sky: "hover:bg-sky-600",
        indigo: "hover:bg-indigo-600",
        violet: "hover:bg-violet-600",
        fuchsia: "hover:bg-fuchsia-600",
        pink: "hover:bg-pink-600",
        rose: "hover:bg-rose-600"
    }
};

export const TEXT_COLOR: Colors = {
    500: {
        blue: "text-blue-500",
        orange: "text-orange-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
        purple: "text-primary-500",
        amber: "text-[#b54707]",
        lime: "text-lime-500",
        green: "text-green-500",
        emerald: "text-[#107569]",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        sky: "text-sky-500",
        indigo: "text-indigo-500",
        violet: "text-violet-500",
        fuchsia: "text-fuchsia-500",
        pink: "text-pink-500",
        rose: "text-rose-500"
    },
    600: {
        blue: "text-blue-600 dark:text-blue-400 dark:hover:text-blue-400",
        orange: "text-orange-600 dark:text-orange-400 dark:hover:text-orange-400",
        yellow: "text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-400",
        red: "text-red-600 dark:text-red-400 dark:hover:text-red-400",
        purple: "text-primary-600 dark:text-primary-400 dark:hover:text-primary-400",
        amber: "text-[#93370d] dark:text-amber-400 dark:hover:text-amber-400",
        lime: "text-lime-600 dark:text-lime-400 dark:hover:text-lime-400",
        green: "text-green-600 dark:text-green-400 dark:hover:text-green-400",
        emerald: "text-[#0e6259] dark:text-emerald-400 dark:hover:text-emerald-400",
        teal: "text-teal-600 dark:text-teal-400 dark:hover:text-teal-400",
        cyan: "text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-400",
        sky: "text-sky-600 dark:text-sky-400 dark:hover:text-sky-400",
        indigo: "text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-400",
        violet: "text-violet-600 dark:text-violet-400 dark:hover:text-violet-400",
        fuchsia: "text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-400",
        pink: "text-pink-600 dark:text-pink-400 dark:hover:text-pink-400",
        rose: "text-rose-600 dark:text-rose-400 dark:hover:text-rose-400"
    },
    hover: {
        blue: "hover:text-blue-700",
        orange: "hover:text-orange-700",
        yellow: "hover:text-yellow-700",
        red: "hover:text-red-700",
        purple: "hover:text-primary-700",
        amber: "hover:text-amber-700",
        lime: "hover:text-lime-700",
        green: "hover:text-green-700",
        emerald: "hover:text-emerald-700",
        teal: "hover:text-teal-700",
        cyan: "hover:text-cyan-700",
        sky: "hover:text-sky-700",
        indigo: "hover:text-indigo-700",
        violet: "hover:text-violet-700",
        fuchsia: "hover:text-fuchsia-700",
        pink: "hover:text-pink-700",
        rose: "hover:text-rose-700"
    }
};

export const BORDER_COLOR: Colors = {
    500: {
        blue: "border-blue-500",
        orange: "border-orange-500",
        yellow: "border-yellow-500",
        red: "border-red-500",
        purple: "border-primary-500",
        amber: "border-[#b54707]",
        lime: "border-lime-500",
        green: "border-green-500",
        emerald: "border-[#107569]",
        teal: "border-teal-500",
        cyan: "border-cyan-500",
        sky: "border-sky-500",
        indigo: "border-indigo-500",
        violet: "border-violet-500",
        fuchsia: "border-fuchsia-500",
        pink: "border-pink-500",
        rose: "border-rose-500"
    },
    focus: {
        blue: "focus:border-blue-500",
        orange: "focus:border-orange-500",
        yellow: "focus:border-yellow-500",
        red: "focus:border-red-500",
        purple: "focus:border-primary-500",
        amber: "focus:border-[#b54707]",
        lime: "focus:border-lime-500",
        green: "focus:border-green-500",
        emerald: "focus:border-[#107569]",
        teal: "focus:border-teal-500",
        cyan: "focus:border-cyan-500",
        sky: "focus:border-sky-500",
        indigo: "focus:border-indigo-500",
        violet: "focus:border-violet-500",
        fuchsia: "focus:border-fuchsia-500",
        pink: "focus:border-pink-500",
        rose: "focus:border-rose-500"
    }
};

export const RING_COLOR: Colors = {
    focus: {
        blue: "focus:ring-blue-500",
        orange: "focus:ring-orange-500",
        yellow: "focus:ring-yellow-500",
        red: "focus:ring-red-500",
        purple: "focus:ring-primary-500",
        amber: "focus:ring-[#b54707]",
        lime: "focus:ring-lime-500",
        green: "focus:ring-green-500",
        emerald: "focus:ring-[#107569]",
        teal: "focus:ring-teal-500",
        cyan: "focus:ring-cyan-500",
        sky: "focus:ring-sky-500",
        indigo: "focus:ring-indigo-500",
        violet: "focus:ring-violet-500",
        fuchsia: "focus:ring-fuchsia-500",
        pink: "focus:ring-pink-500",
        rose: "focus:ring-rose-500"
    },
    "second-focus": {
        blue: "focus:ring-blue-500/20",
        orange: "focus:ring-orange-500/20",
        yellow: "focus:ring-yellow-500/20",
        red: "focus:ring-red-500/20",
        purple: "focus:ring-primary-500/20",
        amber: "focus:ring-[#b54707]/20",
        lime: "focus:ring-lime-500/20",
        green: "focus:ring-green-500/20",
        emerald: "focus:ring-[#107569]/20",
        teal: "focus:ring-teal-500/20",
        cyan: "focus:ring-cyan-500/20",
        sky: "focus:ring-sky-500/20",
        indigo: "focus:ring-indigo-500/20",
        violet: "focus:ring-violet-500/20",
        fuchsia: "focus:ring-fuchsia-500/20",
        pink: "focus:ring-pink-500/20",
        rose: "focus:ring-rose-500/20"
    }
};

export const BUTTON_COLOR: Colors = {
    focus: {
        blue: "focus:ring-blue-500/50 focus:bg-blue-100/50",
        orange: "focus:ring-orange-500/50 focus:bg-orange-100/50",
        yellow: "focus:ring-yellow-500/50 focus:bg-yellow-100/50",
        red: "focus:ring-red-500/50 focus:bg-red-100/50",
        purple: "focus:ring-primary-500/50 focus:bg-primary-100/50",
        amber: "focus:ring-[#b54707]/50 focus:bg-[#fef3c7]/50",
        lime: "focus:ring-lime-500/50 focus:bg-lime-100/50",
        green: "focus:ring-green-500/50 focus:bg-green-100/50",
        emerald: "focus:ring-[#107569]/50 focus:bg-[#d1fae5]/50",
        teal: "focus:ring-teal-500/50 focus:bg-teal-100/50",
        cyan: "focus:ring-cyan-500/50 focus:bg-cyan-100/50",
        sky: "focus:ring-sky-500/50 focus:bg-sky-100/50",
        indigo: "focus:ring-indigo-500/50 focus:bg-indigo-100/50",
        violet: "focus:ring-violet-500/50 focus:bg-violet-100/50",
        fuchsia: "focus:ring-fuchsia-500/50 focus:bg-fuchsia-100/50",
        pink: "focus:ring-pink-500/50 focus:bg-pink-100/50",
        rose: "focus:ring-rose-500/50 focus:bg-rose-100/50"
    },
    hover: {
        blue: "hover:ring-blue-500/50 hover:bg-blue-100/50 hover:text-blue-500",
        orange: "hover:ring-orange-500/50 hover:bg-orange-100/50 hover:text-orange-500",
        yellow: "hover:ring-yellow-500/50 hover:bg-yellow-100/50",
        red: "hover:ring-red-500/50 hover:bg-red-100/50",
        purple: "hover:border-primary-500 hover:bg-primary-100/50 hover:text-primary-800",
        amber: "hover:ring-[#b54707]/50 hover:bg-[#fef3c7]/50 hover:text-[#7c2d12]",
        lime: "hover:ring-lime-500/50 hover:bg-lime-100/50",
        green: "hover:ring-green-500/50 hover:bg-green-100/50",
        emerald: "hover:ring-[#107569]/50 hover:bg-[#d1fae5]/50 hover:text-[#134E48]",
        teal: "hover:ring-teal-500/50 hover:bg-teal-100/50",
        cyan: "hover:ring-cyan-500/50 hover:bg-cyan-100/50",
        sky: "hover:ring-sky-500/50 hover:bg-sky-100/50",
        indigo: "hover:ring-indigo-500/50 hover:bg-indigo-100/50",
        violet: "hover:ring-violet-500/50 hover:bg-violet-100/50",
        fuchsia: "hover:ring-fuchsia-500/50 hover:bg-fuchsia-100/50",
        pink: "hover:ring-pink-500/50 hover:bg-pink-100/50",
        rose: "hover:ring-rose-500/50 hover:bg-rose-100/50"
    }
};
