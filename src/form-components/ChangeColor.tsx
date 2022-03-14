import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "pink",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [colorz, setColor] = useState<string>(COLORS[0]);
    function updateColors(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    style={{ backgroundColor: color }}
                    key={color}
                    inline
                    type="radio"
                    onChange={updateColors}
                    id="colorchanger"
                    value={color}
                    label={color}
                    checked={colorz === color}
                />
            ))}
            <br></br>
            <div>
                You have choosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colorz }}
                >
                    {colorz}
                </span>
            </div>
        </div>
    );
}
