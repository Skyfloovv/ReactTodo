import React, { FC, useEffect, useState } from "react";
import "./TodoList.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import { filterTodoForType } from "../../service/todo.service";
import { Modal, ModalProps } from "../Modal";
import { useDebounce } from "../../hooks/debounce";
import {
  TodoListFooterAction,
  TodoListHeaderAction,
  TodoInput,
  Todo,
} from "./";
import { useModal } from "../../hooks/useModal";
import { getModalPropsForDeleteTask } from "../utils";
import { FilterType, ITodo } from "../../models/todo.model";
import { ModalEdit } from "../ModalEdit/ModalEdit";
import { loadTodosThunk } from "../../store/todos/todos";
import { StateType } from "../../store/store";
import { ThunkDispatch } from "redux-thunk";

const TodoList: FC<any> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filterTodos, setFilterTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<ITodo | null>(null);
  const [newTodo, setNewTodo] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { modalOpen: openConfirmModal, setModalOpen: setOpenConfirmModal } =
    useModal();
  const { modalOpen: openEditModal, setModalOpen: setOpenEditModal } =
    useModal();
  const [modalOption, setModalOption] = useState<ModalProps>();
  const debouncedSearchTerm: string = useDebounce<string>(search, 500);
  // const searchInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const todos_ = useSelector(({ todo }: StateType) => todo.todos);
  const dispatch: ThunkDispatch<
    StateType,
    undefined,
    { type: string; payload?: any }
  > = useDispatch();

  useEffect(() => {
    dispatch(loadTodosThunk());
  }, []);

  useEffect(() => {
    if (!todos_) return;
    setTodos(todos_);
  }, [todos_]);

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

  const createNewTodo: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (todo === null && target.value.trim() !== "") {
      setNewTodo(target.value);
    }
  };
  const saveChanges = () => {
    if (newTodo) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          checked: false,
          text: newTodo,
        },
      ]);
      setNewTodo("");
    }
  };
  const saveEditTodo = () => {
    if (todo !== null) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            item.text = todo.text;
          }
          return item;
        })
      );
      setTodo(null);
      setOpenEditModal(false);
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
    const newState = todos.map((res) => {
      if (res.id === id) return { ...res, checked: !res.checked };
      return res;
    });
    setTodos(newState);
  };
  const deleteTodo = (id: number) => {
    setModalOption(
      getModalPropsForDeleteTask({
        setOpenConfirmModal,
        setTodos,
        filterTodos,
        id,
      })
    );
    setOpenConfirmModal(true);
  };

  const editTodo = (id: number) => {
    const changesTodo = todos.find((item) => item.id === id);
    if (changesTodo) {
      setTodo(changesTodo);
      setOpenEditModal(true);
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
  const deleteTasks = (deleteType: FilterType) => {
    setModalOption(
      getModalPropsForDeleteTask({
        setOpenConfirmModal,
        setTodos,
        filterTodos,
        deleteType,
      })
    );
    setOpenConfirmModal(true);
  };

  return (
    <div className="TodoListContainer">
      <Modal
        {...modalOption!}
        setOpen={setOpenConfirmModal}
        isOpen={openConfirmModal}
      />
      <ModalEdit
        changeTodo={editTodoHandler}
        saveChanges={saveEditTodo}
        todo={todo?.text}
        isOpen={openEditModal}
        setOpen={setOpenEditModal}
      />
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
                  deleteTodo={deleteTodo}
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
            <span>Todo List is empty</span>
          </ListItem>
        )}
      </List>
      <TodoListFooterAction deleteTasks={deleteTasks} />
    </div>
  );
};

export default TodoList;
