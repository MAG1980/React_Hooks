import './App.css';
import {ClicksForm} from "./components/ClicksForm";
import {ExampleForm} from "./components/ExampleForm";
import {ClicksCounterOnCustomHook} from "./components/ClicksCounterOnCustomHook"

function App({color}) {
    const BLUE = "blue"
    console.log(color, BLUE)
    return (
        <div className="App">
{/*            <header className="App-header">
                <h1  style={{color}}>Title</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <HelloWorld color={BLUE}/>
                <Label color="red ">
                    <p>Введите текст</p>
                    <input/>
                </Label>
            </header>*/}
            <ClicksForm/>
            <ExampleForm/>
            <ClicksCounterOnCustomHook/>
        </div>
    );
}

export default App;
