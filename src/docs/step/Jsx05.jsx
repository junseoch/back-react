
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

// age를 상수 나이로 설정(임의)
// 19세 이상 초과 성인이면 "입장 가능"
// 성인이 아니면 "입장 불가"
// 성인과 관계없이 age가 짝수면 "당첨" 출력


import React from 'react';

// const Jsx05 = () => {

//   const age = 20
//   const isAdult = age > 19
//   const isEven = age % 2 === 0

//   const enterComponent = <p>"입장 가능"</p>
//   const NotEnterComponent = <p>"입장 불가</p>
  
//   const Ok = isAdult ? enterComponent : NotEnterComponent

//   const won = "당첨"
//   const lose = "당첨 실패"



//   return (
//     <div>
//       {isAdult ? enterComponent : NotEnterComponent}
//       {isEven ? won : lose}
//     </div>
//   );
// };

// export default Jsx05;



const Jsx05 = () => {

  const age = 22;
  const isAdult = age > 19
  const isEven = age % 2
  
  // const passComponent = <p>입장 가능</p>
  // const notPassComponent =  <p>입장 불가</p>
  // const luckyComponent = <p>당첨</p>
  // const unLuckyComponent = <p>꽝</p>

  const enter = isAdult ? <PassComponent/> : <NotPassComponent/>
  const win = isEven ? <LuckyComponent/> : <UnLuckyComponent/>

  // 태그도 변수에 담을 수 있음

  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;