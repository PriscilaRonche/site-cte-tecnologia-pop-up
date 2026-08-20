import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, ArrowUp, Zap } from 'lucide-react';
import Home from './pages/Home';
import ModalEvent from './components/ModalEvent';

export default function App() {
  const whatsappNumber = "5511992426477";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Detect scroll for header shading and scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close mobile drawer when route changes or selection triggers
  const handleNavClick = (anchorId: string) => {
    setIsMenuOpen(false);
    
    // Allow React Router DOM cycles to finish if applicable
    setTimeout(() => {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#020b1e] flex flex-col font-sans text-slate-200 antialiased relative selection:bg-secondary selection:text-primary-dark overflow-x-hidden">
      
      {/* Immersive Glowing Orbs in Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* 1. TOP BAR (INFO) - Hidden on smaller phones */}
      <div className="bg-[#010614] text-slate-400 py-2.5 text-xs border-b border-white/5 font-semibold hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-secondary" /> Rua Hermeto Lima, 135 - Vila Alpina, São Paulo - SP
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-secondary" /> Seg-Sex: 10:00 - 18:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1134733196" className="hover:text-secondary transition-colors text-slate-300">
              <Phone className="w-3 h-3 text-secondary inline-block mr-1" /> (11) 3473-3196
            </a>
            <span className="text-slate-700">|</span>
            <a 
              id="header-wa-topbar"
              href={`https://wa.me/${whatsappNumber}?text=Olá%20CTE%20Tecnologia,%20estou%20entrando%20em%20contato%20através%20do%20site.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline flex items-center gap-1"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i> WhatsApp Suporte
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (STICKY NAVIGATION) */}
      <header id="header-main" className={`fixed top-0 md:top-auto z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#020b1e]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/10 py-3' 
          : 'bg-transparent md:bg-white/5 backdrop-blur-sm border-b border-white/5 py-4 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#inicio" onClick={() => handleNavClick('inicio')} className="flex items-center gap-2.5 group">
            <img 
              src="https://res.cloudinary.com/dooq2eage/image/upload/c_auto,h_720,w_720/e_background_removal/Postagens_1200x900_1_zzyhch.webp" 
              alt="CTE Tecnologia – Centro Técnico em Eletroeletrônica Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-black text-sm tracking-tight uppercase block leading-none text-white">
                CTE Tecnologia – Centro Técnico em Eletroeletrônica
              </span>
            </div>
          </a>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
            <a 
              id="nav-link-inicio"
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250"
            >
              Início
            </a>
            <a 
              id="nav-link-sobre"
              href="#sobre" 
              onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250 whitespace-nowrap"
            >
              Sobre Nós
            </a>
            <a 
              id="nav-link-servicos"
              href="#servicos" 
              onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250"
            >
              Serviços
            </a>
            <a 
              id="nav-link-publico-alvo"
              href="#publico-alvo" 
              onClick={(e) => { e.preventDefault(); handleNavClick('publico-alvo'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250 whitespace-nowrap"
            >
              Público-Alvo
            </a>
            <a 
              id="nav-link-depoimentos"
              href="#depoimentos" 
              onClick={(e) => { e.preventDefault(); handleNavClick('depoimentos'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250"
            >
              Depoimentos
            </a>
            <a 
              id="nav-link-autorizadas"
              href="#autorizadas" 
              onClick={(e) => { e.preventDefault(); handleNavClick('autorizadas'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250"
            >
              Autorizadas
            </a>
            <a 
              id="nav-link-contato"
              href="#contato" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }} 
              className="text-white/80 hover:text-secondary hover:scale-105 transition-all duration-250"
            >
              Contato
            </a>
          </nav>

          {/* Call-to-action button */}
          <div className="hidden md:block">
            <a
              id="header-cta-button"
              href={`https://wa.me/${whatsappNumber}?text=Olá%20CTE%20Tecnologia,%20gostaria%20de%20un%20orçamento%20para%20manutenção%20de%20equipamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-extrabold px-3 py-2 rounded-xl transition-all shadow-glow bg-secondary text-primary hover:bg-white whitespace-nowrap"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i> Orçamento no WhatsApp
            </a>
          </div>

          {/* Trigger Mobile Menu Button */}
          <button 
            id="mobile-menu-trigger"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-xl focus:outline-none text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* 3. MOBILE MENU DRAWER (MOBILE DRAWER SENSORS) */}
      <div className={`fixed inset-0 z-50 bg-[#020b1e]/85 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-[#020b1e] border-l border-white/10 p-6 shadow-2xl transition-transform duration-300 ease-smooth ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-extrabold text-secondary uppercase text-sm">Navegação CTE</span>
            <button 
              id="mobile-drawer-close"
              onClick={() => setIsMenuOpen(false)} 
              className="p-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-8 font-bold text-slate-300">
            <a 
              id="m-link-inicio"
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Início
            </a>
            <a 
              id="m-link-sobre"
              href="#sobre" 
              onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Sobre Nós
            </a>
            <a 
              id="m-link-servicos"
              href="#servicos" 
              onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Serviços
            </a>
            <a 
              id="m-link-publico-alvo"
              href="#publico-alvo" 
              onClick={(e) => { e.preventDefault(); handleNavClick('publico-alvo'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Público-Alvo
            </a>
            <a 
              id="m-link-depoimentos"
              href="#depoimentos" 
              onClick={(e) => { e.preventDefault(); handleNavClick('depoimentos'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Depoimentos
            </a>
            <a 
              id="m-link-autorizadas"
              href="#autorizadas" 
              onClick={(e) => { e.preventDefault(); handleNavClick('autorizadas'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Autorizadas
            </a>
            <a 
              id="m-link-contato"
              href="#contato" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }} 
              className="hover:text-secondary transition-colors text-base"
            >
              Contato
            </a>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <a
              id="m-wa-cta"
              href={`https://wa.me/${whatsappNumber}?text=Olá%20CTE%20Tecnologia,%20gostaria%20de%20solicitar%20atendimento%20rápido.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-secondary text-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow hover:bg-white"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i> Iniciar Chat de Suporte
            </a>
            
            <a 
              href="tel:1134733196" 
              className="block text-center text-slate-400 font-bold text-xs py-2 hover:underline"
            >
              <Phone className="w-3.5 h-3.5 inline mr-1" /> Ligue agora: (11) 3473-3196
            </a>
          </div>
        </div>
      </div>

      {/* 4. MAIN PAGE DISPLAY AREA */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* 5. GORGEOUS FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1 - Brand Summary */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://res.cloudinary.com/dooq2eage/image/upload/c_auto,h_720,w_720/e_background_removal/Postagens_1200x900_1_zzyhch.webp" 
                  alt="CTE Tecnologia – Centro Técnico em Eletroeletrônica Logo" 
                  className="w-10 h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-extrabold text-white text-lg tracking-tight uppercase">
                  CTE Tecnologia – Centro Técnico em Eletroeletrônica
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assistência técnica eletrônica especializada em áudio profissional, mixers digitais e analógicos, caixas de som, inversores solares e micro-ondas. Unimos engenharia técnica séria e componentes de máxima fidelidade.
              </p>
              <div className="flex gap-4 pt-2">
                <a 
                  id="foot-wa-link"
                  href={`https://wa.me/${whatsappNumber}?text=Olá%20CTE%20Tecnologia,%20estou%20entrando%20em%20contato%20através%20do%20site.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp" 
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-green-400 flex items-center justify-center transition"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                </a>
                <a 
                  id="foot-gmaps-link"
                  href="https://maps.google.com/?q=Rua+Hermeto+Lima,+135+-+Vila+Alpina,+São+Paulo+-+SP,+03211-160" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Google Maps" 
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-400 flex items-center justify-center transition"
                >
                  <i className="fa-solid fa-map-location-dot text-base"></i>
                </a>
                <a 
                  id="foot-instagram-link"
                  href="https://www.instagram.com/@cte.tecnologia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram" 
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-pink-500 flex items-center justify-center transition"
                >
                  <i className="fa-brands fa-instagram text-base"></i>
                </a>
                <a 
                  id="foot-youtube-link"
                  href="https://www.youtube.com/@ctaeletronica.oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube" 
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-red-500 flex items-center justify-center transition"
                >
                  <i className="fa-brands fa-youtube text-base"></i>
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Navigation links */}
            <div className="lg:col-span-2 space-y-4 font-bold text-sm">
              <h4 className="text-slate-100 font-extrabold text-xs uppercase tracking-widest pb-1.5 border-b border-slate-805">Atalhos</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }} className="hover:text-white transition">Início</a></li>
                <li><a href="#sobre" onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }} className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="hover:text-white transition">Serviços</a></li>
                <li><a href="#publico-alvo" onClick={(e) => { e.preventDefault(); handleNavClick('publico-alvo'); }} className="hover:text-white transition">Público-Alvo</a></li>
                <li><a href="#autorizadas" onClick={(e) => { e.preventDefault(); handleNavClick('autorizadas'); }} className="hover:text-white transition">Autorizadas</a></li>
                <li><a href="#contato" onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }} className="hover:text-white transition">Orçamento</a></li>
              </ul>
            </div>

            {/* Column 3 - Focus Niche */}
            <div className="lg:col-span-3 space-y-4 font-bold text-sm">
              <h4 className="text-slate-100 font-extrabold text-xs uppercase tracking-widest pb-1.5 border-b border-slate-805">Serviços Chave</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="text-slate-400 hover:text-secondary transition-colors">
                    • Manutenção de Mixers Digitais e Analógicos
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="text-slate-400 hover:text-secondary transition-colors">
                    • Reparos de Placas Dedicadas Profissionais
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="text-slate-400 hover:text-secondary transition-colors">
                    • Inversores de Energia Solar
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="text-slate-400 hover:text-secondary transition-colors">
                    • Caixas Ativas Amplificadas
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="text-slate-400 hover:text-secondary transition-colors">
                    • Manutenção e Conserto de Micro-ondas
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavClick('servicos'); }} className="text-slate-400 hover:text-secondary transition-colors">
                    • Assistência Técnica e Conserto de televisores
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - NAP Details */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-slate-100 font-extrabold text-xs uppercase tracking-widest pb-1.5 border-b border-slate-805">Contato Local (NAP)</h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Rua Hermeto Lima, 135 - Vila Alpina, São Paulo - SP, 03211-160</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <a href="https://wa.me/5511992426477" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      55 11 99242 6477 - whatsapp
                    </a>
                    <span className="text-slate-600 text-[10px]">ou</span>
                    <a href="tel:1134733196" className="hover:text-white transition-colors">
                      55 11 3473 3196 – fixo
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Segunda a Sexta: 10:00 - 18:00</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal Notice */}
          <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p>© 2026 CTE Tecnologia – Centro Técnico em Eletroeletrônica. Todos os direitos reservados.</p>
              <p className="mt-1">Especialistas certificados em <strong>Manutenção de equipamentos eletrônicos</strong> na Vila Alpina, São Paulo.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">CNPJ: 45.381.183/0001-92 (Exemplo / NAP Regular)</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 6. CORNER CHATTER HOVER TRIGGER (FLOAT WHATSAPP) */}
      <a
        id="corner-whats-float"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, estou no site e gostaria de conversar com o suporte técnico para tirar dúvidas.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contatar via WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-glow select-none transition-transform hover:scale-105 duration-300 flex items-center justify-center"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
        </span>
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      {/* 7. SCROLL BACK TO TOP CONTROL */}
      <button
        id="scroll-to-top-btn"
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-40 bg-white/90 border border-slate-200/80 p-3 rounded-full shadow-md text-slate-800 transition-all duration-300 hover:bg-slate-100 ${
          showScrollTop ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
        aria-label="Voltar para o topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* 8. EVENT HIGHLIGHT POP-UP MODAL */}
      <ModalEvent whatsappNumber={whatsappNumber} />

    </div>
  );
}
