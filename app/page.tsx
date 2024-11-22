import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-light-gray text-primary min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-white shadow-lg py-4 px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          {/* Logo da empresa */}
          <Image
            src="/img/logo.png"
            alt="Logo da RescueEnergy"
            width={60}
            height={60}
            className="rounded-full border border-gray-300"
          />
        </div>
        {/* Botão de menu */}
        <button className="menu-button"></button>
      </header>

      {/* Barra Divisória */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1 w-full"></div>

      {/* Conteúdo Principal */}
      <main className="flex flex-col items-center justify-center py-12">
        <section className="max-w-5xl bg-white shadow-lg rounded-lg px-8 py-12 flex flex-col md:flex-row items-center gap-12">
          {/* Texto principal */}
          <div className="flex-1 text-left">
            <h2 className="text-5xl font-bold text-blue-600 mb-6">
              Transformando o seu dia-a-dia em energia elétrica.
            </h2>
            <p className="text-xl text-gray-600">
              RescueEnergy, transformando o seu movimento em energia elétrica
              para um futuro sustentável.
            </p>
          </div>
          {/* Imagem principal */}
          <div className="flex-1">
            <Image
              src="/img/PisoGeradorDeEnergia.png"
              alt="Piso gerador de energia"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8">
          {/* Redes sociais */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/LogoWhatsapp.png"
                alt="WhatsApp"
                width={30}
                height={30}
                className="filter brightness-0 invert"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/LogoInstagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="filter brightness-0 invert"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/LogoGmail.png"
                alt="Email"
                width={30}
                height={30}
                className="filter brightness-0 invert"
              />
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 RescueEnergy. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
