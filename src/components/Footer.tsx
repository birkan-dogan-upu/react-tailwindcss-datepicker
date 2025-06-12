import { useCallback, useContext } from "react";

import DatepickerContext from "../contexts/DatepickerContext";

// import PrimaryButton from "./PrimaryButton";
// import SecondaryButton from "./SecondaryButton";

import GoTodayButton from "./GoTodayButton";

import { dateIsSameOrAfter, dateIsSameOrBefore } from "libs/date";

const Footer = () => {
    // Contexts
    const {
        hideDatepicker,
        period,
        changeDatepickerValue,
        classNames,
        input,
        changeDayHover,
        changePeriod,
        asSingle
    } = useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        if (typeof classNames !== "undefined" && typeof classNames?.footer === "function") {
            return classNames.footer();
        }

        return "flex items-center justify-start pb-2.5 px-2";
    }, [classNames]);

    const clickDay = useCallback(
        (day: Date, after?: () => void) => {
            let newStart;
            let newEnd = null;

            function chosePeriod(start: Date, end: Date) {
                changeDatepickerValue(
                    {
                        startDate: start,
                        endDate: end
                    },
                    input
                );

                hideDatepicker();
            }

            if (period.start && period.end) {
                changeDayHover(null);

                changePeriod({
                    start: null,
                    end: null
                });
            }

            if ((!period.start && !period.end) || (period.start && period.end)) {
                if (!period.start && !period.end) {
                    changeDayHover(day);
                }

                newStart = day;

                if (asSingle) {
                    newEnd = day;
                    chosePeriod(day, day);
                }
            } else {
                if (period.start && !period.end) {
                    // start not null
                    // end null
                    const condition = dateIsSameOrAfter(day, period.start, "date");
                    newStart = condition ? period.start : day;
                    newEnd = condition ? day : period.start;
                } else {
                    // Start null
                    // End not null
                    const condition = dateIsSameOrBefore(day, period.end, "date");
                    newStart = condition ? day : period.start;
                    newEnd = condition ? period.end : day;
                }

                if (newStart && newEnd) {
                    chosePeriod(newStart, newEnd);
                }
            }

            if (!(newEnd && newStart)) {
                changePeriod({
                    start: newStart,
                    end: newEnd
                });
            }

            if (after) {
                setTimeout(() => {
                    after();
                }, 50);
            }
        },
        [
            asSingle,
            changeDatepickerValue,
            changeDayHover,
            changePeriod,
            hideDatepicker,
            period.end,
            period.start,
            input
        ]
    );

    return (
        <div className={getClassName()}>
            <div className="w-full tx2:w-auto flex items-center justify-center space-x-3">
                {/* <SecondaryButton
                    onClick={() => {
                        hideDatepicker();
                    }}
                >
                    <>{configs?.footer?.cancel ? configs.footer.cancel : "Cancel"}</>
                </SecondaryButton> */}

                {/* <PrimaryButton
                    onClick={() => {
                        if (period.start && period.end) {
                            changeDatepickerValue(
                                {
                                    startDate: period.start,
                                    endDate: period.end
                                },
                                input
                            );
                            hideDatepicker();
                        }
                    }}
                    disabled={!(period.start && period.end)}
                >
                    <>{configs?.footer?.apply ? configs.footer.apply : "Apply"}</>
                </PrimaryButton> */}

                <GoTodayButton
                    onClick={() => {
                        clickDay(new Date());
                    }}
                    roundedFull={true}
                >
                    Go to Today
                </GoTodayButton>
            </div>
        </div>
    );
};

export default Footer;
