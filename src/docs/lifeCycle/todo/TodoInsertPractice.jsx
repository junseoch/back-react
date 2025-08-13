import React, { useState } from 'react';

const TodoInsertPractice = ({ todos, handleTodos, setHandleTodos }) => {
  const [value, setValue] = useState("");


  // 변수 담아보기 연습!

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const insertTodo = async (e) => {
    if (e.key === 'Enter') {
      if (!window.confirm(`이대로 추가하시겠습니까?`)) return;

      console.log(value);

      // fectch니까 프로미스 객체

      await fetch('http://localhost:4000/todos', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: (todos.length + 1).toString(),
          title: value,
          isChecked: false
        })
      })
      .then((res) => {
        if (!res.ok) return alert("알 수 없는 오류가 발생했습니다");
        alert('할 일 추가가 완료 되었습니다😒');
        setHandleTodos(!handleTodos);
      })
      .catch(console.error);
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={insertTodo}
        onChange={onChangeValue}
        placeholder='오늘 할 일을 추가해 볼까요?'
      />
    </div>
  );
};

export default TodoInsertPractice;