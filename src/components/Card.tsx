import { useDrag } from 'react-dnd';
import { Button } from '@material-ui/core';


const Card = ({textareaHandle, buttonHandleOnClick, id, text}:any) => {
    const [, drag] = useDrag(()=>({
        type: "card",
        item: {id: id, text: text},
    }));

    return (
        <div ref={drag} id={`card${id}`} className="kanban" onDoubleClick={textareaHandle.doubleClick}>
            <textarea 
                onKeyDown={textareaHandle.keyDown} 
                id={`textArea${id}`}
                disabled
                defaultValue={text}
            ></textarea>
            <Button variant="contained" color="primary" id={`btn${id}`} className='showOff' onClick={buttonHandleOnClick}>확인</Button>
        </div>
    )
}

export default Card;