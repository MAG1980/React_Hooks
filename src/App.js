import logo from './logo.svg';
import './App.css';
import {HelloWorld} from "./components/HelloWorld";
import {Label} from "./components/Label";

function App() {
    const BLUE = "blue"
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <HelloWorld color={BLUE}/>
                <Label color="red">
                    <p>Введите текст</p>
                    <input/>
                </Label>
            </header>
        </div>
    );
}

export default App;
