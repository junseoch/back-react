import React from 'react';

// 부모로부터 message와 printMessage 함수를 props로 받음
const PropsComponentSimple = ({ message, printMessage }) => {
  // 컴포넌트가 렌더링될 때 props로 받은 함수 실행
  printMessage(message);

  return (
    <div>
      <p>메시지: {message}</p>
      <button onClick={() => printMessage("버튼 클릭됨!")}>
        메시지 출력
      </button>
    </div>
  );
};

export default PropsComponentSimple;
