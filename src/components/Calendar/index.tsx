import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import { DEFAULT_COLOR, START_WEEK } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import {
    allDaysInMonth,
    dateFormat,
    dateIsSameOrAfter,
    dateIsSameOrBefore,
    dateIsValid,
    endDayOfMonth,
    firstDayOfMonth,
    getNextDates,
    loadLanguageModule,
    nextDaysInWeek,
    previousDaysInWeek,
    weekDayStringToIndex
} from "../../libs/date";
import RoundedButton from "../RoundedButton";

import Days from "./Days";
import Months from "./Months";
import Week from "./Week";
import Years from "./Years";

import { ShortcutLeftArrow, ShortcutRightArrow } from "components/icons/ShortcutArrows";
import { DateType } from "types";

const NUMBER_YEARS_SHOW = 12;
const CALENDAR_SIZE = 42;

interface Props {
    date: Date;
    minDate?: DateType;
    maxDate?: DateType;
    onClickPrevious: () => void;
    onClickNext: () => void;
    changeMonth: (month: number) => void;
    changeYear: (year: number) => void;
}

const Calendar = (props: Props) => {
    // Props
    const { date, minDate, maxDate, onClickPrevious, onClickNext, changeMonth, changeYear } = props;

    // Contexts
    const {
        period,
        changePeriod,
        changeDayHover,
        changeDatepickerValue,
        hideDatepicker,
        asSingle,
        i18n,
        startWeekOn,
        input,
        monthSelect
    } = useContext(DatepickerContext);
    loadLanguageModule(i18n);

    // States
    const [showMonths, setShowMonths] = useState(monthSelect);
    const [showYears, setShowYears] = useState(false);
    const [year, setYear] = useState(date.getFullYear());

    // Functions
    const hideMonths = useCallback(() => {
        if (showMonths) setShowMonths(false);
    }, [showMonths]);

    // const hideYears = useCallback(() => {
    //     if (showYears) setShowYears(false);
    // }, [showYears]);

    const clickMonth = useCallback(
        (month: number) => {
            setTimeout(() => {
                changeMonth(month);
                // setShowMonths(!showMonths);
                setShowMonths(monthSelect || !showMonths);
            }, 250);

            if (monthSelect) {
                const start = new Date(year, month - 1, 1);
                const end = new Date(year, month, 0);

                changeDatepickerValue(
                    {
                        startDate: start,
                        endDate: end
                    },
                    input
                );

                hideDatepicker();
            }
        },
        [changeMonth, showMonths, monthSelect, year, input, changeDatepickerValue, hideDatepicker]
    );

    const clickYear = useCallback(
        (year: number) => {
            setTimeout(() => {
                changeYear(year);
                setShowYears(!showYears);
                setShowMonths(monthSelect || !showMonths);
            }, 250);
        },
        [changeYear, showYears, monthSelect, showMonths]
    );

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

    const clickPreviousDays = useCallback(
        (day: Date) => {
            clickDay(day, () => {
                onClickPrevious();
            });
        },
        [clickDay, onClickPrevious]
    );

    const clickNextDays = useCallback(
        (day: Date) => {
            clickDay(day, () => {
                onClickNext();
            });
        },
        [clickDay, onClickNext]
    );

    // UseEffects & UseLayoutEffect
    useEffect(() => {
        setYear(date.getFullYear());
    }, [date]);

    // Variables
    const calendarData = useMemo(() => {
        const firstDateCurrentMonth = firstDayOfMonth(date);
        const lastDateCurrentMonth = endDayOfMonth(date);

        const startWeekOnIndex = weekDayStringToIndex(startWeekOn || START_WEEK);

        const previous = previousDaysInWeek(firstDateCurrentMonth, startWeekOnIndex);
        const current = allDaysInMonth(date);
        const next = nextDaysInWeek(lastDateCurrentMonth, startWeekOnIndex);

        const remainingDaysLength =
            CALENDAR_SIZE - (previous.length + current.length + next.length);

        if (remainingDaysLength > 0) {
            const lastNextDate = next[next.length - 1] || current[current.length - 1];
            next.push(...getNextDates(lastNextDate, remainingDaysLength));
        }

        return {
            previous: previous,
            current: current,
            next: next
        };
    }, [date, startWeekOn]);

    const years = useMemo(() => {
        return {
            min: minDate && dateIsValid(minDate) ? minDate.getFullYear() : null,
            max: maxDate && dateIsValid(maxDate) ? maxDate.getFullYear() : null
        };
    }, [maxDate, minDate]);

    return (
        <div className="w-full tx2:w-[284px] tx2:min-w-[284px]">
            <div className="flex items-center space-x-1.5 dark:border-gray-700 rounded-md px-2 py-1.5">
                {!showMonths && !showYears && (
                    <div className="flex-none">
                        <RoundedButton roundedFull={true} onClick={onClickPrevious}>
                            {/* <ChevronLeftIcon className="h-5 w-5" /> */}
                            <ShortcutLeftArrow />
                        </RoundedButton>
                    </div>
                )}

                {showYears && (
                    <div className="flex-none">
                        <RoundedButton
                            roundedFull={true}
                            onClick={() => {
                                setYear(year - NUMBER_YEARS_SHOW);
                            }}
                        >
                            {/* <DoubleChevronLeftIcon className="h-5 w-5" /> */}
                            <ShortcutLeftArrow />
                        </RoundedButton>
                    </div>
                )}

                <div className="flex flex-1 items-center space-x-1.5">
                    <div className="w-1/2 flex justify-center items-center text-secondary-700 font-semibold text-base">
                        <RoundedButton
                            onClick={() => {
                                // setShowMonths(!showMonths);
                                // hideYears();

                                if (monthSelect) {
                                    setShowMonths(true);
                                    setShowYears(false);
                                    return;
                                }
                                if (!monthSelect) {
                                    setShowMonths(!showMonths);
                                    setShowYears(false);
                                    return;
                                }
                            }}
                        >
                            {dateFormat(date, "MMM", i18n)}
                        </RoundedButton>
                    </div>

                    <div className="w-1/2 flex justify-center items-center text-secondary-700 font-semibold text-base">
                        <RoundedButton
                            onClick={() => {
                                setShowYears(!showYears);
                                hideMonths();
                            }}
                        >
                            <>{date.getFullYear()}</>
                        </RoundedButton>
                    </div>
                </div>

                {showYears && (
                    <div className="flex-none">
                        <RoundedButton
                            roundedFull={true}
                            onClick={() => {
                                setYear(year + NUMBER_YEARS_SHOW);
                            }}
                        >
                            {/* <DoubleChevronRightIcon className="h-5 w-5" /> */}
                            <ShortcutRightArrow color={DEFAULT_COLOR} />
                        </RoundedButton>
                    </div>
                )}

                {!showMonths && !showYears && (
                    <div className="flex-none">
                        <RoundedButton roundedFull={true} onClick={onClickNext}>
                            {/* <ChevronRightIcon className="h-5 w-5" /> */}
                            <ShortcutRightArrow color={DEFAULT_COLOR} />
                        </RoundedButton>
                    </div>
                )}
            </div>

            <div className="px-0.5 tx3:px-2 mt-0.5 min-h-[285px]">
                {showMonths && (
                    <Months currentMonth={date.getMonth() + 1} clickMonth={clickMonth} />
                )}

                {showYears && (
                    <Years
                        year={year}
                        minYear={years.min}
                        maxYear={years.max}
                        currentYear={date.getFullYear()}
                        clickYear={clickYear}
                    />
                )}

                {!showMonths && !showYears && (
                    <>
                        <Week />

                        <Days
                            days={calendarData}
                            onClickPreviousDays={clickPreviousDays}
                            onClickDay={clickDay}
                            onClickNextDays={clickNextDays}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Calendar;
