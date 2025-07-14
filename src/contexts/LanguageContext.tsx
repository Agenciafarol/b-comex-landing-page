
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
    
    // About section
    'about.badge': 'Sobre nós',
    'about.title': 'Especialistas em',
    'about.titleHighlight': 'soluções globais',
    'about.description': 'Com mais de 25 anos de atuação, a 2B COMEX oferece soluções completas em importação, exportação e internacionalização de empresas.',
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
    'hero.badge': '25+ years transforming businesses globally',
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
    'about.description': 'With over 25 years of experience, 2B COMEX offers complete solutions in import, export and company internationalization.',
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
