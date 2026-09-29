//정규표현식 - /패턴/.test(문자열) -> true/false
//replace, split 등 문자열 함수와 새용 가능
console.log(`^시작 :${/^H/.test("Hello")}`); //H로 시작
console.log(`$끝 : ${/o/.test("Hello")}`); //o로 끝
console.log(`\d 숫자 : ${/\d/.test("1")}`); //숫자 (0~9)
console.log(`\w 영문, 숫자,_: ${/^\w$/.test("_1")}`);
console.log(`.한문자 : ${/H.llo/.test("Hello")}`);
console.log(`* 0회 이상 : ${/abc*d/.test("abd")}`);
console.log(`+1회 이상 : ${/abc+d/.test("abccccccccccd")}`);
console.log(`?0~1회 : ${/abc?d/.test("abd")}`);
console.log(`[A-Za-z가-힣] 문자셋 : ${/^[A-Za-z가-힣]+$/.test("나 aBc다")}`)
console.log(`{2,4} 반복 : ${/^a[2,4]$/.test : ("aaa"")}`);
console.log("사과, 바나나, 오렌지.split(/,/)");
console.log("010-1234-5678".replace(/-/g,""));//global(전부
//입력할 때마다 검사
document.querySelector("phome]).addEventListner("Input",()=>())
console.log(else.target. value)

else{
    phonecheck.text
}