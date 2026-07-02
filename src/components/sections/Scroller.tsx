import { useState, useEffect } from "react";

export const Scroller = () => {
    const [scrollWidth, setScrollWidth] = useState(Number(0))

    useEffect(() => {
        const handleScroll = () => {
            // الارتفاع الكلي - الارتفاع الحالي للشاشة
            const totalScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // المسافة من الاعلي 
            const scrollTop = document.documentElement.scrollTop;
            if (totalScrollableHeight > 0) {
                const percentage = (scrollTop / totalScrollableHeight) * 100;
                setScrollWidth(percentage);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div
            className="scroller"
            style={{
                width: `${scrollWidth}%`,
                height: "5px",
                backgroundImage: "linear-gradient(to right, #007bff, #8a2be2)",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                transition: "width 0.2s ease-out",
            }}
        />
    );
};
