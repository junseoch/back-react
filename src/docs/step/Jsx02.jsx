// export const Jsx02 = () => {}

// export{ Jsx02 } // 하나만 내보냄


// return() 안에서는 html이기 때문에, 연산이 되지 않는다.
// 연산을 하기 위해서는 반드시 "{}" 중괄호로 묶어줘야한다.
const Jsx02 = () => {

  // name이 컴포넌트 에서 사용되는 변수라면 안에 선언
  const name = "홍길동"

  return ( 
    <> 
      <p>저의 이름은 {name}입니다.</p>
    </>

  )
}

export default Jsx02;