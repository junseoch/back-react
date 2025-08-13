import React from 'react';

// 단축키 : rsc

const Jsx03 = () => {

const name = "최준서"
const age = 25
const realAge = age - 1

  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>만 나이 : {realAge}</p>
    </div>
  );
};

export default Jsx03;