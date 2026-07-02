import { useEffect, useRef } from "react";
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}
export const LinesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId: number;
        // إحداثيات الماوس داخل حاوية الهوم فقط
        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 180 // مدى دائرة تفاعل الماوس مع الخطوط
        };
        // ضبط حجم الكانفاس بناءً على حجم حاوية الهوم الحالية
        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };
        resizeCanvas();
        // الاستماع للحجم عبر الـ ResizeObserver لضمان الدقة
        const resizeObserver = new ResizeObserver(() => resizeCanvas());
        resizeObserver.observe(container);
        // تتبع حركة الماوس وتحديث الإحداثيات بالنسبة للكانفاس
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        // تصفير إحداثيات الماوس عند خروجه من جزء الهوم
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        // إنشاء مصفوفة النقاط
        const particles: Particle[] = [];
        const particleCount = 100;   // عدد النقط
        const connectionDistance = 120;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                radius: Math.random() * 2 + 3,  // حجم النقط
            });
        }
        // دالة التحريك والرسم
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            // 1. تحريك ورسم النقاط
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(52, 152, 219, 0.7)";
                ctx.fill();
            });
            // 2. رسم الخطوط بين النقاط وبعضها + ربطها بالماوس
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                // تفاعل النقطة مع الماوس إذا كان داخل النطاق
                if (mouse.x !== null && mouse.y !== null) {
                    const dxMouse = p1.x - mouse.x;
                    const dyMouse = p1.y - mouse.y;
                    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    if (distMouse < mouse.radius) {
                        const alphaMouse = (1 - distMouse / mouse.radius) * 0.4;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(52, 152, 219, ${alphaMouse})`; // خطوط تنجذب للماوس
                        ctx.lineWidth = 2;  // حجم الخطوط بالمؤشر
                        ctx.stroke();
                    }
                }
                // ربط النقاط ببعضها
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionDistance) {
                        const alpha = (1 - distance / connectionDistance) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(52, 152, 219, ${alpha})`;
                        ctx.lineWidth = 2;   // حجم خطوط الشبكة
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            resizeObserver.disconnect();
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    // الحاوية الأم التي سنقيد الحركة بداخلها
    return (
        <div ref={containerRef} className="lines-wrapper">
            <canvas ref={canvasRef} className="lines-canvas" />
        </div>
    );
};