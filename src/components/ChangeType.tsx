import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const QuesMap: Record<QuestionType, QuestionType> = {
    short_answer_question: "multiple_choice_question",
    multiple_choice_question: "short_answer_question"
};

export function ChangeType(): JSX.Element {
    const [Question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    const [Message, setMessage] = useState<string>("Short Answer");
    function invertQues(): void {
        const newQues: QuestionType = QuesMap[Question];
        setQuestion(newQues);
        msg(newQues);
    }
    function msg(x: QuestionType): void {
        if (x === "short_answer_question") {
            setMessage("Short Answer");
        } else {
            setMessage("Multiple Choice");
        }
    }
    return (
        <div>
            <Button onClick={invertQues}>Change Type</Button>
            {Message}
        </div>
    );
}
