import React, {Component, Fragment} from 'react';
import {io} from "socket.io-client";
import {BASE} from "../App";

class Comet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
        this.ws = null
    }

    socketSetup = () => {
        // console.log(this.state.name)
        const ws = io(BASE)
        this.ws = ws
        ws.on("connect", () => {
            // either with send()
            // ws.send(`Hello!, I am ${this.state.name}`  );

            // or with emit() and custom event names
            // ws.emit("salutations", "Hello!", {"mr": `${ws.id} -> ${this.state.name}`}, Uint8Array.from([1, 2, 3, 4]));
        });

// handle the event sent with socket.send()
        ws.on("message", data => {
            console.log(data);
        });
        ws.on("greetings",  data => {
            console.log(data);
        })
//
// // handle the event sent with socket.emit()
//         ws.on("greetings", (elem1, elem2, elem3) => {
//             console.log(elem1, elem2, elem3);
//         });
    }

    componentDidMount() {
        this.socketSetup()
    }

    render() {
        return (
            <Fragment></Fragment>
        )
    }

    componentWillUnmount() {
        this.ws.close();
    }
}

export default Comet;
