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
import {PinInput} from "./components/PinInput";
import {PinInputParent} from "./components/PinInputParent";
import {WithLogRender} from "./components/WithLogRender";
import {UseCallbackExample} from "./components/UseCallbackExample";
import {UseContextExample} from "./components/useContextExample/UseContextExample";
import {UseReducerExample} from "./components/UseReducerExample/UseReducerExample";
import {UseDebugValueExample} from "./components/useDebugValueExample/UseDebugValueExample";
import {HooksFactoryExample} from "./components/hooksFactoryExample/HooksFactoryExample";
import {MouseCursorTracking} from "./components/MouseCursorTracking";
import {ComponentRerenderTracking} from "./components/CustomHooks/useWhatCausedRender/ComponentRerenderTracking";
import {UseDebounceVsUseThrottle} from "./components/CustomHooks/useDebounceVsUseThrottle/UseDebounceVsUseThrottle";
import {UseLocalStorageExample} from "./components/CustomHooks/useLocalStorage/UseLocalStorageExample";
import {UseWindowSizeExample} from "./components/CustomHooks/useWindowSize/UseWindowSizeExample";

const content = {
    chapter_1: {name: 'ClicksForm', component: ClicksForm},
    chapter_2: {name: 'ExampleForm', component: ExampleForm},
    chapter_3: {name: 'ClicksCounterOnCustomHook', component: ClicksCounterOnCustomHook},
    chapter_4: {name: 'Calculator', component: Calculator},
    chapter_5: {name: 'CounterWithSideEffect', component: CounterWithSideEffect},
    chapter_6: {name: 'MovingDiv', component: MovingDiv},
    chapter_7: {name: 'UseRefExample', component: UseRefExample},
    chapter_8: {name: 'MemoizedCallback', component: MemoizedCallback},
    chapter_9: {name: 'PinInput', component: PinInputParent},
    chapter_10: {name: 'WithLogRender', component: WithLogRender},
    chapter_11: {name: 'UseCallbackExample', component: UseCallbackExample},
    chapter_13: {name: 'UseContextExample', component: UseContextExample},
    chapter_14: {name: 'UseReducerExample', component: UseReducerExample},
    chapter_15: {name: 'UseDebugValueExample', component: UseDebugValueExample},
    chapter_16: {name: 'HooksFactoryExample', component: HooksFactoryExample},
    chapter_17: {name: 'MouseCursorTracking', component: MouseCursorTracking},
    chapter_18: {name: 'ComponentRerenderTracking', component: ComponentRerenderTracking},
    chapter_19: {name: 'UseDebounceVsUseThrottle', component: UseDebounceVsUseThrottle},
    chapter_20: {name: 'UseLocalStorageExample', component: UseLocalStorageExample},
    chapter_21: {name: 'UseWindowSizeExample', component: UseWindowSizeExample},
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
