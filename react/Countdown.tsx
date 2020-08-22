import React, { useState } from "react";
import { TimeSplit } from "./typings/global";
import { tick } from "./utils/time";
import { useCssHandles } from "vtex.css-handles";

const DEFAULT_TARGET_DATE = new Date("2020-08-25").toISOString();
const CSS_HANDLES = ["container", "countdown", "title"];
interface CountdownProps {
    targetDate: string;
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
    targetDate = DEFAULT_TARGET_DATE
}) => {
    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    const handles = useCssHandles(CSS_HANDLES);

    tick(targetDate, setTime);

    return (
        <div className={`${handles.container} t-heading-2 fw3 w-100 pt7 pb6 c-muted-1 db tc`}>
            <div className={`${handles.countdown} db tc`}>
                {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
            </div>
            </div>
    );
};

Countdown.schema = {
    title: "editor.countdown.title",
    description: "editor.countdown.description",
    type: "object",
    properties: {
        targetDate: {
            title: "Data final",
            description: "Data final utilizada no contador",
            type: "string",
            default: null
        }
    }
};

export default Countdown;
