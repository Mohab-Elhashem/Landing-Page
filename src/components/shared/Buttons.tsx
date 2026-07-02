interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onclick?: ()=> void;
}


export const Button = ({ onclick, children, className = "" }: ButtonProps) => {
    return (
        <button className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border-transparent bg-violet-600 text-white ${className}`} onClick={onclick}>{children}</button>
    )
}