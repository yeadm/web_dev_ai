/*
npm create vite 프로젝트명
-react, Javascript 선택

소스코드들은 src 폴더 안에 모두 들어있다

실행mpn run dev

화살표 함수 const 함수명 = () => {
  return
  }
  JSX(Javsscript XML) 자바 스크립트의 문법 확장
  ->html 같은 태그를 자바스크립트 안에 쓸 수 있게 한 문법
-.js /.jsx<-jsx 문법을 사용한다면 (html 태그가 들어가는 파일이라면)
jsx규칙
1. retrun 안은 부모 하나 : <></>
2. class 대신 clssname, for 대신 htmlfor
3.{변수 또는 계산식} 중괄호 안은 자바스크립트 값

usestate 대표적인 상태 관리 리액트에서 제공하는 도구(hook)

가상 DOM(virtual DOM) 리액트는 가상 dom을 사용하여 브라우저의 실제 dom과 상호작용
  */

import { useState } from "react";
import Counter from "./conponents/Counter.jsx";

const App = () => {
  //waiting=현재 값, setwaitiong]=값을 바꾸는 함수

  const [customer, setCustomer] = useState("");

  return (
    //fragmaen :  화면에 아무 태그도 만들지 않으면서 여러 요소를 하나로 묶어주는 투명한 포장지
    // <react.fragment> -> <>로 사용 가능
    <>
      <header className="header" style={{ color: "red" }}>
        <h1>정비노트</h1>
      </header>
      <main className="main">
        <Counter label="접수 대기" />
        <Counter label="정비 중" />
        <section className="screen">
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
          />
          <p>손님 : {customer} </p>
        </section>
      </main>
    </>
  );
};

export default App;
