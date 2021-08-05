import React, { FC, useEffect, useState } from "react";
import "./TodoList.scss";
import { Backdrop, CircularProgress, List, ListItem } from "@material-ui/core";
import { Modal, ModalType } from "../Modal";
import { useDebounce } from "../../hooks/debounce";
import {
  Todo,
  TodoInput,
  TodoListFooterAction,
  TodoListHeaderAction,
} from "./";
import { useModal } from "../../hooks/useModal";
import { FilterType, ITodo } from "../../models/todo.model";
import { TodoAction } from "../../store/todos/action";
import { useDispatch, useSelector } from "../../store/store";
//Thunk/////////////////////////////////////
//import { StateType, useDispatch, useSelector } from "../../store/store";
//import { ThunkDispatch } from "redux-thunk";
/////////////////////////////////////////////
import { Actions } from "../../store/todos/constant";
import { Link } from "react-router-dom";

const TodoList: FC<any> = () => {
  const [modalType, setModalType] = useState<ModalType>();
  const [newTodo, setNewTodo] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const {
    modalOpen: openConfirmModal,
    setModalOpen: setOpenConfirmModal,
    toggle: ConfirmModalToggle,
  } = useModal();
  const debouncedSearchTerm: string = useDebounce<string>(search, 500);

  const todos = useSelector((state) => state.todo.todos);
  const filterTodos = useSelector((state) => state.todo.filterTodos);
  const isLoading = useSelector((state) => state.todo.isLoading);
  //Thunk/////////////////////////////
  // const ThunkDispatch: ThunkDispatch<
  //   StateType,
  //   undefined,
  //   { type: string; payload?: any }
  // > = useDispatch();
  ////////////////////////////
  const dispatch = useDispatch();
  const modalClose = () => {
    ConfirmModalToggle();
  };
  //Thunk////////////////////////////////
  // useEffect(() => {
  //   // ThunkDispatch(TodoAction.loadTodosThunk());
  // }, [ThunkDispatch]);
  ///////////////////////////////////////
  useEffect(() => {
    dispatch({ type: Actions.LoadTodos });
  }, []);
  useEffect(() => {
    if (!todos) return;
    dispatch(TodoAction.setFilterTodos(todos));
  }, [todos]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(TodoAction.searchTodos(debouncedSearchTerm));
    } else {
      dispatch(TodoAction.filterTodos(FilterType.ALL));
    }
  }, [debouncedSearchTerm]);

  const createNewTodo: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }): void => {
    if (target.value !== " ") {
      setNewTodo(target.value);
    }
  };
  const saveChanges = (): void => {
    if (newTodo) {
      dispatch(TodoAction.addTodoRequest(newTodo));
      setNewTodo("");
    }
  };
  const saveEditTodo = (todo: ITodo): void => {
    if (todo !== null) {
      dispatch(TodoAction.editTodoRequest(todo));
      modalClose();
    }
  };

  const OnChecked = (todo: ITodo): void => {
    dispatch(TodoAction.checkTodoRequest(todo));
  };

  const editTodo = (id: string): void => {
    const changesTodo = todos.find((item) => item._id === id);

    if (changesTodo) {
      dispatch(TodoAction.setTmpTodo(changesTodo));
      setModalType(ModalType.Edit);
      ConfirmModalToggle();
    }
  };
  const filter = (filter: FilterType): void => {
    dispatch(TodoAction.filterTodos(filter));
  };
  const searchTodo: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSearch(target.value);
  };
  const openModalForDelete = (typeOrId: FilterType | string): void => {
    console.log(typeOrId);
    if (typeof typeOrId === "string") {
      const deleteTodo = todos.find((item) => item._id === typeOrId);
      dispatch(TodoAction.setTmpTodo(deleteTodo!));
      setModalType(ModalType.Delete);
      ConfirmModalToggle();
    } else {
      switch (typeOrId) {
        case FilterType.ALL: {
          setModalType(ModalType.DeleteAll);
          break;
        }
        case FilterType.DONE: {
          setModalType(ModalType.DeleteChecked);
          break;
        }
      }
      ConfirmModalToggle();
    }
  };
  const deleteTask = (typeOrId: FilterType | string): void => {
    if (typeof typeOrId === "string") {
      deleteTodo(typeOrId);
    } else {
      deleteTasks(typeOrId);
    }
  };
  const deleteTodo = (id: string): void => {
    dispatch(TodoAction.deleteTodoRequest(id));
    modalClose();
  };
  const deleteTasks = (deleteType: FilterType): void => {
    switch (deleteType) {
      case FilterType.ALL: {
        dispatch(TodoAction.deleteAllTodoRequest());
        break;
      }
      case FilterType.DONE: {
        dispatch(TodoAction.deleteCheckTodoRequest());
        break;
      }
      default:
        break;
    }
    modalClose();
  };
  return (
    <div className="TodoListContainer">
      {/*<Link to="/about">Link to about</Link>*/}
      <TodoInput
        newTodo={createNewTodo}
        todo={newTodo}
        saveChanges={saveChanges}
      />
      <TodoListHeaderAction searchTodo={searchTodo} filter={filter} />
      <List className="TodoList">
        {filterTodos.length ? (
          filterTodos.map((item, idx) => {
            return (
              <ListItem key={idx}>
                <Todo
                  {...item}
                  OnChecked={OnChecked}
                  deleteTodo={openModalForDelete}
                  editTodo={editTodo}
                />
              </ListItem>
            );
          })
        ) : (
          <ListItem
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <Backdrop open={isLoading}>
                <CircularProgress color="inherit" />
              </Backdrop>
            ) : (
              <span>Todo List is empty</span>
            )}
          </ListItem>
        )}
      </List>
      <TodoListFooterAction deleteTasks={openModalForDelete} />
      <Modal
        type={modalType}
        handleEdit={saveEditTodo}
        handleDelete={deleteTask}
        isOpen={openConfirmModal}
        handleClose={modalClose}
      />
    </div>
  );
};

export default TodoList;
