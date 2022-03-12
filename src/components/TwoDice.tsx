import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
type Message = string | null;

export function TwoDice(): JSX.Element {
    const [message, setMessage] = useState<Message>(null);
    const [leftValue, setLeft] = useState<number>(0);
    const [rightValue, setRight] = useState<number>(1);
    function SnakeEyesL(): void {
        const num: number = d6();
        setLeft(num);
        if (num === 1 && rightValue === 1) {
            setMessage("Lose");
        } else if (rightValue === num) {
            setMessage("Win");
        } else {
            setMessage(null);
        }
    }
    function SnakeEyesR(): void {
        const num: number = d6();
        setRight(num);
        if (num === 1 && leftValue === 1) {
            setMessage("Lose");
        } else if (leftValue === num) {
            setMessage("Win");
        } else {
            setMessage(null);
        }
    }
    return (
        <div>
            <span data-testid="left-die">
                <Button onClick={SnakeEyesL}>Roll Left</Button>
                {leftValue}
            </span>
            <span data-testid="right-die">
                <Button onClick={SnakeEyesR}>Roll Right</Button>
                {rightValue}
            </span>
            <br></br>
            {message}
        </div>
    );
}
