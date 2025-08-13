import React, { useRef } from 'react';

const FormConfirm = () => {

  const inputRef = useRef([]);
  // 레퍼런스를 배열로 관리
  const onClickSubmit = () => {
    console.log(inputRef.current)

    // 배열로 인덱스 2개를 가져왔는데 둘 다 값이 있는지 확인하려면?
    
    // input 태그는 객체!

    // input을 순차적으로 접근하는 것부터 생각해야함
    inputRef.current.forEach((input) => {

      // 중간에 계속 확인해봐야함
      // console.log(input)
      // console.log(input.value)

      // if(!input.value){
      //   return alert(`${input.name} 값을 입력하세요`)
      // }


    })

  }

  return (
    <div>
      <form>
        <div>
          <span>아이디</span>
          <input ref={(el) => inputRef.current[0] = el} type="text" name='id'/></div>
        
        <div>
          <span>비밀번호</span>
          <input ref={(el) => {inputRef.current[1] = el}} type="text" name='password'/></div>
        <button onClick={onClickSubmit}>전송</button>
        
      </form>
    </div>
  );
};

export default FormConfirm;