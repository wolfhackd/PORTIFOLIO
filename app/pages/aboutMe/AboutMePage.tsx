import { motion } from "motion/react";
import MenubarHome from "~/components/menubarHome";
import { list as TechnologyList } from "~/data/technology";

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

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">Minha Trajetória</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-justify text-base md:text-lg">
                            <p>
                                <span className="font-semibold text-white">2022:</span> Meu primeiro contato com código. Desenvolvi meu primeiro site com HTML e CSS, momento em que decidi me tornar desenvolvedor. Comecei a estudar por conta própria usando plataformas como YouTube e Udemy.
                            </p>
                            <p>
                                <span className="font-semibold text-white">2023:</span> Mergulhei profundamente na programação e me apaixonei por desenvolvimento back-end. Me matriculei no curso de Análise e Desenvolvimento de Sistemas, onde aprendi diversas linguagens de programação e explorei vários nichos da tecnologia.
                            </p>
                            <p>
                                <span className="font-semibold text-white">2025:</span> Completei meu curso de Análise e Desenvolvimento de Sistemas. Desde então, dedico-me a aprimorar minhas habilidades com foco em desenvolvimento back-end e buscar oportunidades na área de desenvolvimento de software.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-8">Arsenal Técnico</h2>
                        <div className="flex flex-wrap gap-8 justify-center">
                            {TechnologyList.map((tech, i) => {
                                const icon = tech?.icon;
                                return icon ? (
                                    <motion.div 
                                        key={i} 
                                        className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                                        whileHover={{ y: -5 }}
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${icon}`}
                                            alt={tech.name}
                                            className="size-10 md:size-12 mb-2 filter hover:brightness-150 transition-all"
                                            title={tech.name}
                                        />
                                        <span className="text-xs md:text-sm text-gray-400 text-center font-medium">{tech.name}</span>
                                    </motion.div>
                                ) : (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center"
                                        title={tech.name}
                                    >
                                        <div className="size-10 md:size-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center text-[10px] text-gray-300 mb-2 font-bold">
                                            ?
                                        </div>
                                        <span className="text-xs md:text-sm text-gray-400 text-center font-medium">{tech.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-8">Interesses Pessoais</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all">
                                <span className="text-2xl">🎵</span>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Músicas para Programar</h3>
                                    <p className="text-gray-400 text-sm">Sou fã de música eletrônica e lo-fi para manter o foco durante as sessões de desenvolvimento.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all">
                                <span className="text-2xl">💪</span>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Esportes & Calistenia</h3>
                                    <p className="text-gray-400 text-sm">Pratico calistenia e diversos outros esportes para manter a mente e o corpo em equilíbrio.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all">
                                <span className="text-2xl">📚</span>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Leitura & Desenvolvimento Pessoal</h3>
                                    <p className="text-gray-400 text-sm">Leio livros de autoajuda e biografias para entender a mentalidade de grandes CEOs e líderes.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all">
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Inovação & Empreendedorismo</h3>
                                    <p className="text-gray-400 text-sm">Tenho interesse em criar soluções inovadoras e explorar novas oportunidades no mercado de tecnologia.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-gradient-to-r from-cyan-900 to-blue-900 border border-cyan-700 rounded-2xl p-8 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Vamos Criar Algo Incrível Juntos?</h2>
                        <p className="text-gray-200 mb-8 text-base md:text-lg">
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