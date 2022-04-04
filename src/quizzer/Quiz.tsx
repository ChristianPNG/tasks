import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

export function Quiz(): JSX.Element {
    const [QuestionCount, setQuestionCount] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);
    function updateVis() {
        setVisible(!visible);
    }
    return (
        <FormGroup controlId="Q1">
            <div style={{ textAlign: "left" }}>
                <h3>First Quiz</h3>
                Number of Questions: {QuestionCount}
                <br></br>
                An initial Quiz to see if everything works
                <br></br>
                <Button onClick={updateVis}>View</Button>
            </div>
            <div hidden={visible}>
                <h4>TotalPoints = </h4>
                <br></br>
                <h3>Question 1</h3>
                <h4> Points: 1, Type: </h4>
            </div>
        </FormGroup>
    );
}
