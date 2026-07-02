interface BtnLinkProps {
    text: string;
    href: string;
    className?: string;
}


export const BtnLink = ({ text, href, className = "" }: BtnLinkProps) => {
    return (
        <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 transform transition duration-300 hover:scale-102 ${className}`}>
            <span className="relative z-10 text-white ">{text}</span>
        </a>
    )
}