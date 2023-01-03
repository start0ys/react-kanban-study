import { useState } from "react";
import Board from './Board';
import $ from 'jquery';

const Kanban = () => {
    type Todo = { id: number; text: string; state: string };
    const [todos,setTodos] = useState<Todo[]>([]);
    const boardTypes = ['plan', 'ing', 'done'];

    const textareaHandle = {
        'keyDown' : (e:any) => {
            let targetEl = e.target;
            targetEl.style.height = '1px';
            targetEl.style.height = `${12 + targetEl.scrollHeight}px`;
        },
        'doubleClick' : (e:any) => {
            let targetNum = e.target.id.substring(8);
            $(`#textArea${targetNum}`).prop('disabled', false); 
            $(`#btn${targetNum}`).removeClass('showOff').addClass('showOn');
        }
    }

    const buttonHandleOnClick = (e:any) => {
        let targetNum = e.target.id.substring(3);
        let targetText = $(`#textArea${targetNum}`).val();
        $(`#textArea${targetNum}`).prop('disabled', true); 
        $(`#btn${targetNum}`).removeClass('showOn').addClass('showOff');

        setTodos(todos.map((todo:any) => todo.id === targetNum ?
            {
                ...todo,
                text: targetText
            }
            : todo
        ));
        console.table(todos);
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
        console.table(todos);
    }

    

    const moveCard = (type:string, id:number) => {
        console.log(`이동한 타켓 ${type}`);
        setTodos(todos.map((todo:any) => todo.id === id ?
            {
                ...todo,
                state:type
            }
            : todo
        ));
        console.table(todos);
    }


    return (
        <div className="container">
            <div>
                <h3>Kanban 연습</h3>
                <button onClick={addCard}>추가</button>
            </div>

            {
                boardTypes.map((boardType) => {
                    return (
                        <Board 
                            todos={todos}
                            type={boardType}
                            textareaHandle = {textareaHandle}
                            buttonHandleOnClick = {buttonHandleOnClick}
                            moveCard={moveCard}
                            key={boardType}
                        />
                    )
                })
            }
           

                
        </div>
    )
};

export default Kanban;