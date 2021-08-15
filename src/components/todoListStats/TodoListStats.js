import { selector, useRecoilValue } from 'recoil';
import { todoListState } from '../todo/Todo';
import { Grid } from '@material-ui/core';
const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <Grid container spacing={2} style={{ marginBottom: 15 }}>
      <Grid xs={6} item>
        Items: {totalNum}
      </Grid>
      <Grid xs={6} item>
        Completed: {totalCompletedNum}
      </Grid>
      <Grid xs={6} item>
        Not completed: {totalUncompletedNum}
      </Grid>
      <Grid xs={6} item>
        Percent completed: {formattedPercentCompleted}
      </Grid>
    </Grid>
  );
}

export default TodoListStats;
