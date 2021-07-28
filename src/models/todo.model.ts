export interface ITodoListProps {
    todos: ITodo[];
    OnCheked: (id: number) => void;
    editTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    filter: (filter: FilterType) => void;
    deleteTasks:(filter: FilterType) => void;

}
export interface ITodo {
    id: number;
    checked: boolean;
    text: string;

}

export enum FilterType {
    ALL = 'All',
    DONE = 'Done',
    TODO = 'Todo'
}
