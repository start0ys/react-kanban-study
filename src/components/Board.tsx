import { useDrop } from 'react-dnd';
import Card from './Card';


const Board = ({todos, type, textareaHandleOnDoubleClick, textareaHandleOnKeyDown, buttonHandleOnClick, moveCard}:any) => {
    const [, drop] = useDrop(() => ({
        accept: "card",
        drop: (item:any) => {
            let id = item.id;
            moveCard('ing', id);
        },

    }));

    let title = type == 'plan' ? '해야하는 일' : type == 'ing' ? '진행중인 일' : '종료된 일';

    return (
        <div className="kanban-board" id={type} ref={drop}>
            <h4>{title}</h4>
            {
                todos.filter((todo:any) => todo.state == type).map((todos:any) =>
                    <Card 
                        textareaHandleOnDoubleClick={textareaHandleOnDoubleClick} 
                        textareaHandleOnKeyDown = {textareaHandleOnKeyDown}
                        buttonHandleOnClick = {buttonHandleOnClick}
                        id={todos.id}
                        text={todos.text}
                    />
                )
            }
        </div>
    )
}

export default Board;