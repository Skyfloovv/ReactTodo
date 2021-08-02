import { FilterType } from "../models/todo.model";
import { ModalProps } from "./Modal";

interface PropsForGetModalPropsForDeleteTask {
  id?: number;
  deleteType?: FilterType;
  deleteHandler: (props: any) => void;
  handleClose: () => void;
}

export const getModalPropsForDeleteTask = ({
  deleteType,
  id,
  deleteHandler,
  handleClose,
}: PropsForGetModalPropsForDeleteTask): ModalProps => {
  return {
    content: "if you delete this you won't be able to revert the changes",
    headerText: id && !deleteType ? "Remove this task" : "Remove all tasks",
    firstButton: {
      buttonHandler: () => {
        handleClose();
      },
      buttonText: "Cancel",
    },
    secondButton: {
      buttonHandler: () => {
        id ? deleteHandler(id) : deleteHandler(deleteType);
      },
      buttonText: "Apply",
    },
  };
};
export const getModalPropsForEditTask = ({
  deleteType,
  id,
  deleteHandler,
  handleClose,
}: PropsForGetModalPropsForDeleteTask): ModalProps => {
  return {
    headerText: id && !deleteType ? "Remove this task" : "Remove all tasks",
    firstButton: {
      buttonHandler: () => {
        handleClose();
      },
      buttonText: "Cancel",
    },
    secondButton: {
      buttonHandler: () => {
        id ? deleteHandler(id) : deleteHandler(deleteType);
      },
      buttonText: "Apply",
    },
  };
};
