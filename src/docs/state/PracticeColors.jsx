import React from 'react';

const PracticeColors = () => {


  const [result, setResult] = useState("")

  const onChangeColor = (e) => {
    setColor(e.target.value) // input 태그의 value
  } 

  const target = e.target.value

  if(target)

  return (
    <div>
      <p>{result}</p>
      <input type="text"/>
      <button onClick={onChangeColor}>빨간색 버튼</button>
      <button onClick={onChangeColor}>파란색 버튼</button>
    </div>
  );
};

export default PracticeColors;