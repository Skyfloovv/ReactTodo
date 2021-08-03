import { ModalType } from "./Modal";

export const getTextForType = (type: ModalType | undefined): string => {
  switch (type) {
    case ModalType.Delete: {
      return "Do you want delete this task";
    }
    case ModalType.DeleteAll: {
      return "Do you want delete all task";
    }
    case ModalType.DeleteChecked: {
      return "Do you want delete done task";
    }
    case ModalType.Edit: {
      return "Edit this task";
    }
    default:
      return "are you sure?";
  }
};
