import {useState} from "react";

/**
 * Кнопка меню,
 * раскрывающая/сворачивающая указанный раздел
 * @param title
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const Section = ({title, children}) => {
    const [expanded, setExpanded] = useState(false);
    const expandButtonClass = `section-button ${expanded ? 'selected' : ''}`
    const titleStyle = {
        fontWeight: expanded ? 600 : 400
    }
    const toggleExpanded = () => {
        setExpanded((value) => !value)
    }
    return (
        <>
            <div className="section">
                <button className={expandButtonClass} onClick={toggleExpanded}>
                    {expanded ? '-' : '+'}
                </button>
                <span className={titleStyle}>{title}</span>
            </div>
            {expanded && <div className="section-content">{children}</div>}
        </>
    )
}
