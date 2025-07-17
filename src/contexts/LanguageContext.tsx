
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    // Hero section
    'hero.badge': '20+ anos transformando negócios globalmente',
    'hero.title': 'Expanda sua empresa para o',
    'hero.titleHighlight': 'mundo',
    'hero.subtitle': 'Conectamos sua empresa a oportunidades globais com segurança, estratégia e excelência',
    'hero.cta': 'Começar agora',
    'hero.stats.experience': 'Anos de experiência',
    'hero.stats.companies': 'Empresas atendidas',
    'hero.stats.countries': 'Países alcançados',
    'hero.stats.satisfaction': 'Satisfação dos clientes',
    
    // About section
    'about.badge': 'Sobre nós',
    'about.title': 'Especialistas em',
    'about.titleHighlight': 'soluções globais',
    'about.description': 'Com mais de 20 anos de atuação, a 2B COMEX oferece soluções completas em importação, exportação e internacionalização de empresas.',
    'about.compliance.title': 'Conformidade Total',
    'about.compliance.description': 'Garantimos total conformidade legal em todas as operações',
    'about.agility.title': 'Agilidade',
    'about.agility.description': 'Processos otimizados para resultados rápidos',
    'about.quote': 'Conectamos empresas ao mundo com estratégia, ética e excelência.',
    'about.commitment': 'Nosso compromisso',
    
    // Services section
    'services.title': 'Como podemos ajudar sua empresa',
    'services.industries.title': 'Indústrias Brasileiras',
    'services.industries.description': 'Estratégias para levar seus produtos ao mercado internacional',
    'services.foreign.title': 'Empresas Estrangeiras',
    'services.foreign.description': 'Navegação completa pelas regulamentações e oportunidades locais',
    'services.import.title': 'Importação Ágil',
    'services.import.description': 'Importação otimizada, econômica e segura',
    'services.cta': 'Quero saber mais',
    
    // Benefits section
    'benefits.badge': 'Por que nos escolher',
    'benefits.title': 'Por que escolher a',
    'benefits.titleHighlight': '2BCOMEX?',
    'benefits.agility.title': 'Agilidade e Economia Real',
    'benefits.agility.description': 'Processos otimizados que reduzem custos e tempo',
    'benefits.communication.title': 'Atendimento Direto e Transparente',
    'benefits.communication.description': 'Comunicação clara em todas as etapas',
    'benefits.strategy.title': 'Estratégia Sob Medida',
    'benefits.strategy.description': 'Soluções personalizadas para seu negócio',
    'benefits.security.title': 'Segurança Jurídica e Operacional',
    'benefits.security.description': 'Total conformidade legal e redução de riscos',
    
    // Services List section
    'servicesList.badge': 'Nossos Serviços',
    'servicesList.title': 'Soluções completas para',
    'servicesList.titleHighlight': 'seu sucesso global',
    'servicesList.subtitle': 'Oferecemos todas as ferramentas necessárias para sua expansão internacional',
    'servicesList.internationalization': 'Internacionalização de Empresas',
    'servicesList.internationalization.desc': 'Estratégias completas para expansão internacional',
    'servicesList.intelligence': 'Inteligência de Mercado',
    'servicesList.intelligence.desc': 'Análises detalhadas de oportunidades globais',
    'servicesList.training': 'Treinamento de Equipes',
    'servicesList.training.desc': 'Capacitação especializada em comércio exterior',
    'servicesList.regimes': 'Regimes Especiais',
    'servicesList.regimes.desc': 'Aproveitamento de benefícios fiscais e tributários',
    'servicesList.logistics': 'Logística Internacional',
    'servicesList.logistics.desc': 'Gestão completa da cadeia de suprimentos global',
    'servicesList.consulting': 'Consultoria Documental',
    'servicesList.consulting.desc': 'Elaboração e revisão de documentos comerciais',
    
    // Video section
    'video.title': 'Veja como ajudamos empresas a conquistar o mercado global',
    'video.subtitle': 'Assista o vídeo abaixo e saiba mais!',
    
    // Contact section
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Preencha o formulário ao lado ou fale conosco por WhatsApp. Nossa equipe responderá o mais rápido possível.',
    'contact.form.name': 'Seu nome completo',
    'contact.form.email': 'Seu e-mail',
    'contact.form.phone': 'Telefone (opcional)',
    'contact.form.message': 'Sua mensagem',
    'contact.form.submit': 'Enviar mensagem',
    'contact.direct.title': 'Fale conosco diretamente',
    'contact.guarantee.title': 'Resposta rápida garantida',
    'contact.guarantee.text': 'Nossa equipe responde todas as mensagens em até x horas úteis. Sua expansão internacional não pode esperar!',
    
    // Footer
    'footer.description': 'Quer importar, exportar ou internacionalizar sua empresa com estratégia e segurança? Fale com a 2B COMEX.',
    'footer.nav.home': 'Início',
    'footer.nav.services': 'Serviços',
    'footer.nav.contact': 'Contato',
    'footer.copyright': '© 2025 2B COMEX – Especialista em Comércio Exterior',
    
    // Fixed CTA
    'fixedCta.text': 'Falar com especialista'
  },
  en: {
    // Hero section
    'hero.badge': '20+ years transforming businesses globally',
    'hero.title': 'Expand your company to the',
    'hero.titleHighlight': 'world',
    'hero.subtitle': 'We connect your company to global opportunities with security, strategy and excellence',
    'hero.cta': 'Get started now',
    'hero.stats.experience': 'Years of experience',
    'hero.stats.companies': 'Companies served',
    'hero.stats.countries': 'Countries reached',
    'hero.stats.satisfaction': 'Customer satisfaction',
    
    // About section
    'about.badge': 'About us',
    'about.title': 'Specialists in',
    'about.titleHighlight': 'global solutions',
    'about.description': 'With over 20 years of experience, 2B COMEX offers complete solutions in import, export and company internationalization.',
    'about.compliance.title': 'Total Compliance',
    'about.compliance.description': 'We guarantee total legal compliance in all operations',
    'about.agility.title': 'Agility',
    'about.agility.description': 'Optimized processes for fast results',
    'about.quote': 'We connect companies to the world with strategy, ethics and excellence.',
    'about.commitment': 'Our commitment',
    
    // Services section
    'services.title': 'How we can help your company',
    'services.industries.title': 'Brazilian Industries',
    'services.industries.description': 'Strategies to take your products to the international market',
    'services.foreign.title': 'Foreign Companies',
    'services.foreign.description': 'Complete navigation through local regulations and opportunities',
    'services.import.title': 'Agile Import',
    'services.import.description': 'Optimized, economical and secure import',
    'services.cta': 'Learn more',
    
    // Benefits section
    'benefits.badge': 'Why choose us',
    'benefits.title': 'Why choose',
    'benefits.titleHighlight': '2BCOMEX?',
    'benefits.agility.title': 'Real Agility and Economy',
    'benefits.agility.description': 'Optimized processes that reduce costs and time',
    'benefits.communication.title': 'Direct and Transparent Service',
    'benefits.communication.description': 'Clear communication at all stages',
    'benefits.strategy.title': 'Tailor-made Strategy',
    'benefits.strategy.description': 'Customized solutions for your business',
    'benefits.security.title': 'Legal and Operational Security',
    'benefits.security.description': 'Total legal compliance and risk reduction',
    
    // Services List section
    'servicesList.badge': 'Our Services',
    'servicesList.title': 'Complete solutions for',
    'servicesList.titleHighlight': 'your global success',
    'servicesList.subtitle': 'We offer all the necessary tools for your international expansion',
    'servicesList.internationalization': 'Company Internationalization',
    'servicesList.internationalization.desc': 'Complete strategies for international expansion',
    'servicesList.intelligence': 'Market Intelligence',
    'servicesList.intelligence.desc': 'Detailed analysis of global opportunities',
    'servicesList.training': 'Team Training',
    'servicesList.training.desc': 'Specialized training in foreign trade',
    'servicesList.regimes': 'Special Regimes',
    'servicesList.regimes.desc': 'Taking advantage of tax benefits',
    'servicesList.logistics': 'International Logistics',
    'servicesList.logistics.desc': 'Complete management of the global supply chain',
    'servicesList.consulting': 'Document Consulting',
    'servicesList.consulting.desc': 'Preparation and review of commercial documents',
    
    // Video section
    'video.title': 'See how we help companies conquer the global market',
    'video.subtitle': 'Watch the video below and learn more!',
    
    // Contact section
    'contact.title': 'Let\'s talk?',
    'contact.subtitle': 'Fill out the form or contact us via WhatsApp. Our team will respond as quickly as possible.',
    'contact.form.name': 'Your full name',
    'contact.form.email': 'Your email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send message',
    'contact.direct.title': 'Contact us directly',
    'contact.guarantee.title': 'Quick response guaranteed',
    'contact.guarantee.text': 'Our team responds to all messages within x business hours. Your international expansion cannot wait!',
    
    // Footer
    'footer.description': 'Want to import, export or internationalize your company with strategy and security? Contact 2B COMEX.',
    'footer.nav.home': 'Home',
    'footer.nav.services': 'Services',
    'footer.nav.contact': 'Contact',
    'footer.copyright': '© 2025 2B COMEX – Foreign Trade Specialist',
    
    // Fixed CTA
    'fixedCta.text': 'Talk to specialist'
  },
  es: {
    // Hero section
    'hero.badge': '20+ años transformando negocios globalmente',
    'hero.title': 'Expande tu empresa al',
    'hero.titleHighlight': 'mundo',
    'hero.subtitle': 'Conectamos tu empresa a oportunidades globales con seguridad, estrategia y excelencia',
    'hero.cta': 'Empezar ahora',
    'hero.stats.experience': 'Años de experiencia',
    'hero.stats.companies': 'Empresas atendidas',
    'hero.stats.countries': 'Países alcanzados',
    'hero.stats.satisfaction': 'Satisfacción del cliente',
    
    // About section
    'about.badge': 'Sobre nosotros',
    'about.title': 'Especialistas en',
    'about.titleHighlight': 'soluciones globales',
    'about.description': 'Con más de 20 años de experiencia, 2B COMEX ofrece soluciones completas en importación, exportación e internacionalización de empresas.',
    'about.compliance.title': 'Cumplimiento Total',
    'about.compliance.description': 'Garantizamos total cumplimiento legal en todas las operaciones',
    'about.agility.title': 'Agilidad',
    'about.agility.description': 'Procesos optimizados para resultados rápidos',
    'about.quote': 'Conectamos empresas al mundo con estrategia, ética y excelencia.',
    'about.commitment': 'Nuestro compromiso',
    
    // Services section
    'services.title': 'Cómo podemos ayudar a tu empresa',
    'services.industries.title': 'Industrias Brasileñas',
    'services.industries.description': 'Estrategias para llevar tus productos al mercado internacional',
    'services.foreign.title': 'Empresas Extranjeras',
    'services.foreign.description': 'Navegación completa por las regulaciones y oportunidades locales',
    'services.import.title': 'Importación Ágil',
    'services.import.description': 'Importación optimizada, económica y segura',
    'services.cta': 'Quiero saber más',
    
    // Benefits section
    'benefits.badge': 'Por qué elegirnos',
    'benefits.title': 'Por qué elegir',
    'benefits.titleHighlight': '2BCOMEX?',
    'benefits.agility.title': 'Agilidad y Economía Real',
    'benefits.agility.description': 'Procesos optimizados que reducen costos y tiempo',
    'benefits.communication.title': 'Atención Directa y Transparente',
    'benefits.communication.description': 'Comunicación clara en todas las etapas',
    'benefits.strategy.title': 'Estrategia a Medida',
    'benefits.strategy.description': 'Soluciones personalizadas para tu negocio',
    'benefits.security.title': 'Seguridad Jurídica y Operacional',
    'benefits.security.description': 'Total cumplimiento legal y reducción de riesgos',
    
    // Services List section
    'servicesList.badge': 'Nuestros Servicios',
    'servicesList.title': 'Soluciones completas para',
    'servicesList.titleHighlight': 'tu éxito global',
    'servicesList.subtitle': 'Ofrecemos todas las herramientas necesarias para tu expansión internacional',
    'servicesList.internationalization': 'Internacionalización de Empresas',
    'servicesList.internationalization.desc': 'Estrategias completas para expansión internacional',
    'servicesList.intelligence': 'Inteligencia de Mercado',
    'servicesList.intelligence.desc': 'Análisis detallados de oportunidades globales',
    'servicesList.training': 'Entrenamiento de Equipos',
    'servicesList.training.desc': 'Capacitación especializada en comercio exterior',
    'servicesList.regimes': 'Regímenes Especiales',
    'servicesList.regimes.desc': 'Aprovechamiento de beneficios fiscales y tributarios',
    'servicesList.logistics': 'Logística Internacional',
    'servicesList.logistics.desc': 'Gestión completa de la cadena de suministro global',
    'servicesList.consulting': 'Consultoría Documental',
    'servicesList.consulting.desc': 'Elaboración y revisión de documentos comerciales',
    
    // Video section
    'video.title': 'Ve cómo ayudamos a las empresas a conquistar el mercado global',
    'video.subtitle': '¡Mira el video a continuación y aprende más!',
    
    // Contact section
    'contact.title': '¿Conversamos?',
    'contact.subtitle': 'Completa el formulario o contáctanos por WhatsApp. Nuestro equipo responderá lo más rápido posible.',
    'contact.form.name': 'Tu nombre completo',
    'contact.form.email': 'Tu correo electrónico',
    'contact.form.phone': 'Teléfono (opcional)',
    'contact.form.message': 'Tu mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.direct.title': 'Contáctanos directamente',
    'contact.guarantee.title': 'Respuesta rápida garantizada',
    'contact.guarantee.text': 'Nuestro equipo responde todos los mensajes en hasta x horas hábiles. ¡Tu expansión internacional no puede esperar!',
    
    // Footer
    'footer.description': '¿Quieres importar, exportar o internacionalizar tu empresa con estrategia y seguridad? Habla con 2B COMEX.',
    'footer.nav.home': 'Inicio',
    'footer.nav.services': 'Servicios',
    'footer.nav.contact': 'Contacto',
    'footer.copyright': '© 2025 2B COMEX – Especialista en Comercio Exterior',
    
    // Fixed CTA
    'fixedCta.text': 'Hablar con especialista'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'pt') return 'en';
      if (prev === 'en') return 'es';
      return 'pt';
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
