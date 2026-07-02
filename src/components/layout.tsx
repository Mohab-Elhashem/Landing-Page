import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/ThemeStore";

// وهنا هيكون موجود خصائص التصميم بتاعي زي مثلا عنوان الصفحة
interface layoutProps {
    title: string;
    children: React.ReactNode;  //وده معناه (أي محتوى ريآكت قابل للعرض) زي الأزرار، النصوص، أو كود صفحة كاملة
}


export const Layout = ({title ,children}: layoutProps)=>{
    // تغيير عنوان التبويب في المتصفح تلقائياً عند تغيير الصفحة
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