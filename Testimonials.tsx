import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-daniela',
    name: 'Daniela Onodera',
    initials: 'DO',
    avatarColor: 'from-violet-500 to-purple-700',
    rating: 5,
    text: 'Conheci a empresa através do site oficial da Yamaha. Levei meu piano digital Yamaha P121 pois estava com algumas teclas travadas e fui super bem atendida do começo ao fim. O reparo foi super rápido, me entregaram antes do tempo, superou a expectativa! Super recomendo, são excelentes!',
  },
  {
    id: 'testimonial-wemusic',
    name: 'WEmusic',
    initials: 'WE',
    avatarColor: 'from-sky-500 to-blue-700',
    rating: 5,
    text: 'Profissional Ricardo, muito prestativo, simpático e atencioso. Acabei de falar com ele ao telefone e nem sou cliente da loja. Me atendeu com muita educação e esclareceu todas as minhas dúvidas sobre a rede elétrica apropriada para mixer digital e analógico Yamaha! Obrigado Ricardo, ganhou mais um cliente.',
  },
  {
    id: 'testimonial-elen',
    name: 'Elen Cristina Lupiañez Piva',
    initials: 'EL',
    avatarColor: 'from-rose-500 to-pink-700',
    rating: 5,
    text: 'Super atenciosos e sempre informando o que está sendo feito, mesmo com todo o caos de atraso de peças (que não é culpa deles) por causa da pandemia me entregaram a Tv em 1 semana e parecendo nova, me mandaram foto do problema da tv, me informaram quando a peça foi pedida, me informaram quando a peça chegou, me mandaram foto da peça nova com a caixa para eu ver q era original e me entregaram antes do prazo informado. Super recomendo',
  },
  {
    id: 'testimonial-leonardo',
    name: 'Leonardo Melo',
    initials: 'LM',
    avatarColor: 'from-emerald-500 to-green-700',
    rating: 5,
    text: 'Ótimo lugar, recomendo totalmente! Prestativo e com funcionários de ótima excelência, muito educados... Fora o prazo de entrega, que foi cumprido com total garantia. Arrumam o aparelho danificado e ainda aconselham como utilizá-lo novamente, já arrumei uma vez e tenho ciência em poder recomendar aos próximos.',
  },
  {
    id: 'testimonial-henrique',
    name: 'Henrique Araujo',
    initials: 'HA',
    avatarColor: 'from-amber-500 to-orange-600',
    rating: 5,
    text: 'Uma empresa muito séria e com ótimo atendimento, sempre me deixou informado sobre a situação do meu aparelho e quando ficou pronto, avisou no ato para que pudesse tê-lo de volta! Parabéns pelo profissionalismo e ótimo atendimento!',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600 fill-slate-600'}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  return (
    <div
      id={testimonial.id}
      className={`relative bg-white/5 backdrop-blur-md rounded-3xl border p-7 flex flex-col gap-5 transition-all duration-500 select-none
        ${isActive
          ? 'border-secondary/40 shadow-[0_0_40px_rgba(250,204,21,0.12)] scale-[1.02]'
          : 'border-white/10 shadow-none scale-100'
        }`}
    >
      {/* Decorative quote icon */}
      <div className="absolute top-5 right-6 opacity-10">
        <Quote className="w-12 h-12 text-secondary" />
      </div>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Review text */}
      <p className="text-slate-300 text-sm leading-relaxed flex-1">
        "{testimonial.text}"
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/10">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-lg`}
        >
          {testimonial.initials}
        </div>
        <div>
          <span className="block text-sm font-bold text-white leading-tight">{testimonial.name}</span>
          <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold mt-0.5">
            <i className="fa-brands fa-google text-[10px] text-blue-400" />
            Avaliação Google
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
    startAutoPlay();
  };

  const handlePrev = () => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    startAutoPlay();
  };

  // Compute the 3 visible card indices (prev, active, next) on desktop
  const visibleIndices = [
    (activeIndex - 1 + testimonials.length) % testimonials.length,
    activeIndex,
    (activeIndex + 1) % testimonials.length,
  ];

  return (
    <section id="depoimentos" className="py-24 bg-transparent relative overflow-hidden border-b border-white/5">

      {/* Ambient glow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-star text-[10px]" /> Depoimentos de Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Avaliações reais de quem confiou nos nossos serviços de <strong className="text-slate-300">assistência técnica eletrônica</strong> em São Paulo.
          </p>

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-black text-lg">5.0</span>
            <span className="text-slate-400 text-xs font-semibold">· Avaliação média no Google</span>
          </div>
        </div>

        {/* === DESKTOP: 3-card carousel === */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {visibleIndices.map((tIdx, pos) => (
            <TestimonialCard
              key={testimonials[tIdx].id}
              testimonial={testimonials[tIdx]}
              isActive={pos === 1}
            />
          ))}
        </div>

        {/* === MOBILE: single card carousel === */}
        <div className="md:hidden mb-8">
          <TestimonialCard
            testimonial={testimonials[activeIndex]}
            isActive={true}
          />
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-6">
          {/* Prev button */}
          <button
            id="testimonials-prev"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-200"
          >
            <i className="fa-solid fa-chevron-left text-sm" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonials-dot-${i}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2.5 bg-secondary'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            id="testimonials-next"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-200"
          >
            <i className="fa-solid fa-chevron-right text-sm" />
          </button>
        </div>

      </div>
    </section>
  );
}
