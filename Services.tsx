import React from 'react';
import { Volume2, SlidersHorizontal, Cpu, Sparkles, Music, Sun, ShieldAlert, Sliders, Tv } from 'lucide-react';

export const servicesData = [
  {
    id: "audio-profissional",
    title: "Manutenção de Equipamentos de Áudio Profissional",
    shortDescription: "Assistência técnica especializada em mixers digitais e analógicos, amplificadores, caixas de som ativas, periféricos e interfaces de áudio para estúdios e eventos.",
    fullDescription: "Manutenção profissional de equipamentos de áudio: conserto de mixers digitais e analógicos, amplificadores de potência, caixas de som ativas, periféricos de rack e interfaces de áudio para estúdios de gravação, igrejas e eventos ao vivo em São Paulo.",
    icon: Volume2,
    badge: "Especialidade",
    bgPattern: "bg-[#063496]/40",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, gostaria de um orçamento para Manutenção de Equipamentos de Áudio Profissional."
  },
  {
    id: "mesas-de-som",
    title: "Manutenção em Mixers Digitais e Analógicos",
    shortDescription: "Diagnóstico, reparo e revisão técnica preventiva ou corretiva de mixers digitais e analógicos de diversos canais para igrejas, bandas e comércios.",
    fullDescription: "Manutenção especializada em mixers digitais e analógicos de diversos canais: limpeza de faders e potenciômetros, reparo de fonte de alimentação, calibração e revisão preventiva ou corretiva. Atendemos igrejas, bandas, estúdios de ensaio e estabelecimentos comerciais em São Paulo.",
    icon: SlidersHorizontal,
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, gostaria de solicitar a Manutenção em Mixers Digitais e Analógicos."
  },
  {
    id: "recuperacao-placas",
    title: "Reparos de Placas Dedicadas Profissionais",
    shortDescription: "Conserto e restauração avançada de circuitos e placas originais de equipamentos de som, evitando custos com trocas completas.",
    fullDescription: "Reparos profissionais de placas dedicadas: reparo de trilhas, microssoldagem de componentes SMD e restauração de circuitos originais de mixers digitais e analógicos, amplificadores e interfaces. Elimina a necessidade de substituição total da placa, gerando economia real com qualidade certificada.",
    icon: Cpu,
    badge: "Alta Tecnologia",
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, preciso de suporte para Reparos de Placas Dedicadas Profissionais."
  },
  {
    id: "mesas-grande-porte",
    title: "Manutenção em Mixers Digitais e Analógicos de Grande Porte",
    shortDescription: "Assistência especializada de alta precisão para consoles e mixers digitais e analógicos de grande porte utilizados em estúdios de gravação, produtoras de áudio e grandes eventos.",
    fullDescription: "Manutenção de mixers digitais e analógicos de grande porte: suporte técnico especializado para consoles analógicos e digitais de alta complexidade, utilizados por estúdios de gravação, produtoras, emissoras de rádio e grandes eventos ao vivo em São Paulo.",
    icon: Sliders,
    badge: "Equipamentos Premium",
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, necessito de Manutenção em Mixers Digitais e Analógicos de grande porte."
  },
  {
    id: "caixas-acusticas",
    title: "Manutenção em Caixas Acústicas",
    shortDescription: "Assistência técnica completa em sistemas de caixas acústicas passivas, incluindo reparo de alto-falantes, drivers, tweeters e divisores de frequência.",
    fullDescription: "Manutenção especializada em caixas acústicas passivas e sistemas de PA: recondicionamento e substituição de alto-falantes, drivers de titânio, reparo de tweeters queimados e retífica de divisores de frequência. Atendemos bandas, igrejas e eventos em São Paulo.",
    icon: Music,
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, solicito orçamento para Manutenção de Caixas Acústicas."
  },
  {
    id: "caixas-ativas",
    title: "Manutenção em Caixas Ativas",
    shortDescription: "Manutenção em Caixas Ativas: Reparo de circuitos amplificadores, substituição de componentes, fontes integradas e correção de ruídos ou falhas de áudio em caixas de som ativas.",
    fullDescription: "Manutenção em Caixas Ativas: Reparo de circuitos amplificadores, substituição de componentes, fontes integradas e correção de ruídos ou falhas de áudio em caixas de som ativas.",
    icon: Sparkles,
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, gostaria de Manutenção em Caixas Ativas de Som."
  },
  {
    id: "inversores-solar",
    title: "Manutenção de Inversores para Energia Solar",
    shortDescription: "Manutenção de Inversores para Energia Solar: Assistência técnica especializada e reparo eletrônico avançado em inversores de sistemas de energia solar. Diagnóstico de falhas, conserto de placas de circuito internas, fontes e troca de componentes danificados para restabelecer a geração de energia com segurança e economia.",
    fullDescription: "Manutenção de Inversores para Energia Solar: Assistência técnica especializada e reparo eletrônico avançado em inversores de sistemas de energia solar. Diagnóstico de falhas, conserto de placas de circuito internas, fontes e troca de componentes danificados para restabelecer a geração de energia com segurança e economia.",
    icon: Sun,
    badge: "Energia Solar",
    bgPattern: "bg-[#063496]/40",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, necessito de reparo em meu Inversor de Energia Solar."
  },
  {
    id: "microondas",
    title: "Manutenção e Conserto de Micro-ondas",
    shortDescription: "Manutenção e Conserto de Microondas: Assistência técnica multimarcas para fornos de microondas. Diagnóstico eletrônico de alta segurança, reparo de placas controladoras, substituição de magnetrons, transformadores e componentes de alta tensão.",
    fullDescription: "Manutenção e Conserto de Microondas: Assistência técnica multimarcas para fornos de microondas. Diagnóstico eletrônico de alta segurança, reparo de placas controladoras, substituição de magnetrons, transformadores e componentes de alta tensão.",
    icon: ShieldAlert,
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, preciso de conserto para meu Micro-ondas."
  },
  {
    id: "conserto-tv",
    title: "Assistência Técnica e Conserto de televisores",
    shortDescription: "Reparo especializado em TVs de LED, OLED, QLED e 4K. Diagnóstico e manutenção avançada em placas principais, placas de fonte, inversores e recuperação de barramentos de LED com alta precisão.",
    fullDescription: "Reparo especializado em TVs de LED, OLED, QLED e 4K. Diagnóstico e manutenção avançada em placas principais, placas de fonte, inversores e recuperação de barramentos de LED com alta precisão.",
    icon: Tv,
    bgPattern: "bg-white/5",
    color: "text-secondary",
    whatsappMsg: "Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, preciso de conserto para minha TV."
  }
];

