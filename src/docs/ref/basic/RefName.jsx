import React, { useRef, useState } from 'react';

const RefName = () => {
  const [result, setResult] = useState("")
  const nameRef = useRef({});
  
  const onChangeResult = (e) => {
    setResult(e.target.value)
  }

  const addNim = () => {
    // setResult(result + "님")
    // console.log(nameRef.current) // === p태그
    setResult(nameRef.current.innerText.replaceAll("님", "") + "님") // === p태그
  }

  
  // 상태가 아닌 p태그의 진짜 값을 가져오려고 함
  // dom대신 ref
  // ref를 심어서 가져옴
  return (
    <div>
      <p ref={nameRef}>{result}</p>
      <input type="text" onChange={onChangeResult} />
      <button onClick={addNim}>님 추가</button>
    </div>
  );
};

export default RefName;

