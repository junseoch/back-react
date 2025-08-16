import React, { useState } from 'react';

const CountPractice = () => {

  
  // useState는 배열 형태

  // const number = useState(0)[0]
  // const setNumber = useState(0)[1]

  const [number, setNumber] = useState(0)

  const increase = (e) => {
    setNumber(number + 10) // setNumber을 호출 -> 현재 number에 + 10을 해서 리랜더링해라
  }
  // 버튼이 클릭됐을 때 이벤트 객체를 받아서 기능을 실행시킴

  const decrease = (e) => {
    setNumber(number - 10)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1 증가</button>
      <button onClick={decrease}>-1 감소</button>
    </div>
  );
};

export default CountPractice;