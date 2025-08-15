// || 연산자 

import { use } from "react"

//  || 왼쪽값이 true면 그 값을 리턴, false면 || 오른쪽 값을 리턴 
//  

// undefined는 false


const getUserName = (userInput) => {
  const name = userInput || "손님";
  return "안녕하세요, " + name + "님!";
}


console.log(getUserName("민수"));
console.log(getUserName(""));
console.log(getUserName(undefined));
console.log(getUserName("0"));