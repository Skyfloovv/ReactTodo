export interface ModalProps {
    headerText: string;
    contentText: string;
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
