import React, { useState } from "react";
import { Button } from "react-bootstrap";

type QuizAnswer = 42 | "";

const AnsMap: Record<QuizAnswer, QuizAnswer> = {
    42: "",
    "": 42
};

export function RevealAnswer(): JSX.Element {
    function invertAns(): void {
        const newAns: QuizAnswer = AnsMap[answer];
        setAnswer(newAns);
    }
    const [answer, setAnswer] = useState<QuizAnswer>("");
    return (
        <div>
            <Button onClick={invertAns}>Reveal Answer</Button>
            {answer}
        </div>
    );
}
