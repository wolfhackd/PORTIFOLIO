import FooterNav from "./footerNav";


const FooterSection = () => {
  const geralLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Projetos', href: '/projetos' },
    
  ];
  const aboutMe = [
    { name: 'Tecnologias', href: '/' },
    { name: 'Experiência', href: '/' },

  ];
  const letMeTalk = [{ name: 'Contato', href: '/contato' }, { name: 'Redes Sociais', href: '/' }];

  return (
    <footer className="flex flex-col p-10 justify-between space-y-20 w-full bg-[#13315C] text-[#EEF4ED]">
      <div className="flex justify-between border-b border-[#EEF4ED] pb-6">
        <div className="flex items-center space-x-4 justify-start">
          <p className="font-bold">Mauro Leal</p>
        </div>
        <div className="flex justify-end space-x-10 ">
          <FooterNav title="Geral" links={geralLinks} />
          <FooterNav title="Sobre Mim" links={aboutMe} />
          <FooterNav title="Vamos Conversar" links={letMeTalk} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>
          Criado por{' '}
          <a href="https://www.instagram.com/mauroo_leal/" className="text-[#2B7FFF]">
            @Mauroo_Leal
          </a>
        </p>
        <p>Criado em outubro de 2025</p>
      </div>
    </footer>
  );
};

export default FooterSection;