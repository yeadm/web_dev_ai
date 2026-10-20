//컴포넌트 : 함수 하나가 화면 한 조각, JSX를 return 하는 함수, 이름은 대문자로 시작
//props(properties) : 부모 컴포넌트가 자식 컴포넌트에게 넘겨 주는 값
//단방향 데이터 프름(리액트의 특징) : 데이터 흐름이 컴포넌트 계층 구조에서 위에서 아래로 흐른다(부모->자식 ok/ 자식->부모 x)

import { useState } from "react";

const Counter = ({label}) => {
    
  const [waiting, setwaiting] = usestate(0);
  return (
    <section className="screen">
      <h2>{label}</h2>
      <p>대기 중인 차량 : {waiting} </p>
      <button
        onClick={() => {
          setwaiting(waiting + 1);
        }}
      >
        {" "}
        한 대 접수
      </button>
      <button onClick={() => setwaiting(waiting - 1)}>한 대 출고</button>
      <button onClick={() => setwaiting(0)}>비우기</button>
    </section>
  );
};

export default Counter;
