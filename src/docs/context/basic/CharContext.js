import { createContext } from "react";

// 변수를 하나 만든 것 -> createContext()

const CharContext = createContext({
  name: "홍길동"
})


export default CharContext