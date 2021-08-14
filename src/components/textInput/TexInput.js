import { useRecoilState } from 'recoil';
import { textState } from '../counter/Counter';

function TextInput() {
  const [counter, setCounter] = useRecoilState(textState);

  const onChange = (event) => {
    setCounter(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={counter}
        onChange={onChange}
        className='input-field col'
        placeholder='Enter text'
      />
      <br />
      <h5>Input text: {counter}</h5>
    </div>
  );
}
export default TextInput;
