import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Heart, Loader2 } from 'lucide-react';

interface ModalEventProps {
  whatsappNumber?: string;
}

export default function ModalEvent({ whatsappNumber = "5511992426477" }: ModalEventProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState<'details' | 'form' | 'success'>('details');

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Form Errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for Accessibility & Focus Trap
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const firstInteractiveRef = useRef<HTMLAnchorElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Auto-open timer and sessionStorage check
  useEffect(() => {
    const isClosedInSession = sessionStorage.getItem('modal_event_closed');
    if (isClosedInSession !== 'true') {
      const timer = setTimeout(() => {
        previouslyFocusedElement.current = document.activeElement as HTMLElement;
        setIsRendered(true);
        // Wait a tick to trigger the entrance transition
        setTimeout(() => setIsOpen(true), 50);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Format Phone mask: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    // Mask formatting
    const match = value.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
      setPhone(!match[2] ? match[1] : `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`);
    }
  };

  // Close modal with animation
  const handleClose = () => {
    setIsOpen(false);
    // Wait for the exit animation to finish before unrendering
    setTimeout(() => {
      setIsRendered(false);
      sessionStorage.setItem('modal_event_closed', 'true');
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    }, 400);
  };

  // Keyboard navigation & Esc key handler
  useEffect(() => {
    if (!isRendered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        // Collect all focusable elements within the current active view
        const focusableSelectors = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
        
        // Find focusable elements in the modal
        const closeBtn = closeBtnRef.current;
        const currentContainer = modalRef.current;
        const currentFocusables = Array.from(currentContainer.querySelectorAll(focusableSelectors)) as HTMLElement[];
        
        // Combine close button and view's focusable elements
        const allFocusables = closeBtn ? [closeBtn, ...currentFocusables] : currentFocusables;
        
        if (allFocusables.length === 0) return;

        const first = allFocusables[0];
        const last = allFocusables[allFocusables.length - 1];

        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      };
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Set initial focus to either "Conhecer o Evento" button or Name input (if form is showing)
    if (activeView === 'details') {
      setTimeout(() => firstInteractiveRef.current?.focus(), 100);
    } else if (activeView === 'form') {
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRendered, activeView]);

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    const isNameValid = name.trim().length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const rawPhone = phone.replace(/\D/g, '');
    const isPhoneValid = rawPhone.length >= 10 && rawPhone.length <= 11;

    setErrors({
      name: !isNameValid,
      email: !isEmailValid,
      phone: !isPhoneValid,
    });

    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      // Focus the first error input
      if (!isNameValid) nameInputRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    setActiveView('success');

    // WhatsApp Message Compilation
    const encodedName = encodeURIComponent(name.trim());
    const encodedEmail = encodeURIComponent(email.trim());
    const encodedPhone = encodeURIComponent(phone.trim());
    const message = `Olá! Meu nome é ${encodedName}. Tenho interesse no evento Imersão Técnica São Paulo 2026. Seguem meus dados:\n- Email: ${encodedEmail}\n- WhatsApp: ${encodedPhone}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect after 2 seconds
    setTimeout(() => {
      window.open(waUrl, '_blank');
      handleClose();
    }, 2000);
  };

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        ref={modalRef}
        className={`relative w-full max-w-[960px] rounded-3xl border border-secondary bg-gradient-to-br from-[#0a1322] to-[#030b18] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_30px_rgba(250,250,28,0.15)] overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] transition-all duration-400 ease-out transform ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'
        }`}
      >
        
        {/* Close Button ("X") */}
        <button 
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Fechar Pop-up"
          className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 hover:rotate-90 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Dynamic content area */}
        <div className="p-8 md:p-12 flex flex-col justify-center min-h-[440px] relative">
          
          {/* VIEW 1: DETAILS */}
          {activeView === 'details' && (
            <div className="flex flex-col gap-4 animate-fadeIn">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 leading-none">
                Em destaque na Eletrofix BR
              </span>
              <span className="bg-secondary text-[#010614] text-[10px] font-extrabold px-3 py-1.5 rounded-full w-max uppercase tracking-wider leading-none shadow-[0_4px_10px_rgba(250,250,28,0.15)]">
                Evento Presencial em Destaque
              </span>
              
              <h2 className="text-3xl md:text-[32px] font-extrabold text-white leading-tight">
                Imersão Técnica São Paulo 2026
              </h2>
              
              <span className="text-base font-bold text-secondary -mt-2">
                São Paulo/SP
              </span>
              
              <p className="text-[13px] leading-relaxed text-slate-300 font-normal">
                Uma parceria entre Eletrofix BR e CTE Tecnologia. 7 dias de formação prática em eletrônica profissional - Amplificadores Classe D • Fontes Chaveadas • Mixers Digitais - Soundcraft Ui24R
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-1">
                <span className="flex items-center gap-2 text-[13px] font-semibold text-white">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" /> 3 cursos presenciais
                </span>
                <span className="flex items-center gap-2 text-[13px] font-semibold text-white">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" /> Início: 19/10/2026
                </span>
                <span className="flex items-center gap-2 text-[13px] font-semibold text-white">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" /> Lista de interesse aberta
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
                <a 
                  ref={firstInteractiveRef}
                  href={`https://wa.me/${whatsappNumber}?text=Olá%20CTE%20Tecnologia!%20Gostaria%20de%20obter%20mais%20informações%20sobre%20a%20Imersão%20Técnica%20São%20Paulo%202026.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-[#010614] text-[11px] font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:shadow-[0_8px_20px_rgba(250,250,28,0.2)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Conhecer o Evento
                </a>
                
                <button 
                  onClick={() => setActiveView('form')}
                  className="border border-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 bg-transparent hover:border-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Heart className="w-4 h-4 text-secondary fill-secondary/10" /> Tenho Interesse
                </button>
              </div>
            </div>
          )}

          {/* VIEW 2: FORM */}
          {activeView === 'form' && (
            <div className="flex flex-col gap-4 animate-fadeIn">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white">
                  Lista de Interesse
                </h3>
                <p className="text-[13px] text-slate-400">
                  Preencha seus dados para garantir prioridade na próxima turma.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 mt-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-form-name" className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                    Nome Completo
                  </label>
                  <input 
                    ref={nameInputRef}
                    type="text" 
                    id="modal-form-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className={`bg-white/5 border rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none transition-all ${
                      errors.name 
                        ? 'border-red-500 bg-red-500/5 focus:border-red-500' 
                        : 'border-white/10 focus:border-secondary focus:bg-white/10'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-medium">
                      Por favor, insira seu nome completo (mínimo 3 caracteres).
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-form-email" className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="modal-form-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className={`bg-white/5 border rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none transition-all ${
                      errors.email 
                        ? 'border-red-500 bg-red-500/5 focus:border-red-500' 
                        : 'border-white/10 focus:border-secondary focus:bg-white/10'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-medium">
                      Insira um endereço de e-mail válido.
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-form-phone" className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                    WhatsApp / Celular
                  </label>
                  <input 
                    type="tel" 
                    id="modal-form-phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                    className={`bg-white/5 border rounded-lg px-3.5 py-2.5 text-[13px] text-white outline-none transition-all ${
                      errors.phone 
                        ? 'border-red-500 bg-red-500/5 focus:border-red-500' 
                        : 'border-white/10 focus:border-secondary focus:bg-white/10'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 font-medium">
                      Insira um celular válido com DDD (ex: (11) 99999-9999).
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <button 
                    type="submit"
                    className="flex-grow bg-secondary text-[#010614] text-[11px] font-extrabold uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:shadow-[0_8px_20px_rgba(250,250,28,0.2)] transition-all"
                  >
                    Enviar e ir para o WhatsApp
                  </button>
                  
                  <button 
                    ref={backBtnRef}
                    type="button"
                    onClick={() => setActiveView('details')}
                    className="border border-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider py-3.5 px-5 rounded-xl bg-transparent hover:border-white hover:bg-white/5 transition-all"
                  >
                    Voltar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* VIEW 3: SUCCESS */}
          {activeView === 'success' && (
            <div className="flex flex-col items-center justify-center text-center gap-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center text-secondary animate-pulse">
                <Check className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-white">
                Cadastro Realizado!
              </h3>
              
              <p className="text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                Obrigado pelo seu interesse! Estamos redirecionando você ao WhatsApp da equipe de atendimento em instantes...
              </p>
              
              <Loader2 className="w-6 h-6 text-secondary animate-spin mt-2" />
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Static Image view (hidden on small devices) */}
        <div 
          className="hidden md:block bg-cover bg-center relative"
          style={{ backgroundImage: `url('/event_modal.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b18]/60 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
}
