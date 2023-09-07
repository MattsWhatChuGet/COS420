import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header style={ { background:"plum" }} className="App-header">
                Matthew Patterson
            </header>
            <img src="Images/MyCloseUp.jpg" alt="My Close Up."/>
            <h3>New Media & Computer Science</h3>
            <p>COS420 Software Engineering Class of Fall 2023</p>
            <Button onClick={() => console.log("Hello World")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
