import { useEffect, useState } from "react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY >= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    if (!isVisible) return null;
    return (
        <button className="up-button" onClick={scrollToTop}>
            <i className="fa-solid fa-angles-up"></i>
        </button>
    );
};