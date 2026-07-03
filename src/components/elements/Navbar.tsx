import { Container } from "../shared/Container"
import logo from "../../assets/logo.svg"
import { NavItem } from "../shared/NavItem"
import { BtnLink } from "../shared/BtnLink"
import { useAppDispatch, useAppSelector, toggleTheme } from "../../store/ThemeStore";
import {navLinks} from "../shared/NavLinks"

// عملت ارراي حطيت فيها اسامي الصفح عندي علشان اعرف اتنقل ليهم

export const Navbar = ()=>{
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.theme);
    return (
        <header className="sticky top-0 inset-x-0 z-100 bg-bg-body/80 backdrop-blur-md border-b border-box-border py-4">
            <Container>
                <nav className="w-full flex justify-between gap-6 items-center">
                    {/* logo */}
                    <div className="min-w-max flex items-center ">
                        <a href="" className="dark:bg-violet-500 rounded-2xl">
                            <img src={logo} alt="landing page logo" className="w-10 h-10 "/>
                        </a>
                        <div className="text-3xl font-semibold pl-2 bg-linear-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">AI-Boostي</div>
                    </div>
                    {/* links */}
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
                    absolute top-full left-0 lg:static lg:top-0 bg-bg-body lg:bg-transparent
                    border-x border-x-box-border lg:h-auto lg:border-x-0 h-0 overflow-hidden">
                        <ul className="border-t border-box-border lg:border-t-0 px-0 lg:px-0
                        pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-8
                        text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                            {navLinks.map((item , key)=>(
                                <NavItem href={item.href} text={item.text} key={key}/>
                            ))}
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0
                        px-6 lg:px-0 ">
                            <BtnLink href="#cta" text="Get Started" className="outline-none border-none"/>
                        </div>
                    </div>
                    {/* toggle buttom */}
                    <div className="min-w-max flex items-center gap-x-3">
                            <button className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer" onClick={() => dispatch(toggleTheme())}>
                                <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
                            </button>
                    </div>
                </nav>
            </Container>
        </header>
    )
}