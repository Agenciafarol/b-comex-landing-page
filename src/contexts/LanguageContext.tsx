
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

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
    'hero.badge': '25+ anos transformando negócios globalmente',
    'hero.title': 'Expanda sua empresa para o',
    'hero.titleHighlight': 'mundo',
    'hero.subtitle': 'Conectamos sua empresa a oportunidades globais com segurança, estratégia e excelência',
    'hero.cta': 'Começar agora',
    'hero.stats.experience': 'Anos de experiência',
    'hero.stats.companies': 'Empresas atendidas',
    'hero.stats.countries': 'Países alcançados',
    'hero.stats.satisfaction': 'Satisfação dos clientes',
    
    // Services section
    'services.title': 'Como podemos ajudar sua empresa',
    'services.industries.title': 'Indústrias Brasileiras',
    'services.industries.description': 'Estratégias para levar seus produtos ao mercado internacional',
    'services.foreign.title': 'Empresas Estrangeiras',
    'services.foreign.description': 'Navegação completa pelas regulamentações e oportunidades locais',
    'services.import.title': 'Importação Ágil',
    'services.import.description': 'Importação otimizada, econômica e segura',
    'services.cta': 'Quero saber mais',
    
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
    'hero.badge': '25+ years transforming businesses globally',
    'hero.title': 'Expand your company to the',
    'hero.titleHighlight': 'world',
    'hero.subtitle': 'We connect your company to global opportunities with security, strategy and excellence',
    'hero.cta': 'Get started now',
    'hero.stats.experience': 'Years of experience',
    'hero.stats.companies': 'Companies served',
    'hero.stats.countries': 'Countries reached',
    'hero.stats.satisfaction': 'Customer satisfaction',
    
    // Services section
    'services.title': 'How we can help your company',
    'services.industries.title': 'Brazilian Industries',
    'services.industries.description': 'Strategies to take your products to the international market',
    'services.foreign.title': 'Foreign Companies',
    'services.foreign.description': 'Complete navigation through local regulations and opportunities',
    'services.import.title': 'Agile Import',
    'services.import.description': 'Optimized, economical and secure import',
    'services.cta': 'Learn more',
    
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
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
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
