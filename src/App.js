import './App.css';
import {MasterDetail} from "./components/CompoundComponent/MasterDetail";
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
    UsingContext,
    UsingReactQuery,
    UsingSWR,
    WithLogRender
} from "./components/index"
import {Section} from "./components/CompoundComponent/Section";
import {Chapter} from "./components/CompoundComponent/Chapter";

function App({color}) {
    const BLUE = "blue"
    console.log(color, BLUE)
    return (
        <div className="App">
            <MasterDetail>
                <Section title="Basic hooks, useState">
                    <Chapter title="ClicksForm" component={ClicksForm}/>
                    <Chapter title="ExampleForm" component={ExampleForm}/>
                    {/*Чтобы передать props в компонент, пришлось обернут его в callback*/}
                    <Chapter title="ClicksCounterOnCustomHook"
                             component={() => ClicksCounterOnCustomHook({initValue: 50, delta: 7})}/>
                    <Chapter title="Calculator" component={Calculator}/>
                    <Section title="Example">
                        example
                    </Section>

                </Section>

                <Section title="Side effects, useEffect, useLayoutEffect">
                    <Chapter title="CounterWithSideEffect" component={CounterWithSideEffect}/>
                    <Chapter title="useLayoutEffect (MovingDiv)" component={MovingDiv}/>
                </Section>

                <Section title="Imperative code, useRef">
                    <Chapter title="UseRefExample" component={UseRefExample}/>
                    <Chapter title="MemoizedCallback" component={MemoizedCallback}/>
                    <Chapter title="PinInputParent" component={PinInputParent}/>
                    <Chapter title="HOC withLogRender" component={WithLogRender}/>
                </Section>

                <Section title="Advanced hooks and concepts">
                    <Chapter title="UseCallbackExample" component={UseCallbackExample}/>
                    <Chapter title="UseContextExample" component={UseContextExample}/>
                    <Chapter title="UseReducerExample" component={UseReducerExample}/>
                    <Chapter title="UseDebugValueExample" component={UseDebugValueExample}/>
                    <Chapter title="HooksFactoryExample" component={HooksFactoryExample}/>
                </Section>
                <Section title="Custom hooks collection">
                    <Chapter title="MouseCursorTracking" component={MouseCursorTracking}/>
                    <Chapter title="ComponentRerenderTracking" component={ComponentRerenderTracking}/>
                    <Chapter title="UseDebounceVsUseThrottle" component={UseDebounceVsUseThrottle}/>
                    <Chapter title="UseLocalStorageExample" component={UseLocalStorageExample}/>
                    <Chapter title="UseWindowSizeExample" component={UseWindowSizeExample}/>
                    <Chapter title="UseAsyncExample" component={UseAsyncExample}/>
                    <Chapter title="UsePreviousExample" component={UsePreviousExample}/>
                    <Chapter title="UseHistoryExample" component={UseHistoryExample}/>
                    <Chapter title="UseElementSizeExample" component={UseElementSizeExample}/>
                    <Chapter title="UseIntervalExample" component={UseIntervalExample}/>
                    <Chapter title="UseTimeoutExample" component={UseTimeoutExample}/>
                    <Chapter title="UseMountedRefExample" component={UseMountedRefExample}/>
                    <Chapter title="UseHoveredExample" component={UseHoveredExample}/>
                </Section>
                <Section title="Data fetching">
                    <Chapter title="Axios & useContext" component={UsingContext}/>
                    <Chapter title="Using SWR" component={UsingSWR}/>
                    <Chapter title="Using React Query" component={UsingReactQuery}/>
                </Section>
            </MasterDetail>
        </div>
    );
}

export default App;
