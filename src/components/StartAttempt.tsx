import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progression, setProgression] = useState<boolean>(false);
    const [value, setValue] = useState<number>(4);
    function startQuiz(): void {
        setProgression(true);
        setValue(value - 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={progression || value === 0}>
                Start Quiz
            </Button>
            <Button
                onClick={() => setProgression(false)}
                disabled={!progression}
            >
                Stop Quiz
            </Button>
            <br></br>
            <Button onClick={() => setValue(value + 1)} disabled={progression}>
                Mulligan
            </Button>
            <br></br>Attempts: {value}
        </div>
    );
}
