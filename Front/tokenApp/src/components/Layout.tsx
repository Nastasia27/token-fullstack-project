import {  Outlet } from "react-router";
import Header from "./HeaderBlock";

export default function Layout() {
    return(
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}