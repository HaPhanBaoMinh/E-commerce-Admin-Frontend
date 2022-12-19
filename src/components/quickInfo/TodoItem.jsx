import React, { useState } from 'react';
import styled from 'styled-components';
import { ImCheckboxUnchecked, ImCheckboxChecked, ImCancelCircle } from "react-icons/im";
import axios from 'axios';
import { ROUTE } from '../api/route';



function TodoItem({ todo, onDeleteTodoById }) {
    const [isDone, setisDone] = useState(todo.status === 'done');

    const onCheck = async () => {
        setisDone(pre => !pre);
        await axios.put(`${ROUTE}/api/admin/todolist`, {
            id: todo.id,
            status: isDone ? "todo" : "done"
        })
    }

    return (
        <Container>
            {isDone ? <ImCheckboxChecked className='checkbox' onClick={() => onCheck()} /> : <ImCheckboxUnchecked className='checkbox' onClick={() => onCheck()} />}
            <p className={isDone ? "checked" : undefined}> {todo.content} </p>
            <ImCancelCircle className={isDone ? "checked remove" : "remove"} onClick={() => onDeleteTodoById(todo.id)} />
        </Container>
    )
}

export default TodoItem;

const Container = styled.li`
                height: 50px;
                display: block;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 20px;
                border-bottom: 1px solid var(--black);
                font-size: 17px;
                svg{
                    cursor: pointer;
                }
                .checkbox{
                    font-size: 20px;
                    color: var(--orange);
                }

                .remove{
                    font-size: 20px;
                    justify-self: flex-end;
                    margin-left: auto;
                    /* color: #d8d8d8 */
                }

        .checked{
            text-decoration: line-through;
            color: var(--un-action)
        } 
`