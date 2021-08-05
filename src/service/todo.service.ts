import { FilterType, ITodo } from "../models/todo.model";
import { todoApi } from "../api";

// export const getTodos = (): Promise<ITodo[]> => {
//   const todos: ITodo[] = [
//     {
//       _id: 1,
//       checked: true,
//       text: "Go to supermarket",
//     },
//     {
//       _id: 2,
//       checked: false,
//       text: "take wife",
//     },
//     {
//       _id: 3,
//       checked: false,
//       text: "make child",
//     },
//     {
//       _id: 4,
//       checked: false,
//       text: "build home",
//     },
//   ];
//
//   return new Promise<ITodo[]>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(todos);
//     }, 1000);
//   });
// };

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
