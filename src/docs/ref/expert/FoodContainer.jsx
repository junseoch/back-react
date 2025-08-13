import React, { useRef, useState } from 'react';


// 화면에 보이는 체크박스 폼 완성하기
// 한글 음식 이름, 영어 음식 이름을 입력하고 추가 버튼을 누르면 값이 추가된다.
// 체크박스를 누르고 삭제 버튼을 누르면 해당 음식이 삭제된다.
// 체크박스는 여러 개 누를 수 있으며, 여러 개 누른 상품은 모두 같이 삭제 된다.

// 데이터 추가


const FoodContainer = () => {

  const inputRef = useRef([])

  console.log("inputRef : ",inputRef) 
  console.log("inputRef.current : ", inputRef.current)
  console.log("inputRef.current.value[0] : ", inputRef.current.value)

  
  const [menu, setMenu] = useState("")


  const onClickAdd = () => {

    let data = ""


    data += inputRef.current[0].value + " " + `(${inputRef.current[1].value})` 

  //  console.log(inputRef.current)
  // console.log(inputRef.current[0].value)
    setMenu(data)
  }


  const onClickDel = () => {
   
  }



  return (
    <div>
      <input type="text" ref={(el) => inputRef.current[0] = el}/>
      <input type="text" ref={(el) => inputRef.current[1] = el} />
      <button onClick={onClickAdd}>추가</button>
      <button onClick={onClickDel}>삭제</button>
      <ul>
        <li><input type="checkbox" />{menu}</li>
      </ul>
    </div>
  );
};

export default FoodContainer;