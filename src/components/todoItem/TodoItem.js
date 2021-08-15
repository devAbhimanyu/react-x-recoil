import { useRecoilState } from 'recoil';
import { todoListState } from '../todo/Todo';
import {
  TextField,
  Button,
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemIcon,
} from '@material-ui/core/';

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <ListItem key={item} button>
      <ListItemIcon>
        <Checkbox
          checked={item.isComplete}
          onChange={toggleItemCompletion}
          name='checkedB'
          color='primary'
        />
      </ListItemIcon>
      <TextField type='text' value={item.text} onChange={editItemText} />
      <ListItemSecondaryAction>
        <Button variant='contained' color='secondary' onClick={deleteItem}>
          x
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
