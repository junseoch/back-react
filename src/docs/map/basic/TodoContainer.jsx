import React from 'react';

const TodoContainer = () => {


    const todoData = [
    { id: 1, task: "React 공부하기", done: false },
    { id: 2, task: "운동하기", done: true },
    { id: 3, task: "장보기", done: false },
    { id: 4, task: "점심 먹기", done: false },
    { id: 5, task: "코딩하기", done: true },
  ]
  // 배열에서 각각의 요소들을 li로 바꿈(Map!!)



  // 1. todoData를 이용해서 화면에 done이 true인 todo데이터만 출력하기
  // done === true인 조건 filter
  // 그 다음 map


  // map을 사용해서 {task}를 li {task}로 리턴
  // done이 true만 filter
  
// .filter(item => item.done)  // 기본 방식
// .filter(({ done }) => done) // 구조 분해 할당

  // {task}도 원래는 item.task
    const completeTodoList =  todoData.filter(({done}) => done)
    .map(({task},i) => <li key={i}>{task}</li>)

    // <li key={0}>운동하기</li>
    // <li key={1}>코딩하기</li>


  return (
      <ul>
        {completeTodoList}
      </ul>
  );

};


export default TodoContainer;