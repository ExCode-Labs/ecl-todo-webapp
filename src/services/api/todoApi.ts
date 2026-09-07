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
