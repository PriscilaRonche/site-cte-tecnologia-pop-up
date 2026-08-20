import React, { useEffect, useState } from 'react';
import { ShieldCheck, HelpCircle, Zap, ThumbsUp, Music, Sun, Sparkles } from 'lucide-react';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Autorizadas from './Autorizadas';

export default function Home() {
  const whatsappNumber = "5511992426477";

  // Schema Injection
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CTE Tecnologia – Centro Técnico em Eletroeletrônica – Assistência Técnica em Eletroeletrônica",
      "image": "https://www.ctetecnologia.com.br/assets/og-image.jpg",
      "@id": "https://www.ctetecnologia.com.br/#localbusiness",
      "url": "https://www.ctetecnologia.com.br",
      "telephone": "+55-11-3473-3196",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Hermeto Lima, 135",
        "addressLocality": "Vila Alpina, São Paulo",
        "addressRegion": "SP",
        "postalCode": "03211-160",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.588922,
        "longitude": -46.570326
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "18:00"
        }
      ]
    };

    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.text = JSON.stringify(schemaData, null, 2);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // FAQs Accordions and States
  const faqs = [
    {
      question: "Vocês cobram para fazer o orçamento do equipamento?",
      answer: "Para a realização do diagnóstico e da avaliação técnica detalhada, é cobrada uma taxa inicial (a consultar). No entanto, caso o orçamento seja aprovado e o conserto seja realizado, esse valor da avaliação é integralmente descontado do valor final do serviço após a sua conclusão."
    },
    {
      question: "O laboratório conserta a placa ou eu preciso comprar uma nova?",
      answer: "Nosso grande diferencial de mercado é a manutenção avançada a nível de componentes. Isso significa que priorizamos a recuperação e o conserto da placa eletrônica original do seu equipamento (seja um mixer digital ou analógico, inversor solar, TV ou equipamento médico), evitando que você gaste com a troca de peças inteiras e gerando uma economia real no serviço."
    },
    {
      question: "Vocês atendem apenas empresas ou também fazem reparos para pessoa física?",
      answer: "Atendemos a ambos os públicos. Possuímos estrutura tanto para demandas corporativas de alto padrão (B2B) — como clínicas médicas, hospitais, estúdios de áudio, igrejas e integradores de energia solar — quanto para o cliente final residencial (B2C) que precisa de um conserto rápido e garantido para sua TV ou forno de micro-ondas."
    },
    {
      question: "Quais são as formas de pagamento e qual é a garantia dos serviços?",
      answer: "Facilitamos o pagamento via Pix, cartões de débito e parcelamento no cartão de crédito. Todos os nossos reparos eletrônicos contam com garantia legalizada sobre o serviço executado e sobre os componentes substituídos, assegurando o retorno do seu equipamento ao funcionamento pleno e seguro."
    },
    {
      question: "Preciso agendar um horário para levar o meu aparelho?",
      answer: "É necessário realizar agendamento prévio para o atendimento. Nosso laboratório técnico está localizado na Rua Hermeto Lima, 135 – Vila Alpina e atende em horário comercial, de segunda a sexta-feira, das 12h às 18h. Entre em contato para agendar um horário e garantir um atendimento mais ágil e organizado."
    },
    {
      question: "É necessário que o equipamento esteja fisicamente na empresa para que seja realizada uma avaliação técnica detalhada e a elaboração do orçamento?",
      answer: "Para avaliação técnica detalhada e elaboração de orçamento, é necessário que o equipamento esteja em nossa empresa, com equipamentos específicos de análise e documentação técnica adequada. Não é possível elaborar um orçamento detalhado somente com imagens, vídeos ou áudios com as falhas apresentadas."
    }
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div>
      {/* SECTION 1: HERO CONTAINER */}
      <section id="inicio" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-transparent overflow-hidden">
        {/* Ambient Blur Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#063496]/30 via-transparent to-transparent -z-10"></div>
        
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white/5_1px,transparent_1px),linear-gradient(to_bottom,white/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-bolt text-secondary"></i> Reparo Técnico Especializado • Vila Alpina
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                Manutenção de <span className="text-secondary">Equipamentos Eletrônicos</span> e Áudio Profissional
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                <strong>Assistência técnica especializada</strong> em <strong>consoles de áudio</strong>, <strong>mixers digitais e analógicos</strong>, <strong>caixas de som</strong>, <strong>inversores solares</strong> e <strong>micro-ondas</strong>. Realizamos o reparo e recuperação de painéis eletrônicos com eficiência total, evitando a necessidade de comprar um painel novo.
              </p>

              {/* USP Row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-circle-check text-secondary text-sm"></i>
                  <span className="text-xs text-slate-300 font-semibold uppercase">Estúdios & Igrejas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-circle-check text-secondary text-sm"></i>
                  <span className="text-xs text-slate-300 font-semibold uppercase">Orçamento Transparente</span>
                </div>
                <div className="flex items-center gap-2.5 col-span-2 md:col-span-1">
                  <i className="fa-solid fa-circle-check text-secondary text-sm"></i>
                  <span className="text-xs text-slate-300 font-semibold uppercase">Insumos Originais</span>
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  id="hero-primary-cta"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, venho do site e gostaria de solicitar um agendamento ou conversar com um técnico para o conserto do meu aparelho.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary hover:bg-white px-8 py-5 rounded-2xl font-bold shadow-glow text-center transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i> Agendar Reparo com Técnico
                </a>
                <a
                  id="hero-secondary-cta"
                  href="#servicos"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-5 rounded-2xl font-semibold transition-all text-center flex items-center justify-center gap-2"
                >
                  Ver Todos os Serviços <i className="fa-solid fa-arrow-down"></i>
                </a>
              </div>
            </div>

            {/* Right Interactive Card / Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-500/5 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8 space-y-6 shadow-glow">
                <div className="flex justify-between items-center pb-4 border-b border-white/15">
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-widest"><i className="fa-solid fa-circle text-xs text-green-500 animate-pulse mr-1"></i> Laboratório Ativo</span>
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">Atendimento SP</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-extrabold text-xl">
                    Precisa consertar o seu mixer digital ou analógico ou inversor fotovoltaico hoje?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A CTE Tecnologia – Centro Técnico em Eletroeletrônica executa <strong>manutenção de equipamentos eletrônicos</strong> no mesmo endereço há anos. Evitamos que você jogue fora componentes que ainda conservam alto valor residual.
                  </p>
                </div>

                {/* Micro bento highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <Music className="w-6 h-6 text-secondary mx-auto mb-1.5" />
                    <span className="text-[11px] font-bold text-slate-200 block">Áudio Profissional</span>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <Sun className="w-6 h-6 text-secondary mx-auto mb-1.5" />
                    <span className="text-[11px] font-bold text-slate-200 block">Inversor Solar</span>
                  </div>
                </div>

                {/* Fast Action */}
                <a
                  id="hero-box-whatsapp"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, estou na Vila Alpina e gostaria de um diagnóstico expresso para o meu aparelho eletrônico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs text-center py-4 rounded-xl border border-white/10 transition"
                >
                  <i className="fa-solid fa-bolt text-secondary mr-2"></i> Solicitar Avaliação
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE 3 KEY ACCENTS AND TRUST */}
      <section className="py-12 bg-white/5 border-y border-white/10 shadow-glow backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-[#063496]/50 rounded-2xl flex items-center justify-center text-secondary border border-white/10 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Garantia Integrada</h4>
                <p className="text-xs text-slate-400">Reparo documentado e com garantia estendida</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-[#063496]/50 rounded-2xl flex items-center justify-center text-secondary border border-white/10 flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Precisão Eletrônica</h4>
                <p className="text-xs text-slate-400">Reparos em nível de chipset e placas SMD complexas</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-[#063496]/50 rounded-2xl flex items-center justify-center text-secondary border border-white/10 flex-shrink-0">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Preço Justo de Verdade</h4>
                <p className="text-xs text-slate-400">Economia real em relação à troca total por novas placas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE ABOUT SENSORS */}
      <About />

      {/* SECTION 4: DETAILED BENTO REVIEWS OF SERVICES */}
      <Services />

      {/* SECTION 5: HELPFUL FAQ ACCORDION FOR LOCAL CUSTOMERS */}
      <section id="faq" className="py-20 bg-transparent relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              Perguntas Frequentes • FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Dúvidas Técnicas Frequentes
            </h2>
            <p className="mt-4 text-slate-300 text-sm">
              Consulte esclarecimentos técnicos importantes sobre diagnósticos de <strong>manutenção de equipamentos eletrônicos</strong> que executamos em nosso laboratório de São Paulo.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  id={`faq-item-${index}`}
                  key={index} 
                  className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-glow backdrop-blur-md"
                >
                  <button
                    id={`faq-btn-${index}`}
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-extrabold text-white text-sm sm:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0">
                      {isOpen ? (
                        <i className="fa-solid fa-chevron-up text-secondary text-sm"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-slate-400 text-sm"></i>
                      )}
                    </span>
                  </button>

                  <div 
                    id={`faq-content-${index}`}
                    className={`transition-all duration-300 ease-in-out px-6 ${
                      isOpen ? 'pb-6 pt-1 max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-slate-300 text-xs leading-relaxed border-t border-white/10 pt-4 font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6: CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 7: AUTHORIZED BRANDS */}
      <Autorizadas />

      {/* SECTION 8: DIRECT AD NAP ACTION AREA */}
      <Contact />

    </div>
  );
}
