import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph"
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: [
                { label: "AI Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#security" },
                { label: "Integrations", href: "#integrations" },
                { label: "Changelog", href: "#updates" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "API Docs", href: "#docs" },
                { label: "Help Center", href: "#help" },
                { label: "Blog", href: "#blog" },
                { label: "Case Studies", href: "#cases" },
                { label: "System Status", href: "#status" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#about" },
                { label: "Careers", href: "#careers" },
                { label: "Press Kit", href: "#press" },
                { label: "Partners", href: "#partners" },
                { label: "Contact", href: "#contact" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Terms of Service", href: "#terms" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Cookies", href: "#cookies" },
                { label: "Compliance", href: "#compliance" },
            ],
        },
    ];
    const Social = ["github", "linkedin","twitter", "instagram"]
    return (
        <footer className="relative bg-bg-body border-t border-box-border text-heading-1">
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
                        <div className="col-span-2 flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-heading-1 font-bold text-xl">
                                <span className="bg-linear-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text text-3xl">AI</span>
                            </div>
                            <Paragraph className="max-w-85">
                                Automate your financial workflows, insights, and data-driven decision making with next-gen AI technology.
                            </Paragraph>
                            <div className="flex gap-4 mt-2">
                                {Social.map((item , key) => (
                                    <a key={key} href={`#${item}`} className="w-8 h-8 rounded-full border border-box-border flex items-center justify-center hover:bg-blue-300 hover:scale-150 duration-300 ">
                                        <i className={`fa-brands fa-${item}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                        {footerLinks.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <h4 className="font-semibold text-lg tracking-wider uppercase">
                                    {group.title}
                                </h4>
                                <ul className="flex flex-col gap-2.5 text-sm text-heading-3">
                                    {group.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <a href={link.href} className="hover:text-blue-500 duration-200">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            <div className="border-t border-box-border py-8 bg-bg-body">
                <Container>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                        <div>
                            &copy; {currentYear} Fintech SaaS. All rights reserved. Developed by <span className="text-blue-500">Mohab</span>
                        </div>
                        {/* Security Compliance Badges */}
                        <div className="flex items-center gap-4 text-heading-3">
                            <span className="flex items-center gap-1 border border-box-border px-2 py-1 rounded-2xl bg-bg-body">
                                <i className="fa-solid fa-shield-halved text-green-500"></i> PCI-DSS Compliant
                            </span>
                            <span className="flex items-center gap-1 border border-box-border px-2 py-1 rounded-2xl bg-bg-body">
                                <i className="fa-solid fa-lock text-blue-500"></i> 256-bit Encryption
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};