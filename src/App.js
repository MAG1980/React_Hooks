import './App.css';
import {ClicksForm} from "./components/ClicksForm";
import {ExampleForm} from "./components/ExampleForm";
import {ClicksCounterOnCustomHook} from "./components/ClicksCounterOnCustomHook"
import {Calculator} from "./components/Calculator";
import {CounterWithSideEffect} from "./components/CounterWithSideEffect";
import {MovingDiv} from "./components/MovingDiv";
import {UseRefExample} from "./components/useRefExample";
import {MemoizedCallback} from "./components/MemoizedCallback";
import {MasterDetail} from "./components/MasterDetail";

const content = {
    chapter_1:{name:'ClicksForm', component:ClicksForm},
    chapter_2:{name:'ExampleForm', component:ExampleForm},
    chapter_3:{name:'ClicksCounterOnCustomHook', component:ClicksCounterOnCustomHook},
    chapter_4:{name:'Calculator', component:Calculator},
    chapter_5:{name:'CounterWithSideEffect', component:CounterWithSideEffect},
    chapter_6:{name:'MovingDiv', component:MovingDiv},
    chapter_7:{name:'UseRefExample', component:UseRefExample},
    chapter_8:{name:'MemoizedCallback', component:MemoizedCallback},
}

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

            <MasterDetail content={content}/>
        </div>
    );
}

export default App;
