//getTarget 맞춰야 하는 랜덤 숫자
//setInput 사용자한테 입력 받은 값
//judge 판단 결과
//showMessage 메세지 표시
//play 게임 진행

// 1. getTarget: 맞춰야 하는 랜덤 숫자 생성 함수
function getTarget() {
  return Math.floor(Math.random() * 100) + 1;
}

// 2. setInput: 사용자한테 입력을 받아 숫자로 반환하는 함수
function setInput() {
  const input = prompt("1부터 100사이의 숫자를 맞춰보세요");

  if (input === null) return null; // 취소 누른 경우
  if (input.trim() === "") return NaN; // 공백 입력한 경우

  return Number(input); // 숫자로 변환
}

// 3. judge: 입력값과 정답을 비교하여 결과 판단
function judge(userInput, target) {
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    return "INVALID";
  }
  if (userInput > target) {
    return "HIGH";
  } else if (userInput < target) {
    return "LOW";
  } else {
    return "CORRECT";
  }
}

// 4. showMessage: 판단 결과에 따라 알림창 출력
function showMessage(result, count) {
  if (result === "INVALID") {
    alert("제대로 입력해주세요 (1~100 사이의 숫자)");
  } else if (result === "HIGH") {
    alert("해당 숫자보다 작습니다");
  } else if (result === "LOW") {
    alert("해당 숫자보다 큽니다");
  } else if (result === "CORRECT") {
    alert(`정답입니다! ${count}번 만에 맞추셨습니다.`);
  }
}

// 5. play: while 문을 활용해 정답을 맞출 때까지 무한 반복하는 핵심 함수
function play() {
  const target = getTarget(); // 정답 생성
  let count = 0; // 시도 횟수

  while (true) {
    const userInput = setInput(); // 사용자 입력

    // [취소] 누르면 while 문 탈출
    if (userInput === null) {
      alert("게임을 취소하셨습니다.");
      break;
    }

    count++; // 시도 횟수 증가

    const result = judge(userInput, target); // 판정
    showMessage(result, count); // 알림창 출력

    // 정답을 맞췄으면 while 문 탈출
    if (result === "CORRECT") {
      break;
    }
  }
}

// 🚀 실행
play();
