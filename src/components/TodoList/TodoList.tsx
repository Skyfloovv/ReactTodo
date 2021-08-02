import React, { FC, useEffect, useState } from "react";
import "./TodoList.scss";
import {
  Backdrop,
  CircularProgress,
  List,
  ListItem,
  TextField,
} from "@material-ui/core";
import { filterTodoForType } from "../../service/todo.service";
import { Modal, ModalProps } from "../Modal";
import { useDebounce } from "../../hooks/debounce";
import {
  Todo,
  TodoInput,
  TodoListFooterAction,
  TodoListHeaderAction,
} from "./";
import { useModal } from "../../hooks/useModal";
import { getModalPropsForDeleteTask } from "../utils";
import { FilterType, ITodo } from "../../models/todo.model";
import { TodoAction } from "../../store/todos/action";
import { StateType, useDispatch, useSelector } from "../../store/store";
import { ThunkDispatch } from "redux-thunk";

const TodoList: FC<any> = () => {
  const [filterTodos, setFilterTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<ITodo | null>(null);
  const [newTodo, setNewTodo] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const {
    modalOpen: openConfirmModal,
    setModalOpen: setOpenConfirmModal,
    toggle: ConfirmModalToggle,
  } = useModal();
  const [modalOption, setModalOption] = useState<ModalProps>();
  const debouncedSearchTerm: string = useDebounce<string>(search, 500);

  const todos = useSelector((state) => state.todo.todos);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const ThunkDispatch: ThunkDispatch<
    StateType,
    undefined,
    { type: string; payload?: any }
  > = useDispatch();
  const dispatch = useDispatch();
  const modalClose = () => {
    ConfirmModalToggle();
    setModalOption(undefined);
    setTodo(null);
  };

  useEffect(() => {
    ThunkDispatch(TodoAction.loadTodosThunk());
  }, [ThunkDispatch]);

  useEffect(() => {
    filter(FilterType.ALL);
  }, [todos]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setFilterTodos(
        todos.filter((item) => {
          return item.text.includes(debouncedSearchTerm);
        })
      );
    } else {
      setFilterTodos(todos);
    }
  }, [debouncedSearchTerm, todos]);

  useEffect(() => {
    if (!todo) return;
    setModalOption({
      content: (
        <TextField
          label={"Edit"}
          onChange={editTodoHandler}
          value={todo?.text}
        />
      ),
      headerText: "Edit Todo",
      firstButton: {
        buttonText: "Cancel",
        buttonHandler: modalClose,
      },
      secondButton: {
        buttonText: "Apply",
        buttonHandler: saveEditTodo,
      },
    });
    if (!modalOption) ConfirmModalToggle();
  }, [todo]);

  const createNewTodo: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (!todo && target.value !== " ") {
      setNewTodo(target.value);
    }
  };
  const saveChanges = () => {
    if (newTodo) {
      dispatch(TodoAction.addTodo(newTodo));
      setNewTodo("");
    }
  };
  const saveEditTodo = () => {
    if (todo !== null) {
      dispatch(TodoAction.editTodo(todo));
      setTodo(null);
      modalClose();
    }
  };
  const editTodoHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (todo !== null && target.value.trim() !== "") {
      setTodo({ ...todo, text: target.value });
    }
  };

  const OnChecked = (id: number) => {
    dispatch(TodoAction.checkTodo(id));
  };

  const editTodo = (id: number) => {
    const changesTodo = todos.find((item) => item.id === id);
    if (changesTodo) {
      setTodo(changesTodo);
    }
  };
  const filter = (filter: FilterType) => {
    const new_arr = filterTodoForType(filter, todos);
    setFilterTodos(new_arr);
  };
  const searchTodo: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSearch(target.value);
  };
  const openModalForDelete = (typeOrId: FilterType | number) => {
    if (typeof typeOrId === "number") {
      setModalOption(
        getModalPropsForDeleteTask({
          id: typeOrId,
          handleClose: modalClose,
          deleteHandler: deleteTodo,
        })
      );
      ConfirmModalToggle();
    } else {
      setModalOption(
        getModalPropsForDeleteTask({
          deleteType: typeOrId,
          handleClose: modalClose,
          deleteHandler: deleteTasks,
        })
      );
      ConfirmModalToggle();
    }
  };
  const deleteTodo = (id: number) => {
    dispatch(TodoAction.deleteTodo(id));
    modalClose();
  };
  const deleteTasks = (deleteType: FilterType) => {
    switch (deleteType) {
      case FilterType.ALL: {
        dispatch(TodoAction.deleteAllTodo());
        break;
      }
      case FilterType.DONE: {
        dispatch(TodoAction.deleteCheckTodo());
        break;
      }
      default:
        break;
    }
    modalClose();
  };
  return (
    <div className="TodoListContainer">
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
        {...modalOption!}
        setOpen={setOpenConfirmModal}
        isOpen={openConfirmModal}
        handleClose={modalClose}
      />
    </div>
  );
};

export default TodoList;
