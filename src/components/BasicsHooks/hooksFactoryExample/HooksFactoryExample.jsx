import {Field} from "./Field";
import {useLowerCaseState} from "./useLowerCaseState";
import {useUpperCaseState} from "./useUpperCaseState";
import {useTrimmedState} from "./useTrimmedState";

export const HooksFactoryExample = () => {
    const [lowerCase, setLowerCase] = useLowerCaseState('SOME VALUE')
    const [upperCase, setUpperCase] = useUpperCaseState('some value')
    const [trimmed, setTrimmed] = useTrimmedState('   Some Value   ')
    return (
        <>
            <h2>Hooks Factory</h2>
            <Field label="Lowercase only" value={lowerCase} setValue={setLowerCase}/>
            <Field label="Uppercase only" value={upperCase} setValue={setUpperCase}/>
            <Field label="No spaces here:" value={trimmed} setValue={setTrimmed}/>
        </>
    )
}