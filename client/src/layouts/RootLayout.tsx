import { TopBar } from "../components/TopBar";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import RootLayoutStyles from "./RootLayout.styles";


//RootLayout is the layout of our App if a user is logged in
export const RootLayout = () => {
    return (
        <RootLayoutStyles>
            <div className="root__layout">
                {/* <Navigation /> */}
                <header className="header">
                    <nav>
                        {/*TopBar has a class of header*/}
                        <TopBar />
                    </nav>
                </header>
                {/* SideBar Component has a class of aside */}
                <SideBar />
                <main className="main">
                    {/* Outlet is the rest our routes*/}
                    <Outlet />
                </main>
            </div>
        </RootLayoutStyles>
    );
};