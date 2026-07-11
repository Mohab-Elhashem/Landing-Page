import { Container } from "../shared/Container"
import { Title } from "../shared/Title"

const logos = ["discord", "openai", "paypal", "spotify", "youtube"]
export const Brands = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="text-center max-w-3xl mx-auto py-5">
                    <Title>
                        Trusted by Industry Leaders
                    </Title>
                </div>
                <div className="w-full overflow-hidden relative py-4">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-bg-body to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-bg-body to-transparent z-10" />
                    <div className="flex w-max gap-4 animate-marquee">
                        {/* first group */}
                        <div className="flex shrink-0 items-center gap-4">
                            {logos.map((logo, key) => {
                                const imgUrl = new URL(`../../assets/logos/${logo}.png`, import.meta.url).href;
                                return (
                                    <div key={`original-${key}`} className="p-4 sm:p-5 rounded-xl bg-bg-body border border-box-border group shrink-0">
                                        <img
                                            src={imgUrl}
                                            alt={`${logo} logo`}
                                            width={100}
                                            height={60}
                                            className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0! group-hover:scale-105"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        {/* secound group */}
                        <div className="flex shrink-0 items-center gap-4">
                            {logos.map((logo, key) => {
                                const imgUrl = new URL(`../../assets/logos/${logo}.png`, import.meta.url).href;
                                return (
                                    <div key={`duplicate-${key}`} className="p-4 sm:p-5 rounded-xl bg-bg-body border border-box-border group shrink-0">
                                        <img
                                            src={imgUrl}
                                            alt={`${logo} logo`}
                                            width={100}
                                            height={60}
                                            className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0! group-hover:scale-105"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

