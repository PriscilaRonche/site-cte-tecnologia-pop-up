import React, { useEffect, useRef, useState } from 'react';

const brands = [
  {
    id: 'waldman',
    name: 'Waldman',
    category: 'Áudio Profissional',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/Doc14.docx_-_waldman_page-0001.jpg_ctrxw9.webp',
  },
  {
    id: 'jbl',
    name: 'JBL',
    category: 'Caixas de Som',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/f77841b1-1cc1-4a94-a5f5-ed9d6fd94985_nobqyw.webp',
  },
  {
    id: 'makintec',
    name: 'Makintec',
    category: 'Áudio Profissional',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/hq720_dn7wox.webp',
  },
  {
    id: 'mark-audio',
    name: 'Mark Audio',
    category: 'Amplificadores',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/e_background_removal/Mark_Audio_logo_yyae9i.webp',
  },
  {
    id: 'attack',
    name: 'Attack',
    category: 'Percussão & Instrumentos',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/logo-attack_jiwb0e.webp',
  },
  {
    id: 'yamaha',
    name: 'Yamaha',
    category: 'Consoles & Instrumentos',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/Yamaha-Motor-Company-Logo-1964-presente_zjskoh.webp',
  },
  {
    id: 'oneal',
    name: "O'Neal",
    category: 'Áudio & Eletrônicos',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/oneal-sem-imagem-disponivel_qeqy8g.webp',
  },
  {
    id: 'leacs',
    name: 'Leacs',
    category: 'Amplificadores',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/9229af16-ade7-4dfe-8d78-b97691820025_mw37yk.webp',
  },
  {
    id: 'stetsom',
    name: 'Stetsom',
    category: 'Som Automotivo',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/Stetsom_ziqy7x.webp',
  },
  {
    id: 'staner',
    name: 'Staner',
    category: 'Instrumentos Musicais',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/e_background_removal/staner-50-anos-logo-png_seeklogo-494737_qlppom.webp',
  },
  {
    id: 'taigar',
    name: 'Taigar System',
    category: 'Sistemas de Áudio',
    logo: 'https://res.cloudinary.com/dooq2eage/image/upload/watermarked_img_9727396697483145480_ngyhe9.webp',
  },
];

export default function Autorizadas() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number>(0);
  const posRef = useRef(0);

  // Infinite marquee animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.55; // px per frame

    const animate = () => {
      if (!isHovered) {
        posRef.current -= SPEED;
        // Reset when we've scrolled half the total width (duplicated list)
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isHovered]);

  // Duplicated list for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section
      id="autorizadas"
      className="py-20 relative overflow-hidden border-y border-white/5"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-certificate" /> Marcas Autorizadas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Assistência Técnica{' '}
            <span className="text-secondary">Autorizada</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed">
            A CTE Tecnologia – Centro Técnico em Eletroeletrônica é credenciada e autorizada para manutenção de
            equipamentos das principais marcas do mercado de{' '}
            <strong>áudio profissional</strong>,{' '}
            <strong>instrumentos musicais</strong> e{' '}
            <strong>eletrônica em geral</strong>.
          </p>
        </div>



        {/* Infinite Marquee — remaining brands + all brands looped */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#020b1e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#020b1e] to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-4 py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={trackRef}
              className="flex gap-4 will-change-transform"
              style={{ whiteSpace: 'nowrap' }}
            >
              {allBrands.map((brand, idx) => (
                <div
                  key={`marquee-${brand.id}-${idx}`}
                  className="inline-flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-secondary/30 hover:bg-white/10 rounded-xl px-6 py-4 transition-all duration-300 flex-shrink-0 min-w-[140px] group cursor-default"
                >
                  <div className="h-10 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className="max-h-10 max-w-[100px] object-contain filter brightness-75 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
