
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="section-separator"></div>
      <section className="py-24 bg-white textured-bg relative overflow-hidden">
        {/* Logo decorativo no fundo */}
        <div className="absolute top-10 right-10 opacity-5">
          <img 
            src="/lovable-uploads/1ca0dc9c-48b1-4065-85f1-843ece309d19.png" 
            alt="2B COMEX Logo" 
            className="h-32 w-auto"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-animate">
              <div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6 leading-tight">
                  Há mais de 25 anos fazendo empresas brasileiras{' '}
                  <span className="gradient-text">crescerem globalmente</span>
                </h2>
                <div className="w-24 h-1 bg-orange-500 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-slate-700 font-opensans leading-relaxed">
                <p>
                  A <strong>2B COMEX</strong> nasceu da visão de que toda empresa brasileira merece ter acesso ao mercado global com segurança e estratégia. Desde nossa fundação, já acompanhamos mais de <strong>500 empresas</strong> em sua jornada de internacionalização.
                </p>
                <p>
                  Nossa experiência abrange desde pequenas empresas dando seus primeiros passos no exterior até grandes corporações expandindo para novos continentes. Estamos presentes em <strong>mais de 40 países</strong>, criando pontes comerciais sólidas e duradouras.
                </p>
                <p>
                  Não somos apenas consultores – somos <strong>parceiros estratégicos</strong> comprometidos com o sucesso de cada cliente, oferecendo soluções personalizadas que respeitam as particularidades de cada negócio.
                </p>
              </div>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift flex items-center gap-3"
              >
                Vamos conversar sobre sua expansão
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative scroll-animate" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* CEO Photo placeholder - replace with actual photo */}
                <div className="w-full max-w-md mx-auto">
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-montserrat font-bold">CEO</span>
                    </div>
                    <blockquote className="text-center">
                      <p className="text-lg text-slate-700 font-opensans italic leading-relaxed mb-4">
                        "Acreditamos que o comércio exterior não é apenas sobre mover produtos – é sobre conectar sonhos, culturas e oportunidades."
                      </p>
                      <footer className="text-slate-600 font-montserrat font-semibold">
                        — Fundador & CEO, 2B COMEX
                      </footer>
                    </blockquote>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>
    </>
  );
};

export default About;
