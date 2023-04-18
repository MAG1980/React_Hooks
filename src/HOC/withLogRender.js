export const withLogRender = (WrappedComponent) => {
    return (props) => {
        // const name = WrappedComponent.name
        // console.log(`render ${name}`)
        return <WrappedComponent ${...props}/>
    }
}
