import Header from "./Header";
import { Outlet } from "react-router";
//Outlet : 들어오는 주소에 맞는 페이지가 들어올 빈 자리
//----> router.jsx의 chlidren으로 들어간 컴포넌트
// /-> <Dashboard/>가 outlet 자리에
// /cars -> <cars/>가 outlet 자리에

//모든 페이지가 같이 쓰는 틀
const Layout = () => {
    return <>
    </Header>
    </Outlet>
    </>;
};
export default Layout;
