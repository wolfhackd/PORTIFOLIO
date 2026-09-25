import { motion } from "motion/react";
import FeaturesBlock from "~/components/personalIteressings";
import MenubarHome from "~/components/menubarHome";
import TechnologiesGrid from "~/components/TechnologiesGrid";
import { TimeLineAboutMe } from "~/components/timeLineAboutMe";


export default function AboutMePage() {
    return (
        <>
            <MenubarHome />

            <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 px-4 sm:px-8 lg:px-20 py-20">
                

                <div className="max-w-6xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-12 text-center"
                        >
                        Sobre Mim
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
                        >
                        <div className="flex-shrink-0">
                            <img 
                                src="/perfil_editado.jpeg" 
                                alt="Foto de Mauro Leal" 
                                className="rounded-lg shadow-2xl w-48 h-48 md:w-64 md:h-64 object-cover object-[50%_30%] border-2 border-cyan-400 border-opacity-30"
                                />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">Desenvolvedor Back-end</h2>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify mb-4">
                                Apaixonado por tecnologia e inovação, com experiência em diversas linguagens de programação e frameworks. 
                                Tenho um histórico sólido em desenvolvimento de software, com foco em soluções escaláveis e eficientes.
                            </p>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
                                Dedicado a aprender continuamente e aplicar as melhores práticas de desenvolvimento para criar produtos de alta qualidade. 
                                Sempre aberto a novos desafios e oportunidades para crescer profissionalmente.
                            </p>
                        </div>
                    </motion.div>

                    {/* TimeLine */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-16"
                        >
                        <TimeLineAboutMe />
                        <FeaturesBlock />

                        <TechnologiesGrid />

                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">Vamos Criar Algo Incrível Juntos?</h2>
                        <p className="text-gray-200 mb-8 text-base md:text-lg text-center">
                        Se você tem um projeto em mente ou quer conversar sobre desenvolvimento de software, estou pronto para colaborar!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors" onClick={() => window.location.href = '/'}>
                        Entre em Contato
                        </button>
                        <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors" onClick={() => window.location.href = '/projetos'}>
                        Veja Meus Projetos
                        </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}