import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Button } from "../shared/Buttons"
import heroImage from "../../assets/hero.jpg"
import { Numbers } from "../shared/Numbers"
import {LinesBackground} from "../LinesBackground"

function Hero() {
    return (
        <section id="home" className="relative pt-32 lg:pt-36 scroll-mt-20">
            <LinesBackground/>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative flex flex-col items-center text-center lg:text-left lg:items-start max-w-3xl mx-auto lg:mx-0 w-full">
                        <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
                            Boost Your Business With <span className="text-transparent bg-clip-text bg-linear-0 from-blue-600 to-violet-80 ml-2">AI</span>
                        </h1>
                        <Paragraph className="mt-8"> 
                            Our AI SaaS platform seamlessly integrates with your existing workflows to deliver real-time insights, 
                            intelligent automation, and data-driven decision-making. Experience a future where your business
                            runs smarter, faster, and more efficiently.
                        </Paragraph>
                        <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                            <div className="flex sm:flex-row flex-col gap-5 w-full">
                                <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-bg-box rounded-full ease-linear focus-within:bg-bg-body focus-within:border-primary ">
                                    <span className="min-w-max pr-2 border-r border-box-border ">
                                        <i className="fa-regular fa-envelope-open"></i>
                                    </span>
                                    <input type="email" placeholder="mohab@gmail.com" className="w-full py-3 outline-none bg-transparent" />
                                    <Button className="min-w-max text-white">
                                        <span className="relative z-5">Get Started</span>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl w-full h-full max-h-75 lg:max-h-100 min-h-80 lg:min-h-112.5 relative flex items-center justify-center max-w-3xl mx-auto lg:mx-0 overflow-hidden ">
                        <img 
                            src={heroImage} 
                            alt="hero image" 
                            width={2350} 
                            height={200} 
                            className="w-full h-full object-cover shadow-2xl hover:scale-110 duration-300"
                        />
                    </div>
                </div>
            </Container>
            <Numbers></Numbers>
        </section>
    )
}

export default Hero