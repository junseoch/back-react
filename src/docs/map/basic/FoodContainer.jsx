import React from 'react';
import Food from './Food';

const FoodContainer = () => {


  const foods = [
    {
      id : 1,
      name : "마라탕"
    },

    {
      id : 2,
      name : "육개장"
    },

    {
      id : 3,
      name : "라면"
    },

    {
      id : 4,
      name : "뚝불"
    }

  ]

    foods.map((food) => <li>{food.name}</li>)

  // li가 반복되고 있음

  // 인덱스 값으로 특정함
  // 태그들을 컴포넌트로 만들어서 사용
  // const foodList = foods.map((food, i) => <li key={i}>{food.name}</li>)

  // key={i} 사용이유
  // 순서가 없을 때 순서를 정렬하기 위해
  // i는 반복횟수
  // key도 임의로 지정
  // {i}는 변수


  // 리턴을 해줘야함
  // foods.map((food, i) => <Food key={i} food = {food}/>) 전체가 값!
  // const foodList = foods.map((food, i) => <Food key={i} food = {food}/>)
                              // 반복문이 처리되었을 때 바로 실행해야되기 때문에 콜백함수
                              // 익명함수

  // map을 가지고 순차적으로 배열의 값들을 받아올 때니까 함수사용
  

  return (
    <div>
      {/* map으로 화면단의 element 요소를 변환해줌 */}
      {foodList}

    </div>
  );
};

export default FoodContainer;