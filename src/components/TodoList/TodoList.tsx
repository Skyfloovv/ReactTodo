import React, {FC, useEffect, useState} from 'react';
import './TodoList.scss';
import Todo from "../Todo/Todo";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TodoInput from "../TodoInput/TodoInput";
import {deleteTodoForType, filterTodoForType, getTodos} from "../../service/todo.service";
import {FilterType, ITodo} from "../../models/todo.model";
import Modal from "../Modal/Modal";
import {useDebounce} from "../../customHook/debounce";
import {ModalProps} from "../Modal/interfaces/modal.interfaces";
import TodoListHeaderAction from "../TodoListHeaderAction/TodoListHeaderAction";
import TodoListFooterAction from "../TodoListFooterAction/TodoListFooterAction";
import {useModal} from "../../customHook/useModal";

const TodoList: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filterTodos, setFilterTodos] = useState<ITodo[]>([]);
    const [todo, setTodo] = useState<ITodo | null>(null);
    const [newTodo, setNewTodo] = useState<string>('');
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const {modalOpen: open, setModalOpen: setOpen , toggle: toggleModal} = useModal();
    const [modalOption,setModalOption] = useState<ModalProps>();
    const debouncedSearchTerm: string = useDebounce<string>(search, 500);
    const setEditTodo: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
        if (todo === null) {
            setNewTodo(target.value);
        } else {
            setTodo({...todo, text: target.value})
        }
    }
    const saveChanges = () => {
        if (todo === null) {
            setTodos([...todos, {
                id: todos.length + 1,
                checked: false,
                text: newTodo,
            }])
            setNewTodo('');
        } else if (todo !== null) {
            setTodos(todos.map((item) => {
                if (item.id === todo.id) {
                    item.text = todo.text
                }
                return item;
            }))
            setTodo(null);
            setIsEdit(false);
        }
    }

    useEffect(() => {
        getTodos().then((res) => {
            setTodos(res);
        })
    }, []);
    useEffect(() => {
        filter(FilterType.ALL);
    }, [todos]);
    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setFilterTodos(todos.filter((item) => {
                    return item.text.includes(debouncedSearchTerm);
                }))
            } else {
                setFilterTodos(todos);
            }
        },
        [debouncedSearchTerm,todos] // Only call effect if debounced search term changes
    );

    const OnCheked = (id: number) => {
        const newState = todos.map((res) => {
            if (res.id === id) return {...res, checked: !res.checked};
            return res;
        })
        setTodos(newState);
    };
    const deleteTodo = (id: number) => {
       setModalOption( {
            contentText: "if you delete this you won't be able to revert the changes",
            headerText:'Delete task',
            firstButton:{
            buttonHandler:()=>{
               setOpen(false);
            },
                buttonText:'Cancel',
        },
            secondButton:{
                buttonHandler:()=>{
                    setTodos(filterTodos.filter((item) => item.id !== id
                ))
                    setOpen(false);
                },
                buttonText:'Apply',
            }
        })
        setOpen(true);
    }
    const editTodo = (id: number) => {
        const changesTodo = todos.find((item) => item.id === id)
        if (changesTodo) {
            setTodo(changesTodo);
            setIsEdit(true);
        }

    }
    const filter = (filter: FilterType) => {
        const new_arr = filterTodoForType(filter, todos);
        setFilterTodos(new_arr);
    }
    const searchTodo: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
        setSearch(target.value);
    }
    const deleteTasks = (deleteType: FilterType) => {
        setModalOption( {
            contentText: "if you delete this you won't be able to revert the changes",
            headerText:'Delete task',
            firstButton:{
                buttonHandler:()=>{
                    setOpen(false);
                },
                buttonText:'Cancel',
            },
            secondButton:{
                buttonHandler:()=>{
                    setTodos(deleteTodoForType(deleteType, todos));
                    setOpen(false);
                },
                buttonText:'Apply',
            }
        })
        setOpen(true);

    }

    return (
        <div className="TodoListContainer">
            <Modal {...modalOption!} setOpen={setOpen} isOpen={open} >
            </Modal>
            <TodoInput changeTodo={setEditTodo} isEdit={isEdit} todo={todo === null ? newTodo : todo?.text}
                       saveChanges={saveChanges}/>
            <TodoListHeaderAction searchTodo={searchTodo} filter={filter}/>
            <List className="TodoList">
                {filterTodos.length ?
                    filterTodos.map((item, idx) => {
                        return (
                            <ListItem key={idx}>
                                <Todo {...item} OnCheked={OnCheked} deleteTodo={deleteTodo} editTodo={editTodo}/>
                            </ListItem>
                        )
                    }) :
                    <ListItem style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <span>Todo List is empty</span>
                    </ListItem>
                }
            </List>
            <TodoListFooterAction deleteTasks={deleteTasks}/>
        </div>
    )
};

export default TodoList;
