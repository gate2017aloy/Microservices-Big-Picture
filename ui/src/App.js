import Axios from 'axios';
import {useState} from "react";


import logo from './logo.svg';
import './App.css';
import Comet from "./Comets/Comet";

export const BASE = "http://localhost:4000"

const testHttp = () => {
  Axios.get(BASE).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

const DumbComponent = () => {
    return(
        <div>
            <Comet name={window.navigator.appVersion}/>
            Click the button to close me
        </div>
    )
}

function App() {
    testHttp()
    // console.log(window.navigator)
    const [opened, open] = useState(false);
    const openClose = () => {
        console.log("open: ", opened)
        if(opened)
            open(false)
        else
            open(true)
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {opened && <DumbComponent/>}
                </p>
                <a
                    className="App-link"
                    // href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button style={{size: "400px"}} onClick={openClose}>Learn React</button>
                </a>
            </header>
            {/*<Comet />*/}
        </div>
    );
}

export default App;
