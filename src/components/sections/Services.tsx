import { Service } from "../cards/Service";
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"


const services = [
    {
        title: "Intelligent Automation",
        description: "Streamline processes and reduce manual tasks.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
            </svg>
        ),
    },
    {
        title: "Real‑Time Analytics",
        description: "Gain actionable insights as events unfold.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
            </svg>
        ),
    },
    {
        title: "Predictive Insights",
        description: " Anticipate trends and mitigate risks before they occur.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
            </svg>
        ),
    },
];

export const Services = ()=>{
    return (
        <section id="services" className="py-10 scroll-mt-20">
            <Container className="space-y-10 md:space-y-12 ">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Our AI Services</Title>
                    <Paragraph>
                        Unlock the potential of advanced machine learning, natural language processing, and predictive analytics. Our services include:
                    </Paragraph>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service , key)=>(
                        <Service key={key} title={service.title} description={service.description} icon={service.icon}></Service>
                    ))}
                </div>
            </Container>
        </section>
    )
}