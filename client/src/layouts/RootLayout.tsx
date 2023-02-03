import { TopBar } from "../components/TopBar";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import RootLayoutStyles from "./RootLayout.styles";
import Dashboard from "../pages/Dashboard";


//RootLayout is the layout of our App if a user is logged in
export const RootLayout = () => {
    return (
        <RootLayoutStyles className="root__layout">
            {/*TopBar   <header className='TopBar'>*/}
            <TopBar className='header' />
            {/*SideBar  <aside className='aside'>*/}
            <SideBar className="aside" />
            <main className="main">
                {/* Outlet is the rest our routes*/}
                <Outlet />
            </main>
            <footer>
                <div></div>
            </footer>
        </RootLayoutStyles>
    );
};