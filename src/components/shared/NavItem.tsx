// دة علشان استخمدمة مع الماب داخل الليست مع عدم التكرار
interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({href , text}: NavItemProps)=>{
    return (
        <li className="hover:text-violet-600 hover:scale-150 duration-300">
            <a href={href}>{text}</a>
        </li>
    )
}