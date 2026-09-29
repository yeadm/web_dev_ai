//web Storage - 
// setItem(키,값) : 저장, getItem(키) :가져오기, 
//removeItem(키) : 삭제, clear() : 전부 삭제
document.querySelector("saveSession").addEventListener("click", () => {
    sessionStorage.setItem("visit", "오늘 처음 방문");
});
document.querySelector("savelocal").addEventListener("click", () => {
    //Json.stringfy로 객체를 문자열로 바꿈
    localStorage("profile",JSON.stringify({name : "테스트," age : 10}));
});
const result = document.querySelector("#result")
document.querySelector("#readLocal").addEventListener("click", () => {
    //Json.parse로 문자열 -> 객체변환
   const profile =  JSON.parse(localStorage.getItem("profile"));
   result.textContent = profile.name; 
});

document.querySelector("#removeaLocal").addEventListener("click", () =>{
    localStorage.removeItem("profile");
});

document.querySelector("#clear").addEventListener("click",() => {
    localStorage.clear();
})
;