import React, { useState } from 'react';

const TodoInsert = ({todos, handleTodos, setHandleTodos}) => {

  const [value,setValue] = useState("")  // input 태그의 상태를 value에 담기 위해
  // useState의 리턴값 -> 배열


  // 값이라고 생각되는 걸 다 변수에 담아볼 것!!

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }


  const insertTodo = async (e) => { // onChange는 키가 없음 , 비동기
    if(e.key === 'Enter'){

      if(!window.confirm(`이대로 추가하시겠습니까?`)) return;

      console.log(value)  // value를 json으로 보내야함
      // POST (url, method, type)'
      const newId = (todos.length + 1).toString()
      const url = 'http://localhost:4000/todos'
      const jsonData =  JSON.stringify({ // 나는 지금 json으로 보낼거야 라고 했기 때문에 json으로 데이터를 변경해서 보내야 함
          id : newId,
          title : value,
          isChecked : false
        }) 
      
        
      const insertOptions = {  // 객체를 추가 -> 어떤 데이터를 추가하려는지, 너가 뭘 하려는지에 대한 정보
        method: "POST",
        headers: {  // 나는 지금 json으로 보낼거야 라고 알려줌
          'Content-Type' : 'application/json'
        },
        // JSON: JSON 프로토타입
        // .stringify() : JSON 객체로 변환한 값을 리턴하는 메서드 -> 통째로가 json
        body : jsonData
      }

      const response = await fetch(url, insertOptions)
      // 데이터 응답 여부
      response.then((res) => {
        if(!res.ok) return alert("알 수 없는 오류가 발생했습니다");
        alert('할 일 추가가 완료 되었습니다😒')
        setHandleTodos(!handleTodos)
      })
      .catch(console.error)
    }
  }

  return (
    <div>
      <input type="text" onKeyDown={insertTodo} onChange={onChangeValue} placeholder='오늘 할 일을 추가해 볼까요?'
      />
    </div>
  );
};

export default TodoInsert;