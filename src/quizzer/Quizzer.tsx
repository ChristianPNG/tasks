import React from "react";
import sketch from "./../../src/quizzer/quizTemplate2.jpg";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <img
                style={{ width: 800, height: 500 }}
                src={sketch}
                alt="error..."
            />
            <h4>Completed Features</h4>
            <ul style={{ textAlign: "left" }}>
                <li>Sketch</li>
            </ul>
        </div>
    );
}
