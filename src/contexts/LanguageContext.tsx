
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
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
    'hero.title': 'Conectamos sua empresa ao mercado global',
    'hero.subtitle': 'Mais de 20 anos de experiência em comércio exterior com soluções completas em exportação, importação e internacionalização.',
    'hero.cta': 'Falar com um especialista',
    
    // O que fazemos
    'services.title': 'O que fazemos',
    'services.export': 'Exportação de produtos brasileiros',
    'services.export.desc': 'Estratégias para levar seus produtos ao mercado internacional',
    'services.foreign': 'Entrada de empresas estrangeiras no Brasil',
    'services.foreign.desc': 'Navegação completa pelas regulamentações locais',
    'services.import': 'Importação estratégica e segura',
    'services.import.desc': 'Processos otimizados e conformes com a legislação',
    
    // Por que escolher
    'why.title': 'Por que escolher a 2B COMEX',
    'why.experience': 'Mais de 20 anos de experiência',
    'why.consulting': 'Consultoria estratégica e prática',
    'why.service': 'Atendimento direto e transparente',
    'why.compliance': 'Conformidade jurídica internacional',
    
    // Principais serviços
    'mainServices.title': 'Principais serviços',
    'mainServices.internationalization': 'Internacionalização de empresas',
    'mainServices.intelligence': 'Inteligência de mercado',
    'mainServices.training': 'Treinamento de equipes',
    'mainServices.regimes': 'Regimes especiais',
    'mainServices.logistics': 'Logística internacional',
    'mainServices.consulting': 'Consultoria documental',
    
    // Vídeo
    'video.title': 'Assista e saiba mais',
    
    // Contato
    'contact.title': 'Entre em contato',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar mensagem',
    'contact.direct': 'Contato direto',
    
    // Footer
    'footer.home': 'Início',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.copyright': '© 2025 2B COMEX – Especialistas em Comércio Exterior'
  },
  en: {
    // Hero section
    'hero.title': 'We connect your company to the global market',
    'hero.subtitle': '20+ years of experience in foreign trade with complete solutions in export, import and internationalization.',
    'hero.cta': 'Talk to a specialist',
    
    // O que fazemos
    'services.title': 'What we do',
    'services.export': 'Export of Brazilian products',
    'services.export.desc': 'Strategies to take your products to the international market',
    'services.foreign': 'Entry of foreign companies in Brazil',
    'services.foreign.desc': 'Complete navigation through local regulations',
    'services.import': 'Strategic and secure import',
    'services.import.desc': 'Optimized processes compliant with legislation',
    
    // Por que escolher
    'why.title': 'Why choose 2B COMEX',
    'why.experience': '20+ years of experience',
    'why.consulting': 'Strategic and practical consulting',
    'why.service': 'Direct and transparent service',
    'why.compliance': 'International legal compliance',
    
    // Principais serviços
    'mainServices.title': 'Main services',
    'mainServices.internationalization': 'Company internationalization',
    'mainServices.intelligence': 'Market intelligence',
    'mainServices.training': 'Team training',
    'mainServices.regimes': 'Special regimes',
    'mainServices.logistics': 'International logistics',
    'mainServices.consulting': 'Document consulting',
    
    // Vídeo
    'video.title': 'Watch and learn more',
    
    // Contato
    'contact.title': 'Get in touch',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.direct': 'Direct contact',
    
    // Footer
    'footer.home': 'Home',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 2B COMEX – Foreign Trade Specialists'
  },
  es: {
    // Hero section
    'hero.title': 'Conectamos tu empresa al mercado global',
    'hero.subtitle': '20+ años de experiencia en comercio exterior con soluciones completas en exportación, importación e internacionalización.',
    'hero.cta': 'Hablar con un especialista',
    
    // O que fazemos
    'services.title': 'Qué hacemos',
    'services.export': 'Exportación de productos brasileños',
    'services.export.desc': 'Estrategias para llevar sus productos al mercado internacional',
    'services.foreign': 'Entrada de empresas extranjeras en Brasil',
    'services.foreign.desc': 'Navegación completa por las regulaciones locales',
    'services.import': 'Importación estratégica y segura',
    'services.import.desc': 'Procesos optimizados y conformes con la legislación',
    
    // Por que escolher
    'why.title': 'Por qué elegir 2B COMEX',
    'why.experience': '20+ años de experiencia',
    'why.consulting': 'Consultoría estratégica y práctica',
    'why.service': 'Atención directa y transparente',
    'why.compliance': 'Cumplimiento jurídico internacional',
    
    // Principais serviços
    'mainServices.title': 'Principales servicios',
    'mainServices.internationalization': 'Internacionalización de empresas',
    'mainServices.intelligence': 'Inteligencia de mercado',
    'mainServices.training': 'Entrenamiento de equipos',
    'mainServices.regimes': 'Regímenes especiales',
    'mainServices.logistics': 'Logística internacional',
    'mainServices.consulting': 'Consultoría documental',
    
    // Vídeo
    'video.title': 'Mira y aprende más',
    
    // Contato
    'contact.title': 'Ponte en contacto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.direct': 'Contacto directo',
    
    // Footer
    'footer.home': 'Inicio',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2025 2B COMEX – Especialistas en Comercio Exterior'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
