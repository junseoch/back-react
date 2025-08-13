import React from 'react';

const Callback = () => {

  // 앞에 있는 결과를 받아서 그 결과 새롭게 반환해주는 함수
  // 앞에 있는 결과를 받는다는 게 중요함

  // 값을 주는 것 : return

  // 함수 담아볼 것
  

  
  // const addNim2 = (name) => name + "님"  // return 생략
  // // return 하면 통째로가 리턴값!
  // // 값이니까 변수에 담을 수 있음 
  
  // const addNim = (name) => {
  //   return name + "님"   // return : 값을 주는 것!
  // }


  const addNim = (name, callback) => {
    callback(name + "님")  // 이름에 "님"을 붙여서 줌  // 주기전에 받을 준비부터
  }


  const addHello = (name, callback) => {
    callback(name + "안녕하세요")  // 익명함수가 사용되고 있음 
  }

  const printName = (name, callback) => {
    callback(name) // 값을 줌
  }


  function getData(result, callback) {
    callback(result) // callback함수에게 result 넘겨주겠다
  }

 
                  // 함수가 들어올자리
                  // 즉시 사용함수(익명함수)
                  // name + "님" 을 받음
  addNim("최준서", (name) => {  // 받은 name 가지고 뭘 할건데 -> addHello() 실행
    addHello(name, (result) => {
      printName(result, (result) => {
        getData(result, (result) => {
          console.log(result)
        })
      })
    })    
  }) 


  // 함수를 정의할 때는 넘겨주는 값을 알고 있음

  
 
  

  return (
    <div>
      
    </div>
  );
};

export default Callback;