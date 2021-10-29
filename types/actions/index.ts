export interface todoIn {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
export interface todoType {
  todoItems: todoIn[];
}
export interface AppState {
  todo: todoType;
}
