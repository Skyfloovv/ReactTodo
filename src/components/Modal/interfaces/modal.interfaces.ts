export interface ModalProps {
  headerText: string;
  content?: string | JSX.Element;
  firstButton: {
    buttonText: string;
    buttonHandler: () => void;
  } | null;
  secondButton: {
    buttonText: string;
    buttonHandler: () => void;
  } | null;
}
export interface DialogTitleProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}
