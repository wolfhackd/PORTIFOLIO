import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import ContactMe from "~/components/contactMe";
import FeaturesBlock from "~/components/personalIteressings";
import MenubarHome from "~/components/menubarHome";
import TechnologiesGrid from "~/components/TechnologiesGrid";
import { TimeLineAboutMe } from "~/components/timeLineAboutMe";

export default function AboutMePage() {
    return (
        <>
            <MenubarHome adaptive />
            <main className="min-h-screen bg-[#d4d4d4] text-black">
                <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-12 sm:pb-28 sm:pt-36 md:px-16 lg:px-24">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
                    />
                    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65 }}
                                className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]"
                            >
                                Minha história
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 36 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.82]"
                            >
                                SOBRE
                                <br />
                                MAURO
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mt-8 max-w-xl border-t-2 border-black pt-5"
                            >
                                <h2 className="text-lg font-black uppercase sm:text-xl">Desenvolvedor Back-end</h2>
                                <p className="mt-3 text-base leading-relaxed text-black/70 sm:text-lg">
                                    Apaixonado por tecnologia e inovação, crio soluções de software escaláveis e eficientes. Estou sempre aprendendo, experimentando e aberto a novos desafios.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                            className="relative mx-auto w-full max-w-sm md:ml-auto"
                        >
                            <div aria-hidden className="absolute inset-3 translate-x-3 translate-y-3 bg-[#F5E642]" />
                            <img
                                src="/perfil_editado.jpeg"
                                alt="Foto de Mauro Leal"
                                className="relative aspect-[4/5] w-full border-2 border-black object-cover object-[50%_30%] grayscale-[15%]"
                            />
                            <span className="absolute -bottom-4 -left-4 bg-black px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                                Software development
                            </span>
                        </motion.div>
                    </div>
                </section>

                <section className="border-y-2 border-black/10 bg-white/35 px-6 py-20 sm:px-12 sm:py-24 md:px-16 lg:px-24">
                    <div className="mx-auto max-w-6xl">
                        <TimeLineAboutMe />
                    </div>
                </section>

                <FeaturesBlock />

                <section className="border-y-2 border-black/10 bg-white/35 px-6 py-16 sm:px-12 sm:py-20 md:px-16 lg:px-24">
                    <TechnologiesGrid />
                </section>

                <section className="relative overflow-hidden px-6 py-20 sm:px-12 sm:py-24 md:px-16 lg:px-24">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="relative mx-auto max-w-6xl border-t-2 border-black pt-8"
                    >
                        <p className="mb-4 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
                            Próximo passo
                        </p>
                        <h2 className="font-display text-5xl leading-[0.9] sm:text-7xl">TEM UM PROJETO EM MENTE?</h2>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                            Vamos transformar sua ideia em uma solução bem construída.
                        </p>
                        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
                            <ContactMe variant="editorial" label="Falar sobre um projeto" />
                            <Link
                                to="/projetos"
                                className="group inline-flex items-center gap-2 border-b-2 border-black pb-0.5 text-sm font-black uppercase tracking-[0.12em] transition-colors hover:border-[#F5E642] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Ver projetos
                                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    )
}