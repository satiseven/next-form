export interface todoIn {
  title: string;
  id: number;
  status: "active" | "possive";
}
export interface todoType {
  todo: todoIn[];
}
export interface AppState {
  todo: todoType;
}
