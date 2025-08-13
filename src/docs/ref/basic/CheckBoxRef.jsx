import React, { useRef, useState } from 'react';

const CheckBoxRef = () => {

  const [result, setResult] = useState("")
  const inputRef = useRef([])
  const onClickToPrintHobby = () => {
    console.log(inputRef.current)


    let hobby = ""
    inputRef.current.forEach((input,i,inputArr) => {
      // 배열에서 사용
      if(input.checked){
        // i는 0~2
        // 마지막 출력값에서 , 빼기
        hobby += i === inputArr.length - 1 ? input.value : input.value + ", "
      }
    })

    setResult(hobby)

    // inputRef.current.forEach((input) => console.log(input.checked))
    // inputRef.current.forEach((input) => console.log(input.value))

  }

  return (
    <div>
      <p>{result}</p>
      <label>
        <span>축구</span>
                                                {/* 첫번째 매개변수 el은 input 태그를 받음
                                                   */}
        <input type="checkbox" name='hobby' ref={(el) => inputRef.current[0] = el}  value="축구"/>
      </label>
      <label>
        <span>야구</span>
        <input type="checkbox" name='hobby' ref={(el) => inputRef.current[1] = el}  value="야구"/>
      </label>
      <label>
        <span>농구</span>
        <input type="checkbox" name='hobby' ref={(el) => inputRef.current[2] = el}  value="농구"/>
      </label>
      <button onClick={onClickToPrintHobby}>취미 확인하기!</button>
    </div>
  );
};

export default CheckBoxRef;