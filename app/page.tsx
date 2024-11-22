import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-4">
              <Image
        src="/img/logo.png"
        alt="RescueEnergy Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
          <h1 className="text-xl font-bold">RescueEnergy</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/sobre" className="hover:text-blue-500 transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-blue-500 transition-colors">
            Contato
          </Link>
        </nav>
        <button className="text-gray-700 text-2xl md:hidden">&#9776;</button>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex flex-col items-center justify-center p-8 mt-8">
        <section className="max-w-4xl bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Transformando o seu dia-a-dia em energia elétrica.
            </h2>
            <p className="text-lg text-gray-600">
              RescueEnergy, transformando o seu movimento em energia elétrica
              para um futuro sustentável.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/img/sample-image.jpg" // Substitua pelo caminho correto da imagem
              alt="Piso gerador de energia"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="w-full bg-black text-white py-6 mt-auto">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-4">
            <Image
              src="/img/ImgRescueEnergy.jpeg" // Certifique-se de que o caminho está correto
              alt="RescueEnergy Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h2 className="text-lg font-semibold">RescueEnergy</h2>
          </div>

          {/* Links Úteis */}
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
            <Link href="/sobre" className="hover:text-gray-100 transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-gray-100 transition-colors">
              Contato
            </Link>
            <Link href="/politica" className="hover:text-gray-100 transition-colors">
              Política de Privacidade
            </Link>
          </div>

          {/* Ícones Sociais */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/img/whatsapp-icon.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/img/instagram-icon.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image src="/img/email-icon.svg" alt="Email" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Linha e Direitos Reservados */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 RescueEnergy. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
