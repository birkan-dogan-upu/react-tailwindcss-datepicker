/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        fontFamily: {
            codec: ["Codec Pro Regular"],
            codecMedium: ["Codec Pro Medium"]
        },
        extend: {
            screens: {
                xs: { min: "0px", max: "575px" },
                sm: { min: "576px", max: "767px" },
                md: { min: "768px", max: "1023px" },
                lg: { min: "1024px", max: "1339px" },
                tx: { min: "576px" },
                tx2: { min: "768px" },
                xl: { min: "1024px" }
            },
            // screens: {
            //   xs: "0px",
            //   tx3: "640px",
            //   tx2: "768px",
            //   lg: "1024px",
            //   xl: "1280px",
            //   "2xl": "1536px",
            // },

            dropShadow: {
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
                "4xl": ["0 45px 45px rgba(0, 0, 0, 0.25)", "0 45px 45px rgba(0, 0, 0, 0.25)"]
            },

            boxShadow: {
                xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                tx3: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
                tx2: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
                lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
                xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
                "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
                "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
                "ring-machine": "0px 0px 0px 4px rgba(158, 119, 237, 0.24)",
                "ring-gray": "0px 0px 0px 4px rgba(152, 162, 179, 0.14)",
                "ring-error": "0px 0px 0px 4px rgba(240, 68, 56, 0.24)",
                "ring-person": "0px 0px 0px 4px rgba(21, 183, 158, 0.24)",
                "ring-product": "0px 0px 0px 4px rgba(247, 144, 9, 0.24)",
                "ring-embedded": "0px 0px 0px 4px rgba(78, 91, 166, 0.24)"
            },

            colors: {
                main: "#6941C6",
                borderPrimary: "#D0D5DD",

                primary: {
                    25: "#FCFAFF",
                    50: "#F9F5FF",
                    100: "#F4EBFF",
                    200: "#E9D7FE",
                    300: "#D6BBFB",
                    400: "#B692F6",
                    500: "#9E77ED",
                    600: "#7F56D9",
                    700: "#6941C6",
                    800: "#53389E",
                    900: "#42307D",
                    950: "#2C1C5F"
                },

                secondary: {
                    25: "#FCFCFD",
                    50: "#F9FAFB",
                    75: "#E4E7EC",
                    100: "#F2F4F7",
                    200: "#EAECF0",
                    300: "#D0D5DD",
                    400: "#98A2B3",
                    500: "#667085",
                    600: "#475467",
                    700: "#344054",
                    800: "#1D2939",
                    900: "#101828",
                    950: "#0C111D"
                },
                darkBluish: {
                    25: "#FAFAFA",
                    50: "#F5F5F6",
                    100: "#F0F1F1",
                    200: "#ECECED",
                    300: "#CECFD2",
                    400: "#94969C",
                    500: "#85888E",
                    600: "#61646C",
                    700: "#333741",
                    800: "#1F242F",
                    900: "#161B26",
                    950: "#0C111D"
                },
                darkTrue: {
                    25: "#FCFCFC",
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#E5E5E5",
                    300: "#D6D6D6",
                    400: "#A3A3A3",
                    500: "#737373",
                    600: "#525252",
                    700: "#424242",
                    800: "#292929",
                    900: "#141414",
                    950: "#0F0F0F"
                },
                teal: {
                    25: "#F6FEFC",
                    50: "#F0FDF9",
                    100: "#CCFBEF",
                    200: "#99F6E0",
                    300: "#5FE9D0",
                    400: "#2ED3B7",
                    500: "#15B79E",
                    600: "#0E9384",
                    700: "#107569",
                    800: "#125D56",
                    900: "#134E48",
                    950: "#0A2926"
                },
                warning: {
                    25: "#FFFCF5",
                    50: "#FFFAEB",
                    100: "#FEF0C7",
                    200: "#FEDF89",
                    300: "#FEC84B",
                    400: "#FDB022",
                    500: "#F79009",
                    600: "#DC6803",
                    700: "#B54708",
                    800: "#93370D",
                    900: "#7A2E0E",
                    950: "#4E1D09"
                },
                error: {
                    25: "#FFFBFA",
                    50: "#FEF3F2",
                    100: "#FEE4E2",
                    200: "#FECDCA",
                    300: "#FDA29B",
                    400: "#F97066",
                    500: "#F04438",
                    600: "#D92D20",
                    700: "#B42318",
                    800: "#912018",
                    900: "#7A271A",
                    950: "#55160C"
                },
                success: {
                    25: "#F6FEF9",
                    50: "#ECFDF3",
                    100: "#DCFAE6",
                    200: "#ABEFC6",
                    300: "#75E0A7",
                    400: "#47CD89",
                    500: "#17B26A",
                    600: "#079455",
                    700: "#067647",
                    800: "#085D3A",
                    900: "#074D31",
                    950: "#053321"
                },
                yellow: {
                    25: "#FEFDF0",
                    50: "#FEFBE8",
                    100: "#FEF7C3",
                    200: "#FEEE95",
                    300: "#FDE272",
                    400: "#FAC515",
                    500: "#EAAA08",
                    600: "#CA8504",
                    700: "#A15C07",
                    800: "#854A0E",
                    900: "#713B12",
                    950: "#542C0D"
                },
                grayBlue: {
                    25: "#FCFCFD",
                    50: "#F8F9FC",
                    100: "#EAECF5",
                    200: "#D5D9EB",
                    300: "#B3B8DB",
                    400: "#717BBC",
                    500: "#4E5BA6",
                    600: "#3E4784",
                    700: "#363F72",
                    800: "#293056",
                    900: "#101323",
                    950: "#0D0F1C"
                },
                blue: {
                    25: "#F5FAFF",
                    50: "#EFF8FF",
                    100: "#D1E9FF",
                    200: "#B2DDFF",
                    300: "#84CAFF",
                    400: "#53B1FD",
                    500: "#2E90FA",
                    600: "#1570EF",
                    700: "#175CD3",
                    800: "#1849A9",
                    900: "#194185",
                    950: "#102A56"
                },

                validate: {
                    success: "#12B76A",
                    error: "#D92D20",
                    warning: "#FAC515",
                    errorBorder: "#FDA29B"
                },

                status: {
                    green100: "#ECFDF3",
                    green200: "#039855",
                    red100: "#FEE4E2",
                    red200: "#B42318",
                    yellow100: "#FEFBE8",
                    yellow200: "#EAAA08",
                    blue100: "#D1E9FF",
                    blue200: "#175CD3",
                    purple100: "#F4EBFF",
                    purple200: "#6941C6",
                    gray100: "#EAECF0",
                    gray200: "#344054",
                    white100: "#FCFCFD",
                    white200: "#EAECF0"
                },

                grayDark: "#595959",

                red100: "#FEE4E2",
                red50: "#FEF3F2",
                red600: "#D92D20",
                blue50: "#F0F9FF",
                blue700: "#026AA2",
                success700: "#027A48"
            },
            fontSize: {
                xxs: [
                    "10px",
                    {
                        lineHeight: "16px"
                    }
                ],
                xs: [
                    "12px",
                    {
                        lineHeight: "18px"
                    }
                ],
                tx3: [
                    "14px",
                    {
                        lineHeight: "20px"
                    }
                ],
                tx2: [
                    "16px",
                    {
                        lineHeight: "24px"
                    }
                ],
                lg: [
                    "18px",
                    {
                        lineHeight: "28px"
                    }
                ],
                xl: [
                    "20px",
                    {
                        lineHeight: "30px"
                    }
                ],
                displayXs: [
                    "24px",
                    {
                        lineHeight: "32px"
                    }
                ],
                displaytx3: [
                    "30px",
                    {
                        lineHeight: "38px"
                    }
                ],
                displaytx2: [
                    "36px",
                    {
                        lineHeight: "44px"
                    }
                ],
                displayLg: [
                    "48px",
                    {
                        lineHeight: "60px"
                    }
                ],
                displayXl: [
                    "60px",
                    {
                        lineHeight: "72px"
                    }
                ],
                display2Xl: [
                    "72px",
                    {
                        lineHeight: "90px"
                    }
                ]
            }
        }
    },
    variants: {},
    /* eslint-disable @typescript-eslint/no-require-imports */
    plugins: [require("@tailwindcss/forms")]
    /* eslint-enable @typescript-eslint/no-require-imports */
};
