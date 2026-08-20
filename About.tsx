import React from 'react';
import { ShieldCheck, Target, Heart, Award, Calendar, Star } from 'lucide-react';

export default function About() {
  const whatsappNumber = "5511992426477";

  return (
    <section id="sobre" className="py-20 bg-transparent relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna da Imagem e Estatisticas */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Moldura Decorativa */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/15 rounded-3xl -z-10 bg-white/5"></div>
              
              <img 
                id="about-lab-img"
                src="https://res.cloudinary.com/dooq2eage/image/upload/WhatsApp_Image_2026-07-07_at_10.13.40_crhuwk.jpg" 
                alt="Laboratório Técnico da CTE Tecnologia – Centro Técnico em Eletroeletrônica - Manutenção de equipamentos eletrônicos" 
                className="rounded-3xl shadow-glow object-cover w-full h-[450px] border border-white/10"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#020b1e]/90 backdrop-blur-md p-6 rounded-2xl shadow-glow border border-white/15 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary text-xl font-black">
                  15+
                </div>
                <div>
                  <h4 className="text-white font-black text-sm">Anos de Experiência</h4>
                  <p className="text-xs text-slate-300">Reparos complexos de placas de som e potência.</p>
                </div>
              </div>
            </div>

            {/* Metas Rapidas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/10 backdrop-blur-sm">
                <i className="fa-solid fa-clock-rotate-left text-secondary text-xl mb-2"></i>
                <h5 className="font-extrabold text-white text-sm">Ágil</h5>
                <p className="text-[11px] text-slate-400">Diagnóstico rápido e orçamento transparente</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/10 backdrop-blur-sm">
                <i className="fa-solid fa-microchip text-secondary text-xl mb-2"></i>
                <h5 className="font-extrabold text-white text-sm">Componentes</h5>
                <p className="text-[11px] text-slate-400">Peças e insumos originais importados</p>
              </div>
            </div>
          </div>

          {/* Coluna de Texto de Apresentacao */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-xs font-bold uppercase tracking-wider">
              Quem Somos • Laboratório Avançado
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">
              CTE Tecnologia – Centro Técnico em Eletroeletrônica: Referência Máxima em <span className="text-secondary">Manutenção de Equipamentos Eletrônicos</span> e Áudio Profissional
            </h2>
            
            <p className="text-slate-300 leading-relaxed text-sm">
              A <strong>CTE Tecnologia – Centro Técnico em Eletroeletrônica</strong> é especialista no reparo minucioso de aparelhos eletrônicos de alto padrão, sobretudo com forte atuação no nicho de <strong>áudio profissional, mixers digitais e analógicos, caixas de som, inversores de energia solar e micro-ondas</strong> de uso doméstico e comercial.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm">
              Nossa oficina técnica, situada no bairro da <strong>Vila Alpina, São Paulo - SP</strong>, foi desenhada de forma dedicada para atender às demandas de alta fidelidade de estúdios, conjuntos musicais, templos religiosos, produtoras cinematográficas e indústrias de energia fotovoltaica. Contamos com instrumentação moderna de medição (osciloscópios digitais, geradores de áudio analógico e digital) para assegurar que cada placa de circuito retorne às especificações de fábrica.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-2">
              <h2 id="about-diferenciais-title" className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Nossos Diferenciais
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm">
                Reparos realizados seguindo os padrões e ajustes dos manuais de serviços dos fabricantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div id="about-topic-history" className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary border border-white/5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Empresa aberta desde 2005</h4>
                  <p className="text-xs text-slate-400">Tradição, solidez e experiência de mais de duas décadas no mercado eletrônico paulistano.</p>
                </div>
              </div>

              <div id="about-topic-rating" className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary border border-white/5">
                  <Star className="w-5 h-5 fill-secondary" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Nota 4,7 no Google</h4>
                  <p className="text-xs text-slate-400">Com mais de 100 avaliações de clientes que recomendam nossa engenharia dedicada.</p>
                </div>
              </div>

              <div id="about-topic-warranty" className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary border border-white/5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Garantia Técnica</h4>
                  <p className="text-xs text-slate-400">Garantia do serviço executado de 90 dias conforme CDC.</p>
                </div>
              </div>

              <div id="about-topic-soldering" className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary border border-white/5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Microssoldagem Avançada</h4>
                  <p className="text-xs text-slate-400">Recuperamos placas originais danificadas para evitar custos de importação ou substituição total.</p>
                </div>
              </div>

              <div id="about-topic-acoustics" className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary border border-white/5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Fidelidade Acústica</h4>
                  <p className="text-xs text-slate-400">Aferição de resposta de frequência para assegurar som liso, sem distorções harmônicas.</p>
                </div>
              </div>

              <div id="about-topic-engineering" className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary border border-white/5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Engenharia Experiente</h4>
                  <p className="text-xs text-slate-400">Técnicos especializados atualizados constantemente nas principais inovações do mercado.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a
                id="wa-about-cta"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, li sobre a sua assistência técnica especializada em Vila Alpina e gostaria de tirar uma dúvida sobre reparo de equipamentos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary hover:bg-white px-6 py-3.5 rounded-2xl font-bold shadow-glow transition-all text-center flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> Falar Conosco via WhatsApp
              </a>
              <a
                id="location-about-cta"
                href="#localizacao"
                className="bg-white/5 text-white hover:bg-white/10 border border-white/10 px-6 py-3.5 rounded-2xl font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-map-location-dot"></i> Ver Endereço em SP
              </a>
            </div>

          </div>

        </div>

        {/* Seção de Público-Alvo */}
        <div id="publico-alvo" className="mt-20 border-t border-white/10 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
              Público-Alvo • Soluções Sob Medida
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              A Quem Atendemos em Nosso Laboratório
            </h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Nossa expertise atende com máxima precisão técnica dois grandes perfis de clientes exigentes em São Paulo e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bloco 1: Áudio Profissional */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-glow backdrop-blur-md flex flex-col gap-5">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                <i className="fa-solid fa-music text-xl"></i>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-extrabold text-white">Música, Áudio Profissional & Eventos</h4>
                <p className="text-slate-300 text-xs leading-relaxed font-semibold">
                  Músicos, produtores musicais, proprietários de estúdios de gravação/ensaio, técnicos de som, DJs, organizadores de eventos e responsáveis pelo som de igrejas.
                </p>
              </div>
            </div>

            {/* Bloco 2: Energia Solar & Comércios */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-glow backdrop-blur-md flex flex-col gap-5">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                <i className="fa-solid fa-solar-panel text-xl"></i>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-extrabold text-white">Engenharia Solar, Integradores & Empresas</h4>
                <p className="text-slate-300 text-xs leading-relaxed font-semibold">
                  Engenheiros, eletricistas e empresas integradoras que vendem e instalam os painéis solares nas casas e indústrias da região de São Paulo e ABC mas que não fazem a reparação eletrônica das peças..Proprietários de pequenos e médios comércios, galpões industriais na Vila Prudente, Tatuapé, Mooca, Vila Zelina, Jardim Avelino, Jardim Anália Franco e São Caetano que investiram em energia solar para reduzir a conta de luz.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
