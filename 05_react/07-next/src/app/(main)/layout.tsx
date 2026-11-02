import Header from "@/components/Header.jsx";
import { Children } from "react";

const Layout = ({Children} : {Children: React.ReactNode})  
=> { return (
    <>
    <Header/>
    {Children}
        </>
);
};

export default Layout;
