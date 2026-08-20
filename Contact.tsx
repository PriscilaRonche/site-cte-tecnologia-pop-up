import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "5511992426477";
  
  // State for standard message form
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDevice, setFormDevice] = useState('mesa-som');
  const [formDescription, setFormDescription] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // State for online diagnostic builder
  const [diagDevice, setDiagDevice] = useState('Mixers Digitais e Analógicos e Controles de Áudio');
  const [diagSymptom, setDiagSymptom] = useState('Aparelho não liga / Falha de energia');
  const [diagAditional, setDiagAditional] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    
    // Simulate API registration, since we want reliable client-side behavior
    setFormSuccess(true);
    setTimeout(() => {
      // Also generate standard pre-filled Whatsapp text
      const deviceText = 
        formDevice === 'mesa' ? 'Mixers Digitais e Analógicos' :
        formDevice === 'caixa' ? 'Caixa Ativa / Acústica' :
        formDevice === 'inversor' ? 'Inversor Solar' :
        formDevice === 'microondas' ? 'Forno Micro-ondas' : 'Outro Aparelho';

      const customMsg = `Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica! Meu nome é ${formName}. Tenho um(a) ${deviceText} precisando de manutenção. Sintomas: ${formDescription}. Contato: ${formPhone}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMsg)}`, '_blank');
    }, 1500);
  };

  const handleDiagnosticWhatsApp = () => {
    const customMessage = `Prezado Técnico CTE Tecnologia – Centro Técnico em Eletroeletrônica, gostaria de solicitar orçamento técnico para o seguinte aparelho:
- Equipamento: ${diagDevice}
- Sintoma do Defeito: ${diagSymptom}
- Observações adicionais: ${diagAditional || 'Nenhuma'}

Por favor, me informe sobre valor de avaliação e prazos. Obrigado!`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-transparent relative border-b border-white/5">
      <div id="localizacao" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titulo Secao */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
            Atendimento Rápido • Vila Alpina
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Fale com a <span className="text-secondary">CTE Tecnologia – Centro Técnico em Eletroeletrônica</span>
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Estamos prontos para diagnosticar seu console de áudio profissional, caixa ativa ou inversor solar. Solicite seu orçamento ou visite nosso laboratório em São Paulo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Informacoes NAP e Horarios */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 shadow-glow backdrop-blur-md">
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">Dados de Contato</h3>
              
              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-secondary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Telefone de Atendimento</h4>
                  <div className="space-y-0.5 mt-1 font-semibold text-sm">
                    <a href="https://wa.me/5511992426477" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-secondary transition-colors block">
                      55 11 99242 6477 - whatsapp
                    </a>
                    <a href="tel:1134733196" className="text-slate-300 hover:text-secondary transition-colors block">
                      55 11 3473 3196 – fixo
                    </a>
                  </div>
                </div>
              </div>

              {/* Endereco */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-secondary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Nosso Endereço</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mt-1">
                    Rua Hermeto Lima, 135<br />
                    Vila Alpina, São Paulo - SP<br />
                    CEP: 03211-160
                  </p>
                  <a 
                    id="gmaps-link"
                    href="https://maps.google.com/?q=Rua+Hermeto+Lima,+135+-+Vila+Alpina,+São+Paulo+-+SP,+03211-160" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-secondary font-bold hover:underline inline-block mt-1"
                  >
                    Abrir no Google Maps <i className="fa-solid fa-arrow-up-right-from-square ml-0.5"></i>
                  </a>
                </div>
              </div>

              {/* Horario de Funcionamento */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-secondary flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Horário de Funcionamento</h4>
                  <ul className="text-[11px] text-slate-300 space-y-1 mt-1 font-semibold">
                    <li className="flex justify-between gap-6"><strong>Seg-Sex:</strong> <span>10:00–18:00 – whatsapp</span></li>
                    <li className="flex justify-between gap-6"><strong>Seg-Sex:</strong> <span>12:00–18:00 – loja física</span></li>
                    <li className="flex justify-between gap-6 text-red-400"><strong>Sábado / Domingo:</strong> <span>Fechado</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Canal Direto WhatsApp */}
            <div className="p-5 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/30 flex items-center gap-4">
              <i className="fa-brands fa-whatsapp text-[#25D366] text-3xl"></i>
              <div>
                <h5 className="font-black text-[#25D366] text-xs">WhatsApp Direct</h5>
                <a 
                  id="wa-direct-phone"
                  href={`https://wa.me/${whatsappNumber}?text=Olá%20CTE%20Tecnologia,%20estou%20entrando%20em%20contato%20através%20do%20site.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-white hover:text-secondary text-xs transition-colors"
                >
                  Continuar no WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Orcamento Express Form */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 shadow-glow backdrop-blur-md">
            
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                <MessageSquare className="text-secondary w-5 h-5" /> Orçamento Express Inteligente
              </h3>
              <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                Preencha os dados do seu visor de diagnóstico ou mande uma mensagem rápida formatada diretamente ao WhatsApp de nosso laboratório de eletroeletrônica.
              </p>

              {/* Form Tab Toggles (Glow style) */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl mb-6">
                <button
                  id="tab-btn-calc"
                  type="button"
                  onClick={() => setFormSuccess(false)}
                  className="py-2.5 px-4 text-xs font-black rounded-lg bg-secondary text-primary shadow-glow transition-all"
                >
                  <i className="fa-solid fa-calculator mr-1"></i> Diagnosticador de Defeitos
                </button>
                <a
                  id="tab-btn-fast-chat"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá CTE Tecnologia – Centro Técnico em Eletroeletrônica, preciso de suporte técnico rápido.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 text-xs font-black rounded-lg text-center text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1"
                >
                  <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i> Suporte WhatsApp Rápido
                </a>
              </div>

              {/* Diagnostic Builder Tab */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Qual o Equipamento?</label>
                    <select
                      id="diag-select-device"
                      value={diagDevice}
                      onChange={(e) => setDiagDevice(e.target.value)}
                      className="w-full px-4 py-3 bg-[#020b1e] border border-white/10 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-secondary"
                    >
                      <option value="Mixers Digitais e Analógicos e Controles de Áudio">Mixers Digitais e Analógicos (Grande / Médio porte)</option>
                      <option value="Inversor de Energia Solar">Inversor de Energia Solar (Grid Tie / Off Grid)</option>
                      <option value="Caixas Ativas Amplificadas">Caixa Ativa / Monitor de Áudio</option>
                      <option value="Caixas Acústicas / Falantes">Caixa Acústica Passiva / Crossover</option>
                      <option value="Fornos de Micro-ondas">Forno Micro-ondas Multimarcas</option>
                      <option value="Outras Placas de Circuito de Áudio">Recuperação de Placas de Som (SMD)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Principal Sintoma / Defeito</label>
                    <select
                      id="diag-select-symptom"
                      value={diagSymptom}
                      onChange={(e) => setDiagSymptom(e.target.value)}
                      className="w-full px-4 py-3 bg-[#020b1e] border border-white/10 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-secondary"
                    >
                      <option value="Aparelho não liga / Falha total de energia">Totalmente Inoperante (Não liga)</option>
                      <option value="Canais com muito chiado, ruídos ou distorções">Presença de Ruído / Distorção de Canais</option>
                      <option value="Placa controladora solta fumaça ou cheira queimado">Cheiro de queimado / Curto Interno</option>
                      <option value="Luzes piscam mas aparelho não executa função">Painel acende mas não opera</option>
                      <option value="Desarmando disjuntor ou disparando código de falha">Dispara códigos de erro no display</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Observações Adicionais (Modelo, Marca ou Detalhes)</label>
                  <textarea
                    id="diag-textarea-obs"
                    rows={3}
                    placeholder="Ex: Mixer Digital Soundcraft 16 canais, canal 4 sem saída. Ou Inversor Growatt de 3kW com erro de alta tensão."
                    value={diagAditional}
                    onChange={(e) => setDiagAditional(e.target.value)}
                    className="w-full px-4 py-3 bg-[#020b1e] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-secondary placeholder:text-slate-500"
                  ></textarea>
                </div>

                <div className="bg-primary/20 p-4 rounded-xl border border-primary/30 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    <strong>Garantia de Confidencialidade:</strong> Seus dados técnicos e de contato são utilizados estritamente para formular o orçamento prévio pela nossa assistência técnica em eletroeletrônica.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
              <button
                id="btn-send-diagnostic"
                type="button"
                onClick={handleDiagnosticWhatsApp}
                className="bg-secondary text-primary hover:bg-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 shadow-glow transition-all w-full sm:w-auto text-xs"
              >
                Solicitar Agora via WhatsApp <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="mt-12 bg-white/5 rounded-3xl border border-white/10 p-4 shadow-glow backdrop-blur-md">
          <div className="flex items-center justify-between mb-4 px-2">
            <div>
              <h4 className="text-white font-bold text-sm"><i className="fa-solid fa-location-dot text-secondary mr-1"></i> Localização de nosso Laboratório</h4>
              <p className="text-xs text-slate-300">Rua Hermeto Lima, 135 - Vila Alpina, São Paulo - SP</p>
            </div>
            <a 
              id="gmaps-nav-btn"
              href="https://maps.google.com/?q=Rua+Hermeto+Lima,+135+-+Vila+Alpina,+São+Paulo+-+SP,+03211-160" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-lg font-bold text-white transition"
            >
              Rotas no GPS <i className="fa-solid fa-map"></i>
            </a>
          </div>
          
          {/* Real Google Maps Embeeded iframe utilizing Vila Alpina, Sao Paulo coordinates */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-inner border border-white/10">
            <iframe 
              id="gmap-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4024312693897!2d-46.57032622380595!3d-23.588922061386127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c14a1234567%3A0xabcdef1234567890!2sRua%20Hermeto%20Lima%2C%20135%20-%20Vila%20Alpina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003211-160!5e0!3m2!1spt-BR!2sbr!4v1718534000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
