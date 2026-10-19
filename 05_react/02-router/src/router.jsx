//RouterProvieder : router를 연결-주소창의 주소에 맞는 화면을 그려준다
import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashbord.jsx";
import Cars from "./pages/Cars.jsx";

//주소(URL) <-> 화면 연결 = 객체 하나 { path, element}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
]);

export default router;
