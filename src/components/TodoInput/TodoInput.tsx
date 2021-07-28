import React, {FC} from 'react';
import './TodoInput.scss';
import {Button, TextField} from "@material-ui/core";
import Header from "../Header/Header";

export interface TodoInputProps{
    changeTodo: React.ChangeEventHandler<HTMLInputElement>;
    saveChanges: () => void;
    todo: string|undefined;
    isEdit:boolean
}
const TodoInput: FC<TodoInputProps> = ({changeTodo, saveChanges, todo,isEdit}) => {

    return (
        <div className="TodoInput">
            <Header text='Todo Input'/>

            <form className="TodoForm">
                <TextField label={isEdit?'Edit':'New Todo'} value={todo} onChange={changeTodo}/>
                <Button variant="contained" color="primary" onClick={saveChanges}>
                    {isEdit?'Edit Task':'Add new task'}
                </Button>
            </form>
        </div>
    )
};

export default TodoInput;
