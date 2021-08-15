import { RecoilRoot } from 'recoil';
import { ToDo } from '../components';
import { Grid } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <h4 className='center'>Recoil ToDo List</h4>
      <div className='App container'>
        <RecoilRoot>
          <ToDo />
        </RecoilRoot>
      </div>
    </Grid>
  );
}

export default App;
