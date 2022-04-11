import React from "react";
//import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { ShowHideTasks } from "./quizzer/ShowHideTasks";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
            <ShowHideTasks></ShowHideTasks>
            <hr></hr>
            <Question></Question>
        </div>
    );
}

export default App;