export default function Services() {
  const whatsappNumber = "5511992426477"; // Representative WhatsApp SP Number

  return (
    <section id="servicos" className="py-20 bg-transparent relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecalho da Secao */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
            Nossos Serviços • Alta Precisão
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Especialistas em <span className="text-secondary">Manutenção de Equipamentos Eletrônicos</span> e Áudio Profissional
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Na CTE Tecnologia – Centro Técnico em Eletroeletrônica, unimos conhecimento técnico certificado e peças de primeira linha para restaurar o perfeito funcionamento de seus aparelhos de transmissão, áudio, energia e utilitários.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            // Highlighting specific items for layout emphasis and rhythm (Bento Grid feel)
            const isHighlighted = service.badge === "Especialidade" || service.badge === "Energia Solar";
            
            return (
              <div 
                id={`card-${service.id}`}
                key={service.id}
                className={`bg-white/5 rounded-3xl border border-white/10 p-8 shadow-glow transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 flex flex-col justify-between ${
                  isHighlighted ? 'lg:col-span-2 border-secondary/25 bg-gradient-to-br from-white/5 to-[#063496]/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl ${service.bgPattern} ${service.color} mb-6 inline-flex border border-white/10`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider ${
                        service.badge === "Especialidade" ? 'bg-secondary text-primary' : 
                        service.badge === "Energia Solar" ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 font-semibold text-xs leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    id={`wa-link-${service.id}`}
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-white font-extrabold text-xs transition-colors"
                  >
                    Consulte Condições de Avaliação e Orçamento
                    <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA at the bottom of the Bento Grid */}
        <div className="mt-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-white shadow-glow flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/5 -z-10"></div>
          <div>
            <h4 className="text-xl font-bold mb-2">Não encontrou o seu equipamento eletrônico na lista?</h4>
            <p className="text-slate-300 text-xs max-w-xl">
              Nossa equipe de engenheiros eletroeletrônicos possui laboratório completo para diagnósticos em placas complexas de diversos aparelhos sob consulta.
            </p>
          </div>
          <a
            id="wa-cta-bottom"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, tenho um equipamento eletrônico que não está na lista e gostaria de saber se vocês realizam manutenção.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary hover:bg-white px-8 py-4 rounded-2xl font-black shadow-glow text-center transition-all text-xs whitespace-nowrap"
          >
            <i className="fa-brands fa-whatsapp mr-2 text-base"></i> Consultar Especialista
          </a>
        </div>

      </div>
    </section>
  );
}
