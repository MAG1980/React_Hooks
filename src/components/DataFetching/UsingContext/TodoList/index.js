import './index.css';
import {useAppContext} from "../hooks/useAppContext";

function TodoRow({number, data}) {
    const {title, completed} = data;
    return (
        <tr>
            <td>{number}</td>
            <td>{title}</td>
            <td>{completed && '\u{2705}'}</td>
        </tr>
    );
}

export function TodoList() {
    // const {loading, data} = useTodoListContext();
    const {loading, todoList} = useAppContext();
    // const todos = loading ? [] : data;
    const todos = loading ? [] : todoList;

    return (
        <div className="todo-list">
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo, index) => (
                    <TodoRow key={todo.id} number={index + 1} data={todo}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}
