// src/features/todo/TodoList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleComplete, removeTodo } from './redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const status = useSelector(state => state.todos.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {todos.map(todo => (
        <div key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.title}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
