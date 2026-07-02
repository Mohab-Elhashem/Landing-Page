import { Button } from "../shared/Buttons"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"

const pricingPlane = [
    {
        title: "Basic",
        Price: "$19/mo",
        features: [
            "Access to basic AI tools",
            "Limited data analytics",
            "Email support",
        ]
    },
    {
        title: "Pro",
        Price: "$49/mo",
        features: [
            "Everything in basic",
            "Advanced AI features",
            "Real-time analytics",
            "Priority email support",
        ],
        bestValue: true,
    },
    {
        title: "Enterprise",
        Price: "$99/mo",
        features: [
            "Everything in Pro",
            "Dedicated account manager",
            "Custom integrations",
            "24/7 premium support",
        ]
    }
]

export const Pricing =()=>{
    return(
        <section id="pricing" className="py-5 scroll-mt-20">
            <Container className="text-center">
                <Title>Pricing</Title>
                <Paragraph className="mt-4">Choose the plan that's right for your business.</Paragraph>
            </Container>
            <Container className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlane.map((plan ,key)=>(
                        <div key={key} className="relative group h-full">
                            <div className="bg-linear-to-r from-blue-600 to-violet-600 h-full rounded-3xl">
                                <div className="bg-bg-box border border-box-border rounded-3xl shadow-lg shadow-box-border p-8 flex flex-col h-full relative">
                                    {plan.bestValue && 
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-linear-to-r from-blue-600 to-violet-600">
                                            Best Value
                                        </div>
                                        
                                    }
                                    <h3 className="text-2xl font-semibold text-heading-1">{plan.title}</h3>
                                    <p className="mt-4 text-4xl font-bold text-heading-3">{plan.Price}</p>
                                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                                        {plan.features.map((feature , keyFeatures)=>(
                                            <li key={keyFeatures} className="flex items-center gap-2">
                                                <span className="pr-2 pt-2"><i className="fa-solid fa-check bg-green-500 p-1 rounded-xl text-white"></i></span>
                                                <span className="">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">Choose Plan</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}