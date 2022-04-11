import React from "react";
import { FormGroup } from "react-bootstrap";
import sketch from "./../../src/quizzer/quizTemplate2.jpg";
import { Quiz } from "./Quiz";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <hr></hr>
            <Quiz></Quiz>
            <hr></hr>
            <img
                style={{ width: 800, height: 500 }}
                src={sketch}
                alt="error..."
            />
            <hr></hr>
            <h4>Completed Features</h4>
            <ul style={{ textAlign: "left" }}>
                <li>Sketch</li>
            </ul>
        </div>
    );
}
