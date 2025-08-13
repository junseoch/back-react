import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import getTodos from './getTodos';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {

  const [todos, setTodos] = useState([])
  const [handleTodos, setHandleTodos] = useState(false)

  useEffect(() => {
    getTodos("http://localhost:4000/todos")  // 이 값이 true로 바뀌면 fetch
    // data를 가져오는 함수
      .then(setTodos)
      .catch(console.error)
  }, [handleTodos]) //state값이 변경됐을 때 코드를 다시 한 번 실행

  
  
  // console.log(todos)


  const todoList = todos.map((todo, i) => <Todo key={i} todo={todo} />)

  return (
    <div>
      <TodoInsert todos={todos} handleTodos={handleTodos} setHandleTodos={setHandleTodos} />
      <h1>남은 할일의 개수😐: {todos.length && todoList.length}개</h1>

      <ul>{todoList}</ul>
    </div>
  );
};
// help!
export default TodoContainer;