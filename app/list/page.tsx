'use client';
//클라이언트 컴포넌트를 사용하려면 'use Client'를 선언해야한다.

import { ChangeEvent, useState } from 'react';

export default function List() {
  const [userInput, setUserInput] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  console.log(userInput);

  return (
    <div>
      <h2>ListPage</h2>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
}
