import { useDrag } from 'react-dnd';

const Card = ({textareaHandleOnDoubleClick, textareaHandleOnKeyDown, buttonHandleOnClick, id, text}:any) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "card",
        item: {id: id, text: text},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} id={`card${id}`} className="kanban" onDoubleClick={textareaHandleOnDoubleClick} style={{border: isDragging ? "5px soild pink" : "1px solid black"}}>
        <textarea 
            onKeyDown={textareaHandleOnKeyDown} 
            id={`textArea${id}`}
            disabled
        >{text}</textarea>
        <button id={`btn${id}`} className='showOff' onClick={buttonHandleOnClick}>확인</button>
    </div>
    )
}

export default Card;