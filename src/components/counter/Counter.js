import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';

export const textState = atom({
  key: 'textState', //identifier
  default: '', // initial state
});

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const DisplayCount = () => {
  const count = useRecoilValue(charCountState);
  return <h5>Character Count: {count}</h5>;
};

export default function Counter() {
  return (
    <div>
      <DisplayCount />
    </div>
  );
}
