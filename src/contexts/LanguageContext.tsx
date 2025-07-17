
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
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
    // Hero section - Simplified
    'hero.badge': 'Especialistas em Comércio Exterior',
    'hero.title': 'Conectamos sua empresa ao',
    'hero.titleHighlight': 'mercado global',
    'hero.subtitle': 'Soluções completas em importação, exportação e internacionalização com mais de 20 anos de experiência.',
    'hero.cta': 'Falar com especialista',
    'hero.stats.experience': 'Anos de experiência',
    'hero.stats.companies': 'Empresas atendidas',
    'hero.stats.countries': 'Países alcançados',
    
    // About section - Simplified
    'about.badge': 'Quem somos',
    'about.title': 'Especialistas em',
    'about.titleHighlight': 'comércio exterior',
    'about.description': 'A 2B COMEX oferece soluções completas para sua expansão internacional com segurança e agilidade.',
    'about.compliance.title': 'Conformidade Legal',
    'about.compliance.description': 'Total conformidade em todas as operações',
    'about.agility.title': 'Agilidade',
    'about.agility.description': 'Processos otimizados e resultados rápidos',
    'about.quote': 'Conectamos empresas ao mundo com estratégia e excelência.',
    
    // Services section - Simplified
    'services.title': 'Nossos serviços',
    'services.industries.title': 'Exportação',
    'services.industries.description': 'Levamos seus produtos ao mercado internacional',
    'services.foreign.title': 'Importação',
    'services.foreign.description': 'Importação segura e econômica',
    'services.import.title': 'Internacionalização',
    'services.import.description': 'Estratégias completas para expansão global',
    'services.cta': 'Saiba mais',
    
    // Benefits section - Simplified
    'benefits.badge': 'Nossos diferenciais',
    'benefits.title': 'Por que escolher a',
    'benefits.titleHighlight': '2B COMEX?',
    'benefits.agility.title': 'Experiência Comprovada',
    'benefits.agility.description': '20+ anos no mercado internacional',
    'benefits.communication.title': 'Atendimento Personalizado',
    'benefits.communication.description': 'Suporte dedicado em todas as etapas',
    'benefits.strategy.title': 'Soluções Completas',
    'benefits.strategy.description': 'Desde a estratégia até a execução',
    'benefits.security.title': 'Segurança Total',
    'benefits.security.description': 'Conformidade legal garantida',
    
    // Contact section
    'contact.title': 'Pronto para expandir globalmente?',
    'contact.subtitle': 'Entre em contato conosco e descubra como podemos ajudar sua empresa.',
    'contact.form.name': 'Nome completo',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefone',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar mensagem',
    'contact.direct.title': 'Contato direto',
    'contact.guarantee.title': 'Resposta rápida',
    'contact.guarantee.text': 'Respondemos em até 24 horas úteis.',
    
    // Footer
    'footer.description': 'Especialistas em comércio exterior conectando empresas ao mercado global.',
    'footer.nav.home': 'Início',
    'footer.nav.services': 'Serviços',
    'footer.nav.contact': 'Contato',
    'footer.copyright': '© 2025 2B COMEX – Todos os direitos reservados',
    
    // Fixed CTA
    'fixedCta.text': 'Falar com especialista'
  },
  en: {
    // Hero section - Simplified
    'hero.badge': 'Foreign Trade Specialists',
    'hero.title': 'Connect your company to the',
    'hero.titleHighlight': 'global market',
    'hero.subtitle': 'Complete solutions in import, export and internationalization with over 20 years of experience.',
    'hero.cta': 'Talk to specialist',
    'hero.stats.experience': 'Years of experience',
    'hero.stats.companies': 'Companies served',
    'hero.stats.countries': 'Countries reached',
    
    // About section - Simplified
    'about.badge': 'Who we are',
    'about.title': 'Specialists in',
    'about.titleHighlight': 'foreign trade',
    'about.description': '2B COMEX offers complete solutions for your international expansion with security and agility.',
    'about.compliance.title': 'Legal Compliance',
    'about.compliance.description': 'Total compliance in all operations',
    'about.agility.title': 'Agility',
    'about.agility.description': 'Optimized processes and fast results',
    'about.quote': 'We connect companies to the world with strategy and excellence.',
    
    // Services section - Simplified
    'services.title': 'Our services',
    'services.industries.title': 'Export',
    'services.industries.description': 'We take your products to the international market',
    'services.foreign.title': 'Import',
    'services.foreign.description': 'Safe and economical import',
    'services.import.title': 'Internationalization',
    'services.import.description': 'Complete strategies for global expansion',
    'services.cta': 'Learn more',
    
    // Benefits section - Simplified
    'benefits.badge': 'Our differentials',
    'benefits.title': 'Why choose',
    'benefits.titleHighlight': '2B COMEX?',
    'benefits.agility.title': 'Proven Experience',
    'benefits.agility.description': '20+ years in the international market',
    'benefits.communication.title': 'Personalized Service',
    'benefits.communication.description': 'Dedicated support at every stage',
    'benefits.strategy.title': 'Complete Solutions',
    'benefits.strategy.description': 'From strategy to execution',
    'benefits.security.title': 'Total Security',
    'benefits.security.description': 'Guaranteed legal compliance',
    
    // Contact section
    'contact.title': 'Ready to expand globally?',
    'contact.subtitle': 'Contact us and discover how we can help your company.',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.direct.title': 'Direct contact',
    'contact.guarantee.title': 'Quick response',
    'contact.guarantee.text': 'We respond within 24 business hours.',
    
    // Footer
    'footer.description': 'Foreign trade specialists connecting companies to the global market.',
    'footer.nav.home': 'Home',
    'footer.nav.services': 'Services',
    'footer.nav.contact': 'Contact',
    'footer.copyright': '© 2025 2B COMEX – All rights reserved',
    
    // Fixed CTA
    'fixedCta.text': 'Talk to specialist'
  },
  es: {
    // Hero section - Simplified
    'hero.badge': 'Especialistas en Comercio Exterior',
    'hero.title': 'Conectamos tu empresa al',
    'hero.titleHighlight': 'mercado global',
    'hero.subtitle': 'Soluciones completas en importación, exportación e internacionalización con más de 20 años de experiencia.',
    'hero.cta': 'Hablar con especialista',
    'hero.stats.experience': 'Años de experiencia',
    'hero.stats.companies': 'Empresas atendidas',
    'hero.stats.countries': 'Países alcanzados',
    
    // About section - Simplified
    'about.badge': 'Quiénes somos',
    'about.title': 'Especialistas en',
    'about.titleHighlight': 'comercio exterior',
    'about.description': '2B COMEX ofrece soluciones completas para tu expansión internacional con seguridad y agilidad.',
    'about.compliance.title': 'Cumplimiento Legal',
    'about.compliance.description': 'Total cumplimiento en todas las operaciones',
    'about.agility.title': 'Agilidad',
    'about.agility.description': 'Procesos optimizados y resultados rápidos',
    'about.quote': 'Conectamos empresas al mundo con estrategia y excelencia.',
    
    // Services section - Simplified
    'services.title': 'Nuestros servicios',
    'services.industries.title': 'Exportación',
    'services.industries.description': 'Llevamos tus productos al mercado internacional',
    'services.foreign.title': 'Importación',
    'services.foreign.description': 'Importación segura y económica',
    'services.import.title': 'Internacionalización',
    'services.import.description': 'Estrategias completas para expansión global',
    'services.cta': 'Saber más',
    
    // Benefits section - Simplified
    'benefits.badge': 'Nuestros diferenciales',
    'benefits.title': 'Por qué elegir',
    'benefits.titleHighlight': '2B COMEX?',
    'benefits.agility.title': 'Experiencia Comprobada',
    'benefits.agility.description': '20+ años en el mercado internacional',
    'benefits.communication.title': 'Atención Personalizada',
    'benefits.communication.description': 'Soporte dedicado en todas las etapas',
    'benefits.strategy.title': 'Soluciones Completas',
    'benefits.strategy.description': 'Desde la estrategia hasta la ejecución',
    'benefits.security.title': 'Seguridad Total',
    'benefits.security.description': 'Cumplimiento legal garantizado',
    
    // Contact section
    'contact.title': '¿Listo para expandir globalmente?',
    'contact.subtitle': 'Contáctanos y descubre cómo podemos ayudar a tu empresa.',
    'contact.form.name': 'Nombre completo',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.direct.title': 'Contacto directo',
    'contact.guarantee.title': 'Respuesta rápida',
    'contact.guarantee.text': 'Respondemos en 24 horas hábiles.',
    
    // Footer
    'footer.description': 'Especialistas en comercio exterior conectando empresas al mercado global.',
    'footer.nav.home': 'Inicio',
    'footer.nav.services': 'Servicios',
    'footer.nav.contact': 'Contacto',
    'footer.copyright': '© 2025 2B COMEX – Todos los derechos reservados',
    
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
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
