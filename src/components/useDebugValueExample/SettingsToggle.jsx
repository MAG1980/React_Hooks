import {useToggle} from "../../hooks/useToggle";
import {ToggleButton} from "./ToggleButton";

export const SettingsToggle = ({label, initialValue}) => {
    const [isEnabled, toggleEnabled] = useToggle()
    const text = `${label} ${isEnabled ? "disabled" : "enabled"}`
    return (
        <div style={{margin: 10}}>
            <ToggleButton toggled={isEnabled} handleToggle={toggleEnabled}/>
            <span style={{marginLeft: 10}}>{text}</span>
        </div>
    )
}