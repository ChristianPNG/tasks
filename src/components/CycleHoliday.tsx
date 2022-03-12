import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Holiday: 🎄"
    | "Holiday: ❤️"
    | "Holiday: 🍾"
    | "Holiday: 🐇"
    | "Holiday: 🦃";

const Alphabet: Record<Holiday, Holiday> = {
    "Holiday: 🎄": "Holiday: 🐇",
    "Holiday: 🐇": "Holiday: 🍾",
    "Holiday: 🍾": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: ❤️",
    "Holiday: ❤️": "Holiday: 🎄"
};
const Timeline: Record<Holiday, Holiday> = {
    "Holiday: 🎄": "Holiday: 🍾",
    "Holiday: 🍾": "Holiday: ❤️",
    "Holiday: ❤️": "Holiday: 🐇",
    "Holiday: 🐇": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄"
};

export function CycleHoliday(): JSX.Element {
    const [FavHoliday, setFavHoliday] = useState<Holiday>("Holiday: ❤️");
    function advanceAlpha(): void {
        const holiday: Holiday = Alphabet[FavHoliday];
        setFavHoliday(holiday);
    }
    function advanceTime(): void {
        const holiday: Holiday = Timeline[FavHoliday];
        setFavHoliday(holiday);
    }
    return (
        <div>
            <Button onClick={advanceAlpha}>Advance by Alphabet</Button>
            <Button onClick={advanceTime}>Advance by Year</Button>
            <br></br>
            {FavHoliday}
            <br></br>
            <p></p>
        </div>
    );
}
