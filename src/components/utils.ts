import { deleteTodoForType } from "../service/todo.service";
import { FilterType, ITodo } from "../models/todo.model";

interface PropsForGetModalPropsForDeleteTask {
  setOpenConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filterTodos: ITodo[];
  id?: number;
  deleteType?: FilterType;
}

export const getModalPropsForDeleteTask = ({
  deleteType,
  filterTodos,
  setOpenConfirmModal,
  id,
  setTodos,
}: PropsForGetModalPropsForDeleteTask) => {
  return {
    contentText: "if you delete this you won't be able to revert the changes",
    headerText: id && !deleteType ? "Remove this task" : "Remove all tasks",
    firstButton: {
      buttonHandler: () => {
        setOpenConfirmModal(false);
      },
      buttonText: "Cancel",
    },
    secondButton: {
      buttonHandler: () => {
        id && !deleteType
          ? setTodos(filterTodos.filter((item) => item.id !== id))
          : setTodos((prevState) => {
              return deleteTodoForType(deleteType!, prevState);
            });
        setOpenConfirmModal(false);
      },
      buttonText: "Apply",
    },
  };
};
