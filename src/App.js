import logo from './logo.svg';
import './App.css';
import {HelloWorld} from "./components/HelloWorld";
import {Label} from "./components/Label";

function App({color}) {
    const BLUE = "blue"
    console.log(color, BLUE)
    return (
        <div className="App">
            <header className="App-header">
                <h1  style={{color}}>Title</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <HelloWorld color={BLUE}/>
                <Label color="red ">
                    <p>Введите текст</p>
                    <input/>
                </Label>
            </header>
        </div>
    );
}

export default App;
