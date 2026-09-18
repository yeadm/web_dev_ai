//1.매개변수(인풋) 없음, 리턴값(아웃풋) 없음
function sayHello() {
  console.log("안녕하세요!!");
}

sayHello(); //함수호출
sayHello();

//2.매개변수 있음, 리턴값 없음
function greet(name = "게스트") {
  console.log(`${name}님, 안녕하세요!`);
}
greet("나혜진");
greet("변예담");
greet();

//3. 매개변수 없음, 리턴값 있음
// return : 함수 호출 결과, 함수 종료
function getNumber() {
  return 1049;
}

console.log(getNumber());

//4. 매개변수 있음, 리턴값 있음
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
console.log(add(30, 50));

//변수의 유효범위(scope)
const num1 = 100; //전역변수
function sample1() {
  const num1 = 200; //지역변수 -> 함수 안에서만 유효
  console.log(`sample1 내부 : ${num1}`);
}
sample1();
console.log(`sample1 외부 : ${num1}`);

//선언적 함수(function declaration)
//호이스팅 : 선언 전에 호출 가능
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

//익명함수(function expression)
//함수 이름이 없음, 변수에 할당
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 8));

//화살표 함수(arrow function)
//function 대신 => (화살표) 사용
const divide = (a, b) => {
  return a / b;
};
console.log(divide(12, 3));

//콜백함수
function callFunc(callback) {
  console.log("함수 호출 전");
  callback();
  console.log("함수 호출 후!");
}
function call() {
  console.log("안녕하세요, 콜백 함수 호출!");
}
callFunc(call);

//배열 관련 콜백 함수들
const numbers = [1, 2, 3, 4, 5];
//for(let i = 0; i<numbers.length; i++){
//   console.log(numbers)
//}
//numbers.forEach((Value,index, array) => {
//   console.log(value,index, array)
//});
//foreach-배열의 각 요소마다 콜백 실행

//map 함수-각 요소를 콜백으로 변형해서 "새 배열"을 만들어 반환
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled);

//filter - 콜백이 true를 반환하는 요소만 골라서 "새 배열"을 만들어 반환
const even = numbers.filter((value) => {
  return value % 2 === 0;
});
console.log(even);

//reduce 배열의 각 값들을 누적하여 하나의 값으로 반환
//accumulator 누적된 값, value, index, array
const sum = numbers.reduce((acc, value) => {
  return acc + value;
}, 0); // acc = 0 초기값
console.log(sum);
