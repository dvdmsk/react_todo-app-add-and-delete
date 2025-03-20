import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  loadTodos: number[];
  onLoadTodos: (loadTodos: number[]) => void;
  onDelete?: (todoId: number) => void;
  onError?: (error: string) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  loadTodos,
  onLoadTodos,
  onDelete = () => {},
  onError = () => {},
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos &&
        todos.map(todo => (
          <TodoInfo
            todo={todo}
            key={todo.id}
            loadTodos={loadTodos}
            onLoad={onLoadTodos}
            onDelete={onDelete}
            onError={onError}
          />
        ))}
      {tempTodo && (
        <TodoInfo
          todo={tempTodo}
          key={0}
          loadTodos={loadTodos}
          onLoad={onLoadTodos}
        />
      )}
    </section>
  );
};
