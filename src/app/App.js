import { RecoilRoot } from 'recoil';
import { Counter, TexInput } from '../components';
import './App.css';

function App() {
  return (
    <>
      <h4 className='center'>Recoil Calculate String Character Count</h4>
      <div className='App container'>
        <RecoilRoot>
          <TexInput />
          <Counter />
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
