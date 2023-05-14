import {useTodoList} from '../../hooks/useTodoList';
import './index.css';

export function TodoCounter() {
    const {data} = useTodoList();
    //Получаем значение длины массива с задачами
    const todoCount = data?.length ?? 0;

    return (
        <div className="rq-todo-counter">
            Todos:
            <br/>
            <strong>{todoCount}</strong>
        </div>
    );
}