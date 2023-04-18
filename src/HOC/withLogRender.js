import {forwardRef} from "react";

export const withLogRender = (WrappedComponent) => {
    //Чтобы иметь возможность передавать ref через HOC (функцию-обёртку), HOC должен возвращать forwardRef
    return forwardRef(
        (props, ref) => {
            //Позволяет вывести название компонента, даже если он обёрнут в forwardRef
            const name = WrappedComponent.name ?? WrappedComponent.render?.name
            console.log(`render ${name}`)
            return <WrappedComponent ref={ref} {...props}/>
        }
    )
}
