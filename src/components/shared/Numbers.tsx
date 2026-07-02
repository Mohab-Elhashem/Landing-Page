import { Container } from "./Container"

export const Numbers = ()=>{ 
    return (
        <section className="relative mt-12 md:mt-16">
            <Container className="flex justify-center items-center">
                <div className="mx-auto lg:max-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-bg-box
                                border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                                grid sm:grid-cols-2 md:grid-cols-4">
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">100+</h2>
                        <p className="text-heading-3 mt-2">AI Module Implemented</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">250+</h2>
                        <p className="text-heading-3 mt-2">Enterprise clients</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">99.9%</h2>
                        <p className="text-heading-3 mt-2">Uptime Guarantee</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">10+</h2>
                        <p className="text-heading-3 mt-2">Years of innovation</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}