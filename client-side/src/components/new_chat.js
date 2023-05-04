import React from "react";
import axios from "axios";

import "../style/chat.css";

class Chat extends React.Component {
    state = {
        chat: [],
        msg: "",
    };
    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({ msg: e.target.value });
        //this.setState({ msg: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) });
    };

    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.handleSend();
        }
    };
    

    handleSend = () => {

        let userText = this.state.msg.charAt(0).toUpperCase() + this.state.msg.slice(1);
        if (userText !== '') {
            axios.post('http://127.0.0.1:5000/user', { 'msg': userText })
                .then(res => {
                    //this.state.msg.charAt(0).toUpperCase() + this.state.msg.slice(1).toLowerCase()
                    let ch = this.state.chat;
                    ch.push({ from: 'our', msag: userText });
                    ch.push({ from: 'cb', msag: res.data });
                    this.setState({ chat: ch, msg: '' });
                    console.log(this.state);


                })
                .catch(err => {
                    console.log(err);
                });

            this.forceUpdate();
        }
        let interval = window.setInterval(function () {
            var elem = document.getElementById('chattChat');
            elem.scrollTop = elem.scrollHeight;
            window.clearInterval(interval);
        }, 500)
    }
    render() {
        return (
            <>
                <div className='chatBody' >
                </div>
                <div className="contentChat">
                    <div id='chattChat' style={{ overflow: 'scroll', overflowX: 'hidden', height: '85vh' }}>
                        {
                            this.state.chat.map((msg) => {
                                if (msg.from === 'cb') {
                                    return <div class="botMsgChat" >{msg.msag} </div>
                                }
                                else {
                                    return <div class="userMsgChat" >{msg.msag}</div>
                                }
                            })
                        }
                    </div>
                    {/* <div style={{ height: '2vh' }}>
                        <input type='text' name='msg'
                            onChange={(e) => this.handleChange(e)}
                            class="inputBotChat form-control "
                            onKeyDown={this.handleKeyDown}
                            value={this.state.msg} />
                        <button onClick={() => this.handleSend()} style={{ paddingLeft: '25px', paddingRight: '25px' }} class="btn btn-primary">Send</button>
                    </div> */}
                    
                    <div
                            style={{
                                position: "fixed",
                                bottom: "0px",
                                left: "0px",
                                right: "0px",
                                backgroundColor: "#04162f",
                                width: "100%",
                                height: "70px",
                            }}
                        />
                    <div
                        style={{
                            alignSelf: "stretch",
                            marginLeft: "10%",
                            width: "80%",
                            height: '5vh',
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "8px",
                        }}
                    >
                        <img
                            style={{
                                position: "relative",
                                width: "20px",
                                height: "20px",
                                flexShrink: "0",
                                display: "none",
                            }}
                            alt=""
                            src="/attatchment01.svg"
                        />
                        <input
                            style={{
                                border: "none",
                                backgroundColor: "#eee",
                                fontFamily: "Inter",
                                fontSize: "16px",
                                flex: "1",
                                position: "relative",
                                color: "#1d1d1d",
                                textAlign: "left",
                            }}
                            onChange={(e) => this.handleChange(e)}
                            class="form-control "
                            onKeyDown={this.handleKeyDown}
                            value={this.state.msg}
                            name='msg'

                            placeholder="Write a message..."
                        />
                        <img
                            style={{
                                position: "relative",
                                width: "20px",
                                height: "20px",
                                flexShrink: "0",
                                display: "none",
                            }}
                            alt=""
                            src="/microphone01.svg"
                        />
                        <button
                            style={{
                                cursor: "pointer",
                                border: "none",
                                padding: "0",
                                backgroundColor: "transparent",
                                position: "relative",
                                width: "20px",
                                height: "20px",
                                flexShrink: "0",
                            }}
                            onClick={() => this.handleSend()}
                        >
                            <img
                                style={{
                                    position: "absolute",
                                    height: "66.67%",
                                    width: "83.33%",
                                    top: "16.28%",
                                    right: "8.27%",
                                    bottom: "17.06%",
                                    left: "8.4%",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    maxHeight: "100%",
                                }}
                                alt=""
                                src="/vector.svg"
                            />
                        </button>
                    </div>

                    {/* <div
                        style={{
                            position: "absolute",
                            bottom: "0px",
                            // left: "-1px",
                            width: "auto",
                            height: "88px",
                            textAlign: "left",
                            fontSize: "12px",
                            color: "#9ca3af",
                            fontFamily: "Inter",
                        }}
                        id="frame-scris"
                    >
                        <div
                            style={{
                                position: "fixed",
                                bottom: "0px",
                                left: "0px",
                                right: "0px",
                                backgroundColor: "#04162f",
                                width: "100%",
                                height: "60px",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "25px",
                                left: "103px",
                                backgroundColor: "#eee",
                                width: "auto",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: "4px",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "8px",
                                    border: "1px solid #e7e7e7",
                                    boxSizing: "border-box",
                                    width: "800px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "12px 16px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        gap: "8px",
                                    }}
                                >
                                    <img
                                        style={{
                                            position: "relative",
                                            width: "20px",
                                            height: "20px",
                                            flexShrink: "0",
                                            display: "none",
                                        }}
                                        alt=""
                                        src="/attatchment01.svg"
                                    />
                                    <input
                                        style={{
                                            border: "none",
                                            backgroundColor: "transparent",
                                            fontFamily: "Inter",
                                            fontSize: "16px",
                                            flex: "1",
                                            position: "relative",
                                            color: "#1d1d1d",
                                            textAlign: "left",
                                        }}
                                        onChange={(e) => this.handleChange(e)}
                                        class="form-control "
                                        onKeyDown={this.handleKeyDown}
                                        value={this.state.msg}
                                        name='msg'

                                        placeholder="Write a message..."
                                    />
                                    <img
                                        style={{
                                            position: "relative",
                                            width: "20px",
                                            height: "20px",
                                            flexShrink: "0",
                                            display: "none",
                                        }}
                                        alt=""
                                        src="/microphone01.svg"
                                    />
                                    <button
                                        style={{
                                            cursor: "pointer",
                                            border: "none",
                                            padding: "0",
                                            backgroundColor: "transparent",
                                            position: "relative",
                                            width: "20px",
                                            height: "20px",
                                            flexShrink: "0",
                                        }}
                                        onClick={() => this.handleSend()}
                                    >
                                        <img
                                            style={{
                                                position: "absolute",
                                                height: "66.67%",
                                                width: "83.33%",
                                                top: "16.28%",
                                                right: "8.27%",
                                                bottom: "17.06%",
                                                left: "8.4%",
                                                maxWidth: "100%",
                                                overflow: "hidden",
                                                maxHeight: "100%",
                                            }}
                                            alt=""
                                            src="/vector.svg"
                                        />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div>
            </>
        )
    }
}

export default Chat;