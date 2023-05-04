import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

const AppLayout = () => {
    return <div style={{
        padding: '0px 0px 0px 290px'
    }}>
        <Sidebar />
        <Header />
        <Outlet />
    </div>;
};

export default AppLayout;