  /*
    사람{
        이름, 나이, 사는 곳, 
        특징들 => 변수

        일어난다, 밥먹는는다, 씻는다, 옷 입는다, 나간다
        행동들 => 함수(기능)
    }  
    
    */
//변수끼리 서로 관련이 있다는 게 보이지 않음
const name ="성시원";
const age = 10;
const addr = "서울";

//배열은 서로 관련이 있다는 것 O, 각 값들이 뭘 의미하는지는 모름
const personArr=["성시원", 10, "서울"];

//객체
const person = {
//변수 (키 : 값)
name :  "성시원",
age : 10,
addr : "서울"
//함수 ( )\
}

person.hello=function(){
    //this : 본인자체
    console.log(`안녕하세요,'${this.age} 살 입니다.`);
}

//빈 객체와 함수의 속성 추가
console.log(person);
console.log(person.name) ;
person.hello()

const person1 = {}
person1.name = "홍순법";
person1["age"] = 9; 
person1. hello = function(){
    console.log(`나는 ${this.name}이고, 나이는 ${this.age}살이야`)
}
person1.hello();

const person2 = {
    name : "나혜진"
    //hello : function() {console.log(`익명함수 : ${this.name}`)
},//익명함수는 hello(){}축약가능
    

const person3 = {
    name : "김미래"
    //객체 함수로 화살표 함수 비권장
    //hello : () => {},
    console.log(this) ; //전역 객체인 window
    console.log(`화살표 함수 : ${this.name}`)

}

person3.hello();
person.hello();

//객체 구조분해할당
cosnt {name : name1 , age : age1 } = person1
console.log(name1, age1); 

//생성자 함수,클래스 -> 변수와 함수는 소문자, 클래스는 대문자!
function person(name){
    this.name = name; 
    this.age = age;
    this. hello = function(){
        console.log(`안녕? ${this.name}야, 나이는 ${this.age}살이야`)
   }
}

const p1 = new person("김진아", 5);
p1.hello();

//함수 형식 보다는 클래스 형식을 더 사용
class person2{
    //객체 생성 시 호출
    constructor(name, age){
        this.name = name ; 
        this. age = age ;        
    }
    hello(){
        console.log(`안녕? ${this.name}야, 나이는 ${this.age}살이야`)} 

}

const p2 = new person2 ("김소연", 2);
p2.hello();

//내장 객체
//set-중복제거용
const arr = [1,2,2,3,3,3,4,4,4,5];
const unique = new set(arr); 
console.log(unique) ; 
//다시 배열로
console.log([...unique]);

//math - 계산용 (수학적인 것들)
console.log(Math.max(5,7,-1,-8))//최대값
console.log(Math.min(5,7,-1,-8))//최소값
console.log(Math.round(2.897))//3 반올림
console.log(Math.floor(2.897))//2 내림
console.log(Math.ceil(2.897))//3 올림
console.log(Math.random());//0~1까지 소수점 포함의 랜덤값

//1~10까지의 랜덤 숫자 필요

//0 <= math.random() <1
//*10
//0 <=math.random()*10 < 10
console. log(Math,random()*10);
//math.floor()
console.log(Math.floor(Math.random()*10)); //0~9
//+1
//1 <=math.random()*10 +1 < 11
console.log(Math.floor(Math.random()*10+1)); //1~10

//5~15까지의 랜덤숫자
0 <= math <1
console.log(Math.floor(Math.random()*11)+5)

//date 객체;
const now = new Date();
console.log(now);
//getMonth : 0~11월 
console.log(`${now.getFullYear()}년 
${now,getMOnth()+1}월
${now.getdate()}일`);

//const date = new date(2027,0,28,14,20,0)
const date = new date ("2027-01-28T14:20:00");
console.log(date.tolocaldatesting("ko=kr"));

//Timer
//1000=1초
//일정 시간 후 1회 실행
settimout(()=>{
    console.log("3초 후 실행!")
}, 3000)

//일정 시간마다 반복 실행
let sec = 0;
setInterval(() => {
    console.log(`${++sec}초!`);
}, 1000);

//Json(jacascript object Notation)
//서버에서 클라이언트로 Json 객체로 통신(localstorage)
//객체 - > 문자열
const jsonsrt = JSON.stringify(person); 
console.log(typeof jsonstr); //string
//문자열-> 객체
const jeonobj = jsonsrt.parse(jsonstr);
console.log(typeof jsonobj);//object

