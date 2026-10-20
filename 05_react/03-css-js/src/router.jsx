//RouterProvieder : router를 연결-주소창의 주소에 맞는 화면을 그려준다
import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard.jsx";
import Cars from "./pages/Cars.jsx";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";

//주소(URL) <-> 화면 연결 = 객체 하나 { path, element}
//path: 주소창에서  localhost:5173 뒤에 오는 부분
//element : 매칭된 path 주소일 때 그릴 화면
//childern에서 첫 화면 ("/")은 index: true
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> },
      {path: "Cars", element:<Cars/>}
    ]
  },
  {path : "login", element: <Login/>},
  {
    path: "/cars",
    element: <Cars />,
  },
]);

export default router;

/*
  -SSR(Server Side Rendering) : 서버에서 화면을 그려내서 클라이언트에게 전달 -> next.js
  -CSR(Client Side Rendering) : 클라이언트에서 화면을 그려내는 방식(->React가 해당)
  -SPA(Single Page Application) : HTML 페이지가 하나뿐인 애플리케이션(->React가 해당)
*/
