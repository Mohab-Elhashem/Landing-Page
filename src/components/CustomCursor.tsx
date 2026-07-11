
import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const circleRef = useRef<HTMLDivElement | null>(null);
    const dotRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const circle = circleRef.current;
        const dot = dotRef.current;
        if (!circle || !dot) return;
        const moveCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
        };
        window.addEventListener("mousemove", moveCursor);
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