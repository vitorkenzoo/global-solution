import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg text-center animate-pulse">
          Bem-vindo ao Meu Projeto!
        </h1>
      </div>

      {/* Conteúdo Principal */}
      <main className="flex flex-col items-center justify-center p-8 mt-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Explorar as Funcionalidades
        </h2>
        <p className="text-lg sm:text-xl text-center mb-6">
          Descubra o que podemos criar juntos!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Funcionalidade 1</h3>
            <p className="text-gray-600">
              Explore a funcionalidade 1 com recursos incríveis.
            </p>
            <Link
              href="/funcionalidades"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Saiba mais →
            </Link>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Funcionalidade 2</h3>
            <p className="text-gray-600">
              Descubra como a funcionalidade 2 pode ajudar.
            </p>
            <Link
              href="/funcionalidades"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Saiba mais →
            </Link>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Funcionalidade 3</h3>
            <p className="text-gray-600">
              Saiba mais sobre a funcionalidade 3 para otimizar sua vida.
            </p>
            <Link
              href="/funcionalidades"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full py-4 text-center bg-gray-800 text-gray-200 mt-auto">
        <p className="text-sm">
          © 2024 Meu Projeto - Criado com ❤️ usando Next.js e Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
