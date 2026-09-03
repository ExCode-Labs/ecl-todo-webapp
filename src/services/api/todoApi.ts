import apiClient from './client';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodos() {
  const response = await apiClient.get<Todo[]>('/todos');

  return response.data;
}

export async function createTodo(title: string) {
  const response = await apiClient.post<Todo>('/todos', {
    title,
  });

  return response.data;
}
