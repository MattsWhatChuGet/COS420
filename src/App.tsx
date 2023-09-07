import React from "react";
import "./App.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import myCloseUp from "./Images/MyCloseUp.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header style={{ background: "purple" }} className="App-header">
                <img
                    src={myCloseUp}
                    width="200"
                    height="225"
                    alt="My Close Up."
                />
                Matthew Patterson
            </header>
            <h3>New Media & Computer Science</h3>
            <p>COS420 Software Engineering Class of Fall 2023</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ul>
                <li>Family Time</li>
                <li>Board/Video Games</li>
                <li>Listening to music</li>
                <li>Philosophy</li>
                <li>Playing Guitar/Drums/Piano</li>
            </ul>
            <Container>
                <Row>
                    <Col>Test</Col>
                    <Col>
                        1
                        2
                        3
                        4
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
