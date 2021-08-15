import { List } from '@material-ui/core';
import React from 'react';
import { atom, useRecoilValue } from 'recoil';
import TodoItem from '../todoItem/TodoItem';
import TodoItemCreator from '../todoItemCreator/TodoItemCreator';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export default function ToDo() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
      <List>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </List>
    </>
  );
}
