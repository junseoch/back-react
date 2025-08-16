import React from 'react';

const PracticeHobby = () => {

  
  const [hobby, setHobby] = useState("")
  const [style, setStyle] = useState({}) // style은 key, value형태의 객체


  const onChangeHobby = (e) => {
    const newHobby = e.target.value
    setHobby(e.target.value)

    if(newHobby === "축구"){
      setStyle({fontSize:"50px"})
    } else if(newHobby === "농구") {
      setStyle({...style, color:"blue"})
    }
  }


  return (
    <div>
      <p style={style}>{hobby}</p>
      <input type="text" onChange={onChangeHobby} />
    </div>
  );
};

export default PracticeHobby;