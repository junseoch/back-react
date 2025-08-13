import React, { useState } from 'react';

const Count = () => {
  // 상태를 바꾸기 위해
  console.log("useState",useState(0))

  // 앞에 있는 상태를 바꾸는 건 setter
  // 비구조화 객체
  const [number, setNumber] = useState(0)

  const increase = (e) => {
    setNumber(number + 1)  // 여기는 값이 들어와야 함   // 08/05 오후 16시 40분
  }


// -1 감소 버튼을 만들고 이벤트를 연결하기

  const decrease = (e) => {
    setNumber(number - 1)
  }


  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1 증가</button>

      <button onClick={decrease}>-1 감소</button>
    </div>
  );
};

export default Count;