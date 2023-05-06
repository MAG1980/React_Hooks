import './App.css';
import {MasterDetail} from "./components/MasterDetail";
import {
    Calculator,
    ClicksCounterOnCustomHook,
    ClicksForm,
    ComponentRerenderTracking,
    CounterWithSideEffect,
    ExampleForm,
    HooksFactoryExample,
    MemoizedCallback,
    MouseCursorTracking,
    MovingDiv,
    PinInputParent,
    UseAsyncExample,
    UseCallbackExample,
    UseContextExample,
    UseDebounceVsUseThrottle,
    UseDebugValueExample,
    UseElementSizeExample,
    UseHistoryExample,
    UseHoveredExample,
    UseIntervalExample,
    UseLocalStorageExample,
    UseMountedRefExample,
    UsePreviousExample,
    UseReducerExample,
    UseRefExample,
    UseTimeoutExample,
    UseWindowSizeExample,
    WithLogRender,
} from "./components/index"


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
    chapter_22: {name: 'UseAsyncExample', component: UseAsyncExample},
    chapter_23: {name: 'UsePreviousExample', component: UsePreviousExample},
    chapter_24: {name: 'UseHistoryExample', component: UseHistoryExample},
    chapter_25: {name: 'UseElementSizeExample', component: UseElementSizeExample},
    chapter_26: {name: 'UseIntervalExample', component: UseIntervalExample},
    chapter_27: {name: 'UseTimeoutExample', component: UseTimeoutExample},
    chapter_28: {name: 'UseMountedRefExample', component: UseMountedRefExample},
    chapter_29: {name: 'UseHoveredExample', component: UseHoveredExample},
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
