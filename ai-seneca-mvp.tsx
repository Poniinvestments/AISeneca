import React, { useState, useEffect } from 'react';

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inView, setInView] = useState(false);

  // Animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.animated-section');
    if (section) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-blue-950 text-white py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between relative">
        <h1 className="text-3xl font-bold z-10">AI SENECA</h1>

        <button
          className="md:hidden absolute top-6 right-4"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex w-full justify-between items-center mt-4 md:mt-0">
          <div className="flex space-x-8 text-lg">
            <a href="#services" className="hover:text-blue-200 transition duration-300">Servicios</a>
            <a href="#pricing" className="hover:text-blue-200 transition duration-300">Precios</a>
          </div>
          <div className="flex space-x-6 text-lg">
            <a href="#login" className="hover:text-blue-200 transition duration-300">Inicio de sesión</a>
            <a href="#register" className="hover:text-blue-200 transition duration-300">Registro</a>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown */}
      {dropdownOpen && (
        <div className="md:hidden bg-blue-950 text-white p-4 space-y-4 animate-fadeIn">
          <a href="#services" className="block hover:text-blue-200 transition duration-300">Servicios</a>
          <a href="#pricing" className="block hover:text-blue-200 transition duration-300">Precios</a>
          <a href="#login" className="block hover:text-blue-200 transition duration-300">Inicio de sesión</a>
          <a href="#register" className="block hover:text-blue-200 transition duration-300">Registro</a>
        </div>
      )}

      {/* Unified Section */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-800 to-gray-100 text-white py-12 px-6 animated-section">
        <div className={`max-w-6xl mx-auto w-full transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            {/* Fórmula a la izquierda */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="bg-blue-900 p-6 rounded-lg shadow-xl max-w-md mx-auto">
                <div className="space-y-6">
                  <p className="font-semibold text-xl text-center">Rentabilidad</p>

                  {/* Tres Fracciones con X entre las líneas */}
                  <div className="flex justify-between items-center gap-2">
                    {/* Beneficio / Ventas */}
                    <div className="flex-1 text-center">
                      <div className="font-medium">Beneficio</div>
                      <div className="border-b border-white pb-1 relative">
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-white font-semibold text-lg">×</div>
                      </div>
                      <div className="font-medium mt-1">Ventas</div>
                      <div className="mt-2 uppercase text-sm text-blue-300">Margen</div>
                      <div className="mt-2 text-white text-sm">C. Resultados</div>
                    </div>

                    {/* Ventas / Activos */}
                    <div className="flex-1 text-center">
                      <div className="font-medium">Ventas</div>
                      <div className="border-b border-white pb-1 relative">
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-white font-semibold text-lg">×</div>
                      </div>
                      <div className="font-medium mt-1">Activos</div>
                      <div className="mt-2 uppercase text-sm text-blue-300">Rotación</div>
                      <div className="mt-2 text-white text-sm">Izq. Balance</div>
                    </div>

                    {/* Activos / Capital */}
                    <div className="flex-1 text-center">
                      <div className="font-medium">Activos</div>
                      <div className="border-b border-white pb-1"></div>
                      <div className="font-medium mt-1">Capital</div>
                      <div className="mt-2 uppercase text-sm text-blue-300">Apalancamiento</div>
                      <div className="mt-2 text-white text-sm">Der. Balance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eslogan a la derecha */}
            <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 transition-transform duration-700 transform hover:scale-105">
                Alcanza todo tu potencial en compras
              </h2>
              <p className="text-base md:text-lg opacity-90 transition-opacity duration-500">
                Hasta un nivel que ni te imaginas que existe
              </p>
            </div>
          </div>

          {/* Analysis Section */}
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Numbered Steps */}
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-6">ANALIZA TU POTENCIAL</h3>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110">1</span>
                  <p className="text-gray-100 leading-relaxed">Regístrate gratis en la plataforma</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110">2</span>
                  <p className="text-gray-100 leading-relaxed">Introduce los datos requeridos que serán privados, protegidos y borrados al final</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110">3</span>
                  <p className="text-gray-100 leading-relaxed">La calidad de tus datos dará la calidad del resultado</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110">4</span>
                  <p className="text-gray-100 leading-relaxed">Se te mostrará GRATIS tu potencial de mejora</p>
                </li>
              </ol>
            </div>

            {/* White Box Content */}
            <div className="w-full md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl text-gray-900">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">
                  TUS DATOS MUESTRAN LA SITUACIÓN ACTUAL, NOSOTROS LA POTENCIAMOS
                </h4>
                <p className="text-xl text-gray-700 mb-4">
                  La calidad de tus datos históricos, junto con nuestras herramientas digitales y la experiencia de referentes mundiales, potenciarán el resultado de tu empresa.
                </p>
                <p className="text-base text-gray-600">
                  Alcanza el mejor Resultado, Balance y Flujo de Caja con la aplicación de nuestras propuestas concretas, reduciendo costes e inventarios, y mejorando el servicio a tus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8 px-6 md:px-12 text-center text-sm opacity-80">
        &copy; 2025 AI Seneca. Todos los derechos reservados.
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }

        .hover\\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};

export default App;