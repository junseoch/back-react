import React, { useState } from 'react';

const ProductContainer = () => {

  const [message, setMessage] = useState("")
  const [store, setStore] = useState({
    income : 0,
    productList : [
      {
        name : "노트북",
        price: 300000
      },
      {
        name : "키보드",
        price: 50000
      },
      {
        name : "마우스",
        price: 30000
      },
      {
        name : "스피커",
        price: 75000
      },
      {
        name : "마이크",
        price: 150000
      },
    ]
  }) 
  
  // 1. store의 상품들을 모두 li 태그로 화면에 출력한다.
  // 2. 사용자에게 input 태그로 구매할 상품을 입력을 받고 엔터를 쳐서
  // productList에 존재하는 상품이라면 productList에 해당 상품을 제거 후
  // 판매 가격만큼 store에 income을 증가시킨다.
  // 3. 거래가 잘 이루어졌는지 p태그를 이용해 출력한다
  // 정상적으로 판매가 완료되었을 경우 "거래 완료" 
  // 판매 목록에 구매할 상품이 없는 경우 "거래 불가"를 출력한다.
  // 모든 상품이 판매가 이루어졌다면 "판매 완료"를 출력한다.
  // 4. 해당 태그는 컴포넌트로 분리시킨다.
  const productList = store.productList.map((product, i) => (
    <li key={i}>
      <p>상품명: {product.name}</p>
      <p>가격: {product.price.toLocaleString()}원</p>
    </li>
  ))

  const buyProduct = (e) => {
    const {income, productList} = store;
    const product = e.target.value;
    const productNames = productList.map(({name}) => name)
    // const productNames1 = productList.map((e) => e.name)
    
    const index = productNames.indexOf(product)
    const isProduct = productNames.includes(product)
    
    if(e.key === 'Enter'){
      console.log(product)
      if(isProduct){
        setMessage("거래 완료")
        // productList에 상품을 제거
        setStore({
          income: income + productList[index].price, 
          productList: productList.filter((p, i) => i !== index)
        })
      }else if(!isProduct){
        setMessage("거래 불가")
      }else if(productList.length === 0){
        setMessage("판매 불가")
      }else {
        setMessage("")
      }
    }
  }
  
  return (
    <div style={{marginBottom: "400px"}}>
      <h1>상점 총수익: {store.income}</h1>
      <ul>
        {productList}
      </ul>
      <p>{message}</p>
      <input 
        type="text" placeholder='구매할 상품을 입력하세요.'
        onKeyDown={buyProduct}
      />
    </div>
  );
};

export default ProductContainer;