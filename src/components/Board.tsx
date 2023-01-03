import { useDrop } from 'react-dnd';
import Card from './Card';


const Board = ({todos, type, textareaHandle, buttonHandleOnClick, moveCard}:any) => {
    const [, drop] = useDrop(() => ({
        accept: "card",
        drop: (item:any) => {
            let id = item.id;
            moveCard(type, id);
        },

    }));


    return (
        <div className="kanban-board" id={type} ref={drop}>
            <h4>{type == 'plan' ? '해야하는 일' : type == 'ing' ? '진행중인 일' : '종료된 일'}</h4>
            {
                todos.filter((todo:any) => todo.state == type).map((todos:any) =>
                    <Card 
                        textareaHandle={textareaHandle}
                        buttonHandleOnClick = {buttonHandleOnClick}
                        id={todos.id}
                        text={todos.text}
                        key={todos.id}
                    />
                )
            }
        </div>
    )
}

export default Board;