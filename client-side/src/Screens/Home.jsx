import React from "react";
import Header from "../components/header.js";
import Message from "../components/Message.js";
import "../App.css";

export default function HomeScreen() {

    return (
        <>
            <div className="App">
                {/* <Header /> */}
                <Message />
            </div>
        </>
    );
  }
