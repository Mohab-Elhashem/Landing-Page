interface ContainerProps{
    children: React.ReactNode;
    className?: string;  // علشان لو عايز اضيف خواص تانية من الخارج
}
// الكونتيرنر دة عبارة عن حاوية فيها شوية خواص لو عايز استخدمها في اي مكان
export const Container = ({children , className = ""}: ContainerProps)=>{ // القيمة الفاضية علشان ميحصلش مشاكل لو مضافش كلاسات من الخارج    
    return (
        <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
            {children}
        </div>
    )
}