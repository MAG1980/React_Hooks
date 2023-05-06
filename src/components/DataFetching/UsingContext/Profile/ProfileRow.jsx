export const ProfileRow = ({param, value}) => {
    return (
        <tr>
            <td className="param-cell">{param}</td>
            <td className="param-value">{value}</td>
        </tr>
    )
}
