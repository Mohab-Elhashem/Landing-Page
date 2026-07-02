import { useEffect, useState } from "react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            // إذا نزل المستخدم أكثر من 1000 بكسل، اظهر الزر
            if (window.scrollY >= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        // الاستماع لحدث التمرير (Scroll)
        window.addEventListener("scroll", toggleVisibility);
        // تنظيف الـ Listener عند عمل unmount للمكون
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    // دالة الصعود للأعلى بسلاسة عند الضغط
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    // إذا كانت الحالة false لا تقم برندر الزر نهائياً في الـ DOM
    if (!isVisible) return null;
    return (
        <button className="up-button" onClick={scrollToTop}>
            <i className="fa-solid fa-angles-up"></i>
        </button>
    );
};