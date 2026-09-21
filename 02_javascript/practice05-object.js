let win = 0;
let draw = 0;
let lose = 0;

//컴퓨터는 랜덤으로 가위/바위/보 중 하나를 선택
const choice = ["가위", "바위", "보"];

while (true) {
  const random = Math.floor(Math.random() * choice.length);
  const computer = choice[random];
  console.log(random);

  //사용자는 가위/바위/보 중 하나를 입력
  let player = prompt("가위/바위/보 중 하나를 입력하세요");
  if (player === null) {
    break;
  }

  //1.무승부
  if (computer === player) {
    console.log("무승부");
    draw++;
  }

  //2.사용자가 이기는 경우
  else if (
    (player === "가위" && computer === "보") ||
    (player === "바위" && computer === "가위") ||
    (player === "보" && computer === "바위")
  ) {
    console.log("승");
    win++;
  }

  //3. 사용자가 지는 경우
  else {
    console.log("패");
    lose++;
  }
}

//결과출력
alert(`게임을 종료합니다. ${win}승 ${draw}무 ${lose}패`);
console.log(`최종 결과: ${win}승 ${draw}무 ${lose}패`);
