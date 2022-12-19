import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ROUTE } from '../api/route';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [todolist, setTodolist] = useState([]);
    const [content, setContent] = useState('')
    const adminid = 'AD-e6a05';
    useEffect(() => {
        const getTodolist = async () => {
            const { data } = await axios.get(`${ROUTE}/api/admin/todolist/${adminid}`);
            if (data.status) {
                setTodolist(data.result)
            }
        }
        getTodolist();
    }, [])

    const onDeleteTodoById = async (id) => {
        try {
            await axios.delete(`${ROUTE}/api/admin/todolist/${id}`);
            // const deletedTodolist = todolist.filter(todo => todo.id !== id);
            setTodolist(todolist => todolist.filter(todo => todo.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    const onAddTodolist = async () => {
        try {
            const { data } = await await axios.post(`${ROUTE}/api/admin/todolist`, {
                adminid,
                content
            });
            setTodolist(todolist => {
                const newtodo = {
                    id: data.id,
                    content,
                    status: 'todo'
                }
                return [newtodo, ...todolist]
            })
            setContent("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <div className="input-todo">
                <input type="text" placeholder='What do you need to do today ?' onChange={(e) => setContent(e.target.value)} />
                <button onClick={() => onAddTodolist()}>Add</button>
            </div>
            <div className="todo-list">
                <ul>
                    {todolist.map(todo => <TodoItem todo={todo} key={uuidv4()} onDeleteTodoById={onDeleteTodoById} />)}
                </ul>
            </div>
        </Container>
    )
}

export default TodoList

const Container = styled.div`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    padding: var(--padding);
    background-color: #ffc786b8;
    border-radius: 5px;
    box-shadow: 0px 1px 3px;
    @media screen and (max-width: 600px)  {
        width: 100%;
        padding: 20px 10px;
    }
    .input-todo {
        height: 8%;
        box-sizing: border-box;
        display: flex;
        gap: var(--padding);
        @media screen and (max-width: 600px)  {
            height: 50px;
        }
        input  {
            border: none;
            height: 100%;
            width: 80%;
            box-sizing: border-box;
            padding: 2px 15px;
            outline: none;
            font-size: 15px;
            border-radius: 2px;
        }
        button {
            height: 100%;
            width: 20%;
            cursor: pointer;
            background-color: var(--orange);
            outline: none;
            border: none;
            border-radius: 2px;
            font-weight: 700;
            font-size: 15px;
            transition: 0.3s ease;

            &:hover {
                opacity: 0.8;
                transition: 0.3s ease;
            }
        }
    }

    .todo-list {
        width: 100%;
        height: 92%;
        padding-top: var(--padding);
        box-sizing: border-box;
        ul {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            scrollbar-width: 0 !important;
            padding-right: 10px;
            li {
                /* background-color: aqua; */
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
            }

            .checked{
                text-decoration: line-through;
            } 
        }
    }
`