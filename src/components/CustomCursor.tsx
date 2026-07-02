
import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const circleRef = useRef<HTMLDivElement | null>(null);   //هنا استخدمت الuseREf علشان امسك قيمة عندي واديتها نوع بالtypescript
    const dotRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const circle = circleRef.current;
        const dot = dotRef.current;
        if (!circle || !dot) return;
        // تتبع حركة الماوس وتحديث مكان الـ div مباشرة عبر الـ DOM لسرعة الأداء
        // دالة لتحديث مكان الدائرة والنقطة
        const moveCursor = (e: MouseEvent) => {
            // إحداثيات الماوس
            const { clientX: x, clientY: y } = e;
            // تحديث مكان الدائرة
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            // تحديث مكان النقطة
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
        };
        //  الاستماع لحركة الماوس في الصفحة فقط
        window.addEventListener("mousemove", moveCursor);
        // تنظيف الـ Event Listeners عند مسح المكون من الذاكرة (Clean up)
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);
    return (
        <>
            <div ref={circleRef} className="custom-cursor-circle" />
            <div ref={dotRef} className="custom-cursor-dot" />
        </>
    );
};