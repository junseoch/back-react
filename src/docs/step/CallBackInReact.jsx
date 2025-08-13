import React, { useEffect, useRef } from 'react';

const CallBackinReact = () => {

  const divRef = useRef()


  useEffect(()=> {

    const changeColor = divRef.current.style.background = "blue"
    const changeHTML = divRef.current.innerHTML = "내용을 blue색상으로 변경"
  
    console.log(changeColor, changeHTML)
  })


  const onClick = (e,data) => {}  // 다른 data를 받고 싶을때



  return (

    // 리액트에서 el에 callback함수라는 결과를 준다고 했으니
    // 받기만 하면 됨
    <div ref={(el) => divRef.current = el}>  

                                    {/* onChange발생하면 e객체를 넘겨주겠다 -> 그걸 callback으로 받아라 */}

                                            {/* onClick 사용할 때 data넘겨줌
                                                원래 e가 들어오는 자리니까 e를 받아서 e넘겨줌     */}
      <input type="text" onChange={(e) => onClick(e, data)} />
      {/* <input type="text" onChange={(e) => {}} /> */}


     

    </div>
  );
};

export default CallBackinReact;