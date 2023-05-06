import {SettingsToggle} from "./SettingsToggle";

export const UseDebugValueExample = () => {
    return (
        <>
            <h2>useDebugValueExample, ReactDevTools</h2>
            <SettingsToggle label="Audio" initialValue={true}/>
            <SettingsToggle label="Video" initialValue={false}/>
        </>
    )
}