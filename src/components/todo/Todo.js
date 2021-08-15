import { List } from '@material-ui/core';
import React from 'react';
import { atom, useRecoilValue, selector } from 'recoil';
import TodoItem from '../todoItem/TodoItem';
import TodoItemCreator from '../todoItemCreator/TodoItemCreator';
import TodoListFilters, {
  todoListFilterState,
} from '../todoListFilters/TodoListFilters';
import TodoListStats from '../todoListStats/TodoListStats';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

//keeps track of two dependencies: todoListFilterState and todoListState so that it re-runs if either of those change.
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default function ToDo() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <List>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </List>
    </>
  );
}
