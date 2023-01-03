import { useState } from "react";
import { useDrop } from 'react-dnd';
import Card from './Card';
import Board from './Board';
import $ from 'jquery';

const Kanban = () => {
    const [todos,setTodos] = useState([{}]);

    const textareaHandleOnKeyDown  = (e:any) => {
        const targetEl = e.target;
        targetEl.style.height = '1px';
        targetEl.style.height = `${12 + targetEl.scrollHeight}px`;
    };

    const textareaHandleOnDoubleClick  = (e:any) => {
        const targetNum = e.target.id.substring(8);
        $(`#textArea${targetNum}`).prop('disabled', false); 
        $(`#btn${targetNum}`).removeClass('showOff').addClass('showOn');
    };

    const buttonHandleOnClick = (e:any) => {
        const targetNum = e.target.id.substring(3);
        $(`#textArea${targetNum}`).prop('disabled', true); 
        $(`#btn${targetNum}`).removeClass('showOn').addClass('showOff');
        changeText(targetNum, $(`#textArea${targetNum}`).val());
    }
    
    const changeText = (id:string, text:any) => {
        setTodos(todos.map((todo:any) => todo.id === id ?
                {
                    ...todo,
                    text: text
                }
                : todo
            ));
    }

    const addCard = () => {
        setTodos((todos:any):any => [
            ...todos, 
            {
                id:todos.length,
                text:'',
                state:'plan'
            }
        ]);
        console.log(todos);
    }

    

    const moveCard = (type:string, id:string) => {
        console.log(id);
        setTodos(todos.map((todo:any) => todo.id === id ?
                {
                    ...todo,
                    state:type
                }
                : todo
            ));
    }


    return (
        <div className="container">
            <div>
                <h3>Kanban 연습</h3>
                <button onClick={addCard}>추가</button>
            </div>
           
            <Board 
                todos={todos}
                type={'plan'}
                textareaHandleOnDoubleClick={textareaHandleOnDoubleClick} 
                textareaHandleOnKeyDown = {textareaHandleOnKeyDown}
                buttonHandleOnClick = {buttonHandleOnClick}
                moveCard={moveCard}
            />

            <Board 
                todos={todos}
                type={'ing'}
                textareaHandleOnDoubleClick={textareaHandleOnDoubleClick} 
                textareaHandleOnKeyDown = {textareaHandleOnKeyDown}
                buttonHandleOnClick = {buttonHandleOnClick}
                moveCard={moveCard}
            />

            <Board 
                todos={todos}
                type={'done'}
                textareaHandleOnDoubleClick={textareaHandleOnDoubleClick} 
                textareaHandleOnKeyDown = {textareaHandleOnKeyDown}
                buttonHandleOnClick = {buttonHandleOnClick}
                moveCard={moveCard}
            />
                
        </div>
    )
};

export default Kanban;