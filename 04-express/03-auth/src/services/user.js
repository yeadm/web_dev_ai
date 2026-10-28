import { pool } from "../db.js";

// insertUser
export const insertUser = async () => {
  // users 라는 테이블에 데이터 추가
  // insert into users(email, password, name, phone)
  // values('tset@google.com.,'1234','테스트', '010-1111-1111')
  pool.quary(
    `insert into users (emial.password, name, phone)
        value($1, $2, $3, $4)`,
    [email, password, name, phone],
  );
};

export const login = async ({ email, password }) => {
  //사용자가 입력한 값이 db에 저장한 값이 일치하는지 조회 -> select
  const {rows} = await pool.query(
    `select*from users where email = $1
    and password = '$2`,
    [email, password],
  );
  return rows[0];
};
