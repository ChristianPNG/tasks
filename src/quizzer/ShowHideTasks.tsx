import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ChooseTeam } from "../bad-components/ChooseTeam";
import { ColoredBox } from "../bad-components/ColoredBox";
import { DoubleHalf } from "../bad-components/DoubleHalf";
import { ShoveBox } from "../bad-components/ShoveBox";
import { ChangeColor } from "../form-components/ChangeColor";
import { CheckAnswer } from "../form-components/CheckAnswer";
import { EditMode } from "../form-components/EditMode";
import { GiveAttempts } from "../form-components/GiveAttempts";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
import { ChangeType } from "../components/ChangeType";
import { Counter } from "../components/Counter";
import { CycleHoliday } from "../components/CycleHoliday";
import { RevealAnswer } from "../components/RevealAnswer";
import { StartAttempt } from "../components/StartAttempt";
import { TwoDice } from "../components/TwoDice";

export function ShowHideTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && (
                <div>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    <DoubleHalf></DoubleHalf>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                    <hr />
                </div>
            )}
            <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
        </div>
    );
}
