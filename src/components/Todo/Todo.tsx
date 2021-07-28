import React, {FC} from 'react';
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox"
import './Todo.scss';
import {ITodo} from "../../models/todo.model";

export interface ITodoProps extends ITodo {
    deleteTodo: (id: number) => void;
    editTodo: (id: number) => void;
    OnCheked: (id: number) => void;
}

const Todo: FC<ITodoProps> = ({id, checked, text, deleteTodo, OnCheked,editTodo}) => {
    return (
        <div className="Todo">
            <span className={checked?'strike':''} >{text}</span>
            <div className='todo-actions'>
                <Checkbox checked={checked} onChange={() => OnCheked(id)}/>
                <Button children={'edit'} onClick={()=> editTodo(id)} />
                <Button children={"delete"} onClick={() => deleteTodo(id)}/>
            </div>
        </div>
    )
};

export default Todo;
