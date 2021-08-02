import { FilterType, ITodo } from "../models/todo.model";

export const getTodos = (): Promise<ITodo[]> => {
  const todos: ITodo[] = [
    {
      id: 1,
      checked: false,
      text: "blablabla",
    },
    {
      id: 2,
      checked: false,
      text: "blaolo",
    },
    {
      id: 3,
      checked: false,
      text: "ololol",
    },
    {
      id: 4,
      checked: false,
      text: "olobla",
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 1000);
  });
};
export const filterTodoForType = (
  filter: FilterType,
  todos: ITodo[]
): ITodo[] => {
  switch (filter) {
    case FilterType.ALL: {
      return todos;
    }
    case FilterType.DONE: {
      return todos.filter((item) => item.checked);
    }
    case FilterType.TODO: {
      return todos.filter((item) => !item.checked);
    }
    default:
      return todos;
  }
};
export const deleteTodoForType = (
  deleteType: FilterType,
  todos: ITodo[]
): ITodo[] | [] => {
  switch (deleteType) {
    case FilterType.ALL: {
      return [];
    }
    case FilterType.DONE: {
      return todos.filter((item) => !item.checked);
    }
    default:
      return todos;
  }
};
