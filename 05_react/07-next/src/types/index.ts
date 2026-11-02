/*
TypeScript(TS): js+타입
-값이 어떤 종류인지(글자, 숫자, 객체모양, 등)인지 미리 적어두는 js
-브라우저는 TS를 못 읽음 -> NEXT가 실행 전에 타입을 지운 JS로 바꿔줌

기본타입 : string, numberm, boolean , null
type 이름 + {ㅇㅇㅇ} : 객체 모양
| : 또는 (string | null) ? : 없어도 되는 칸
| : 배열 car[], 함수 : (id, nummer) => woid
제네틱<> : 안에 들어갈 타입 알려주기
타입추론 : 처음 값을 보고 TS가 알아서 정함

*/
//설계도 : type이름 + (칸 :  타입{ }) -./ 이름은 대문자
//db 테이블 하나(화면에 맞춰서) -> type 하나 거의 필수 !

export type Car = {
  id: number;
  plate: string;
  name: string;
  car_type: string;
  production_year: number;
  fuel: string;
  mileage: number;
  service_count: number;
  latest_service_date: string | null;
  latest_service_item: string | null;
  // '|'은 또는 이라는 뜻
};

//등록, 수정할 때 받는 값
//pick은 원래 타입, "칸" | "칸" : > 필요한 칸만 뽑은 새 타입
export type CarInput = Pick<
  Car,
  "plate" | "name" | "car_type" | "production_year" | "fuel" | "mileage"
>;

//로그인 한 사람
export type User = {
  id: string;
  email: string;
  name: string;
  profile_image ? : string | null; // 물음표는 있어도 되고 없어도 된는 칸
};

//서버 함수가 화면에 돌려주는 결과 (실패하면 error, 성공하면 null)
export type ActionResult  = { error : string } | null; 


