import { useRecoilState, atom } from 'recoil';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

//"Show All"| "Show Completed" | "Show Uncompleted"
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <FormControl>
      <InputLabel id='Fiter-label'>Fiter</InputLabel>
      <Select
        labelId='Fiter-label'
        id='Fiter'
        value={filter}
        onChange={updateFilter}
      >
        <MenuItem value='Show All'>All</MenuItem>
        <MenuItem value='Show Completed'>Completed</MenuItem>
        <MenuItem value='Show Uncompleted'>Uncompleted</MenuItem>
      </Select>
    </FormControl>
  );
}
export default TodoListFilters;
