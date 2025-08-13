import React, { useState } from 'react';


// 비구조 할당으로 값들만 들고옴

// 키 값들로 데이터를 확인

const Todo = ({todo, handleTodos, setHandleTodos}) => {
  const {id, title, isChecked, userId} = todo;
  console.log(todo)
  
  const onChangeChecked = async () => {

    // checked를 변경 요청 후 응답
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        isChecked : !isChecked,
      })
    })
    .then((res) => {
      if(!res.ok) return; 
      setHandleTodos(!handleTodos)
    })
    .catch(console.err)
  }

  const [value, setValue] = useState(title)
  const onChangeValue = (e) => setValue(e.target.value)

  const [isEdit, setEdit] = useState(false)
  const handleEdit = () => setEdit(!isEdit)

  
  const remoteTodo = async () => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method : "DELETE"
    })
  }
  
  // 수정
  const updateTodo = async () => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        title : value,
      })
    })
    .then((res) => {
      if(!res.ok) return; 
      setHandleTodos(!handleTodos)
    })
    .catch(console.err)
  }

  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={onChangeChecked}/>
      { isEdit ? <input value={value} onChange={onChangeValue} /> : <span style={{textDecoration: isChecked ? "line-through" : ""}}>{title}</span> }
      { isEdit ? <button onClick={updateTodo}>완료</button> : <button onClick={handleEdit}>수정</button> }
      <button onClick={remoteTodo}>삭제</button>
    </li>
  );
};

export default Todo;