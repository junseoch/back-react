// import React from 'react';

import { useState } from "react";

// const CheckTodoContainer = () => {

//   // 1. 화면에 todo의 데이터를 출력한다.

//   // 2. todo의 상태(done)이 true 상태라면 
//   // textdecoration: line-through 적용시킨다.
//   // 3. todo의 상태(done)이 false라면 아무 스타일도 들어가지 않는다.
//   // 4. checkbox를 클릭하면 상태(done)가 변경되고, 스타일도 맞게 들어간다.
//   // .map(), 삼항연산자 이용

// // return() 안에서는 html이기 때문에, 연산이 되지 않는다.
// // 연산을 하기 위해서는 반드시 "{}" 중괄호로 묶어줘야한다.



// 객체를 li 로 바꿔야 하니까 Map!

  const [todos, setTodos] = useState([
    { id: 1, task: "React 공부하기", done: false },
    { id: 2, task: "운동하기", done: true },
    { id: 3, task: "장보기", done: false },
    { id: 4, task: "점심 먹기", done: false },
    { id: 5, task: "코딩하기", done: true },
  ])


  // 상태를 바꿔줄 수 있는 메서드를 만들어서
  // onChange에 연결

  // 이름 모르면 함수의 매개변수(id)에서 받음
  const handleDone = (id) => {
    // console(e.target.checked)
    setTodos(
      todos.map((todo) => {
      todo.id === id ? {...todo, done: !todo.done} : todo
    }))
    
    // 첫 번째 요소에 checked를 true로 만들어주는 로직
  }

  
// 1. 화면에 todo의 데이터를 출력한다.

  const todoList = todos.map(({id,task,done},i) => {

    // onChange{이 자리는 즉시실행자리(익명함수)}
    // handleDone 호출해서 id를 넘겨줘야함
    return(
      <li key={i}>                               
        <input type="checkbox" checked={done} onChange={() => {handleDone(id)}}/> 
        <span style>{task}</span>
      </li>
    )
  })
  

//   // // const todoList = todoData.map(({task},i) => <li key={i}>{task}</li>)
//   // console.log(todoList)

//   // // 2. todo의 상태(done)이 true 상태라면 
//   // // textdecoration: line-through 적용시킨다.
//   // const changeTodo = (e) => { 

    
//   // }


  // 반복문의 코드
  return (

    <ul>
      {todoList}
    </ul>
   
  );


export default CheckTodoContainer;