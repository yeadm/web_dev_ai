//script 가 body 보다 먼저 (head) 있으면 아직 안 만들어진 요소를 찾다가 null
//DOMContentLoaded를 사용하면 HTML 파싱이 끝난 뒤 실행되도록 감싸 줌
window.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  console.log(h1);
});

//클릭 이벤트
const click = document.querySelector("#click");
click.addEventListener("click", () => {
  alert("클릭 이벤트 발생!");
  click.computedStyleMap.backgroundcolor = "hotpink";
});
const double = document.querySelector("#double");
double.addEventListener("dblclick", () => {
  alert("더블 클릭 발생!");
});

const right = document.querySelector("#right");
right.addEventListener("contextmenu", () => {
  //alert("우클릭!")
  event.preventDefault();
});

//마우스가 올리면 mouseenter
const hover = document.querySelector("#hover");
hover.addEventListener("mouseenter", () => {
  hover.style.backgroundColor = "lightblue";
  hover.textContent = "Mouse Enter!";
});
hover.addEventListener("mouseleave", () => {
  hover.style.backgroundColor = "navy";
  hover.textContent = "Mouse leave!";
});

const mouseDot = document.querySelector("#mouseDot");
mouseDot.addEventListener("mousemove", (e) => {
  mouseDot.style.left = ${event.clientX}px;
  mouseDot.style.top = ${event.clientY}px;
});

//스크롤 이벤트
const wheel = document.querySelector("#wheel");
const scroll = document.querySelector("#scroll");

document.addEventListener("wheel",(e)=>{
    console.log(e.deltaY);//위로 올라갈수록 마이너스, 아래로 내려갈수록 플러스
    if(e.deltaY<0){
        wheel.textContent = "휠을 위로 올림!";
    }else{
        wheel.textContent = "휠을 아래로 내림!"
    }

});
document.addEventListener("scroll", ()=>{
    const scrollHeight = document.documentElement.scrollHeight; //전체높이
    const innerHeight = window.innerHeight;//화면에 보이는 높이
    const scrollY = window.scrollY; //현재 스크롤 위치
    //scrollY + innerHeight === scrollHeight
    const totalheight =  scrollHeight- innerHeight;
    const width = (scrollY/totalheight) *100;
    scroll.style.width = `${width}`%;
});

//키보드 이벤트
const key = document.querySelector("#key");
const keyResult = document.querySelector("#keyResult");
//keydown, keyup, keypress
key.addEventListener("keydown", (e) => {
    keyResult.textContent = e.key;

});

const move = document.querySelector("movebox");
document.addEventListener("ketup", (e)=>{{
    if(e.key === "ArrowDown"){}
    y-= 50;
    else if(e.key === "Arrowup"){}
    else if(e)
     else if(e.key === "Arrowleft"){}
 else if(e.key === "Arrowright"){}
}});
mouseDot


Input.addEventListener("input",()=>{
    //input이 입력 될 때마다
inputResult.textcontent = inputResult.value;
});
const select = document.querySelector("#select")
const selectResult = document.querySelector("#selectRecult");
select.ariaDescribedByElements("change", (e)=>{
    console.log(e.target.value);
})

//슬라이드-swiper
new swiper(".swiper");
loop: true,
navigation : {
    nextEL.swiper
}