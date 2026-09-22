//HTML과 DOM의 차이가 무엇인가?
//문서 객체 가져오기
console.log(document);

//태그로 가져오기
console.log(document.getElementsByTagName("h1"));

//class로 가져오기
console.log(document.getElementsByClassName("testClass"));

//name으로 가져오기
console.log(document.getElementsByName("testName"));

//id로 가져오기
console.log(document.getElementById("testId"));

//queryselector(선택자) : 1개
//queryselectorall(선택자) : 여러 개의 배열

console.log(document.querySelector("#testID"));
console.log(document.querySelectorAll("div"));

//문서 객체 조작하기
//textcontent와 inner HTMAl의 차이는?
const divs = document.querySelectorAll("div");
//console.log(div);
divs[0].textContent = "<span>안녕하세요</span>";
divs[1].innerHTML = "<span>안녕하세요</span>";

//속성 조작
//const editdiv = doucument.querySelector("#testID")
//editDiv.setAttribute("data-test","테스트") //속성 추가 및 수정
//console.log(editDiv.getAttribute("data-test"));//속성 값 가져오기
//editdiv.removeattribute("data-tset");//속성 삭제

//텍스트 출력
const result1 = document.querySelector("#result1");
function printtext() {
  //result1.innerHTML = "안녕하세요";
  result1.textContent = "안녕하세요";
}

//input값 출력
const result2 = document.querySelector(".result2");
const customer = document.querySelector("#customer");
function printInputValue() {
  result2.textContent = customer.vlaue;
}

//길이 출력
const result3 = document.querySelector(".result3");
const text = document.querySelector("#text");
function stringLength() {
  result3.textContent = text.vlaue.length;
}

//스타일 조작
editdiv.style.color = "orange";
editdiv.style.backgroundColor = "yellow";

//div색상변경
const colorBox = document.querySelector("#colorBox");
const changeColor = () => {
  colorBox.style.backgroundColor = "yellow";
};

//classlist 조작
const div2 = document.querySelector("#testID2");
div2.classList.add("active"); //클래스 추가
console.log(div2.classList.contains("active")); //해당 클래스명을 가지고 있니?
div2.classList.remove("active"); //클래스 삭제
console.log(div2.classList.contains("active")); //false
div2.classList.toggle("active");

//클래스 토글
const result4 = document.querySelector("#result4");
const toggleclass = () => {
  result4.classList.toggle("toggle");
};

//문서 객체 추가/삭제
const testID3 = document.querySelector("#testID3");
//testID3. innerHTML = "<P>텍스트추가</p>"
const p = document.createElement("p"); //p태그 생성
p.textContent = "텍스트 추가"; //<p>텍스트 추가</p>
testID3.appendChild(p);


//문자열 분리, ul 출력
const la = document.querySelector("#la");
const result5 = document.querySelector("#result5");
const stringsplit
