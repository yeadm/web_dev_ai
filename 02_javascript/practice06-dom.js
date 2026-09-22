function updateTime() {
  //1.현재 날짜
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = days[now.getDay()];

  document.getElementById("date-display").innerText =
    `${year}-${month}-${date}-(${dayOfWeek})`;

  //2.현재 시간
  const hours = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("time-display").innerText = `${hours}:${min}:${sec}`;

  //3.남은시간
  const endOfYear = new Date(year, 11, 31, 23, 59, 59);
  const timeLeft = endOfYear - now;

  const leftDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const leftHours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const leftmin = Math.floor((timeLeft / (1000 * 60)) % 60);
  const leftSeconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("remain-display").innerText =
    `올해 남은 시간: ${leftDays}일 ${leftHours}시간 ${leftmin}분 ${leftSeconds}초`;
}

updateTime();
setInterval(updateTime, 1000);

const quotes = [
  {
    en: "God doesn't require us to succeed: he only requires that you try.",
    ko: "신은 우리에게 성공을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
  },
  {
    en: "Hold faithfulness and sincerity as first principles.",
    ko: "충심과 성실을 첫 번째 원칙으로 삼아라.",
  },
  {
    en: "Only actions give life strength; only moderation gives it a charm.",
    ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다.",
  },
  {
    en: "No one has ever made a difference by being like everyone else.",
    ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없다.",
  },
];
function wisdom() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomquotes = quotes[randomIndex];
  document.getElementById("wisdom-display").innerHTML =
    `${randomquotes.en} <br> ${randomquotes.ko}`;
}
wisdom();
setInterval(wisdom, 5000);

//배경색
function changeBackgroundColor() {
  const colors = ["#a8e6cf", "#d0edc1", "#ffefb6", "#ffaaa5", "#d7a4f2"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}

changeBackgroundColor();
setInterval(changeBackgroundColor, 3000);
