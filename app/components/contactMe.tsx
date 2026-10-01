import { ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

type ContactMeProps = {
  variant?: 'button' | 'editorial';
  label?: string;
};

export default function ContactMe({ variant = 'button', label }: ContactMeProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === 'editorial' ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex cursor-pointer items-center gap-2 border-b-2 border-black pb-0.5 text-sm font-black uppercase tracking-[0.18em] text-black transition-colors hover:border-[#F5E642] hover:text-neutral-800"
        >
          {label ?? 'Vamos conversar'}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      ) : (
        <Button
          className="group relative cursor-pointer overflow-hidden border-2 border-black bg-black text-white hover:bg-[#F5E642]"
          size={'lg'}
          onClick={() => setOpen(true)}
        >
          <span className="pointer-events-none absolute inset-0 z-0 -translate-x-full bg-[#F5E642] transition-transform duration-500 ease-out group-hover:translate-x-0" />

          <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
            {label ?? 'Vamos Conversar'}
            <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-[6000] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <div className="absolute inset-0" onClick={() => setOpen(false)} />

            {/* modal */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-h-[90dvh] w-full max-w-xl overflow-y-auto border-2 border-black bg-[#d4d4d4] p-6 shadow-[8px_8px_0_#F5E642] sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:36px_36px]"
              />
              {/* Header */}
              <div className="relative mb-5 flex items-center justify-between border-b-2 border-black pb-4">
                <h2 className="font-display text-3xl uppercase leading-none text-black sm:text-4xl">Conecte-se comigo</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="rounded-none text-black hover:bg-[#F5E642]"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="quickConection" className="relative gap-5">
                <TabsList className="grid h-auto w-full grid-cols-2 rounded-none bg-black p-1">
                  <TabsTrigger value="quickConection" className="h-10 rounded-none text-white hover:bg-black hover:text-[#F5E642] data-active:bg-[#F5E642] data-active:text-black">Conexão rápida</TabsTrigger>
                  <TabsTrigger value="form" className="h-10 rounded-none text-white hover:bg-black hover:text-[#F5E642] data-active:bg-[#F5E642] data-active:text-black">Formulário</TabsTrigger>
                </TabsList>

                {/* Quick Connect */}
                <TabsContent value="quickConection" className="mt-0 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <Button variant="outline" className="h-11 rounded-none border-2 border-black bg-transparent text-black hover:bg-black hover:text-[#F5E642]">
                    <a
                      href="https://www.linkedin.com/in/mauro-leal-b1134425a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="h-11 rounded-none border-2 border-black bg-transparent text-black hover:bg-black hover:text-[#F5E642]">
                    <a
                      href="https://github.com/wolfhackd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="h-11 rounded-none border-2 border-black bg-transparent text-black hover:bg-black hover:text-[#F5E642]">
                    <a
                      href="https://instagram.com/codeway__"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
                    </a>
                  </Button>
                </TabsContent>

                {/* Form */}
                <TabsContent value="form" className="mt-0 text-black">
                  <p className="mb-4 text-sm">Envie uma mensagem direta para meu e-mail:</p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                      const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                      const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
                        .value;

                      const subject = encodeURIComponent(`Contato de ${name}`);
                      const body = encodeURIComponent(
                        `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
                      );

                      window.location.href = `mailto:mauro.costa.12.j@hotmail.com?subject=${subject}&body=${body}`;
                    }}
                    className="mx-auto flex max-w-md flex-col gap-3 text-left"
                  >
                    <label htmlFor="contact-name" className="text-sm font-bold uppercase tracking-wider">Nome</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="w-full border-2 border-black bg-white p-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#F5E642]"
                    />

                    <label htmlFor="contact-email" className="text-sm font-bold uppercase tracking-wider">E-mail</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full border-2 border-black bg-white p-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#F5E642]"
                    />

                    <label htmlFor="contact-message" className="text-sm font-bold uppercase tracking-wider">Mensagem</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Escreva sua mensagem aqui..."
                      required
                      className="h-32 w-full resize-none border-2 border-black bg-white p-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#F5E642]"
                    />

                    <Button
                      type="submit"
                      className="mt-2 h-11 rounded-none border-2 border-black bg-black font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#F5E642] hover:text-black"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}