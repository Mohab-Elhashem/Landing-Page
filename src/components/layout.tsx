import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/ThemeStore";

interface layoutProps {
    title: string;
    children: React.ReactNode;
}


export const Layout = ({title ,children}: layoutProps)=>{
    useEffect(()=>{
        document.title = title
    },[title])

    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <main className="flex flex-col overflow-hidden">{children}</main>
                <Footer/>
            </div>
        </Provider>
    )
}