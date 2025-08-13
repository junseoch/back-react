import React, { useState } from 'react';

const Name = () => { 
  // setResult를 통해 result를 바꿈
  const [result, setResult] = useState("")  // 초기값을 넣어주는 공간
  const onChangeResult = (e) => {
    setResult(e.target.value)
  }

  // DOM이라는 개념이 없기 때문에
  // 이벤트에 태그에 직접적으로 접근
  return (
    <div>
      <p>{result}</p>
      <input type="text" onChange={onChangeResult} /> 
    </div>
  );
};

export default Name;