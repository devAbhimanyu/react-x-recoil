import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../todo/Todo';
import { TextField, Button, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '1rem',
  },
  input: {
    width: '100%',
  },
}));

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');
  //equivalent to dispatching action in reducer
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid item xs={8}>
        <TextField
          type='text'
          value={inputValue}
          placeholder='Next Task'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant='contained' color='primary' onClick={addItem}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
}

export default TodoItemCreator;
