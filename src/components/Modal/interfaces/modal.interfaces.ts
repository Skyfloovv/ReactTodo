import { FilterType, ITodo } from "../../../models/todo.model";

export interface ModalProps {
  type: ModalType | undefined;
  isOpen: boolean;
  handleClose: () => void;
  handleDelete: (typeOrId: FilterType | string) => void;
  handleEdit: (todo: ITodo) => void;
}

export interface DialogTitleProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

export enum ModalType {
  Delete = "delete",
  DeleteAll = "deleteAll",
  DeleteChecked = "deleteChecked",
  Edit = "edit",
}
