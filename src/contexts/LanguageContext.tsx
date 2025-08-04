
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
    'hero.badge': 'Especialistas em Comércio Exterior',
    'hero.feature1': 'Consultoria Especializada',
    'hero.feature2': 'Processos Ágeis',
    'hero.feature3': 'Resultados Garantidos',
    
    // O que fazemos
    'services.title': 'O que fazemos',
    'services.export': 'Exportação de produtos brasileiros',
    'services.export.desc': 'Estratégias para levar seus produtos ao mercado internacional',
    'services.foreign': 'Entrada de empresas estrangeiras no Brasil',
    'services.foreign.desc': 'Navegação completa pelas regulamentações locais',
    'services.import': 'Importação estratégica e segura',
    'services.import.desc': 'Processos otimizados e conformes com a legislação',
    'services.download': 'Baixar Apresentação',
    
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
    'contact.form.submitting': 'Enviando...',
    'contact.direct': 'Contato direto',
    'contact.form.error': 'Por favor, preencha todos os campos.',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.errorSending': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.form.errorTitle': 'Erro',
    'contact.form.successTitle': 'Sucesso!',
    
    // Footer
    'footer.home': 'Início',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.copyright': '© 2025 2B COMEX – Especialistas em Comércio Exterior',

    // Fixed CTA
    'fixedCta.text': 'Falar conosco',

    // About
    'about.badge': 'Sobre nós',
    'about.title': 'Especialistas em',
    'about.titleHighlight': 'Comércio Exterior',
    'about.description': 'Há mais de 20 anos no mercado, a 2B COMEX é referência em soluções completas para empresas que buscam expandir seus negócios além das fronteiras nacionais.',
    'about.compliance.title': 'Conformidade Total',
    'about.compliance.description': 'Garantimos que todos os processos sigam rigorosamente as regulamentações internacionais e nacionais.',
    'about.agility.title': 'Agilidade e Eficiência',
    'about.agility.description': 'Processos otimizados para acelerar suas operações de comércio exterior.',
    'about.quote': 'Nossa missão é conectar empresas brasileiras ao mundo e empresas estrangeiras ao Brasil, com segurança, transparência e resultados excepcionais.',
    'about.commitment': 'Nosso compromisso',

    // Benefits
    'benefits.badge': 'Vantagens',
    'benefits.title': 'Por que escolher a',
    'benefits.titleHighlight': '2B COMEX',
    'benefits.agility.title': 'Agilidade',
    'benefits.agility.description': 'Processos otimizados para máxima eficiência',
    'benefits.communication.title': 'Comunicação',
    'benefits.communication.description': 'Transparência e clareza em cada etapa',
    'benefits.strategy.title': 'Estratégia',
    'benefits.strategy.description': 'Soluções personalizadas para cada empresa',
    'benefits.security.title': 'Segurança',
    'benefits.security.description': 'Conformidade total com regulamentações',

    // Services List
    'servicesList.badge': 'Serviços',
    'servicesList.title': 'Soluções completas para',
    'servicesList.titleHighlight': 'seu negócio global',
    'servicesList.subtitle': 'Oferecemos uma gama completa de serviços especializados em comércio exterior para atender todas as necessidades da sua empresa.',
    'servicesList.internationalization': 'Internacionalização de empresas',
    'servicesList.internationalization.desc': 'Estratégias completas para expansão internacional de negócios',
    'servicesList.intelligence': 'Inteligência de mercado',
    'servicesList.intelligence.desc': 'Análises detalhadas de mercados internacionais e oportunidades',
    'servicesList.training': 'Treinamento de equipes',
    'servicesList.training.desc': 'Capacitação especializada em comércio exterior',
    'servicesList.regimes': 'Regimes especiais',
    'servicesList.regimes.desc': 'Aproveitamento de benefícios fiscais e regimes diferenciados',
    'servicesList.logistics': 'Logística internacional',
    'servicesList.logistics.desc': 'Soluções completas em transporte e armazenagem',
    'servicesList.consulting': 'Consultoria documental',
    'servicesList.consulting.desc': 'Apoio completo na documentação necessária',

    // Services (for Industries)
    'services.industries.title': 'Atendimento a diversos setores',
    'services.industries.description': 'Experiência especializada em múltiplos segmentos da economia',
    'services.cta': 'Conheça nossos serviços'
  },
  en: {
    // Hero section
    'hero.title': 'We connect your company to the global market',
    'hero.subtitle': '20+ years of experience in foreign trade with complete solutions in export, import and internationalization.',
    'hero.cta': 'Talk to a specialist',
    'hero.badge': 'Foreign Trade Specialists',
    'hero.feature1': 'Specialized Consulting',
    'hero.feature2': 'Agile Processes',
    'hero.feature3': 'Guaranteed Results',
    
    // O que fazemos
    'services.title': 'What we do',
    'services.export': 'Export of Brazilian products',
    'services.export.desc': 'Strategies to take your products to the international market',
    'services.foreign': 'Entry of foreign companies in Brazil',
    'services.foreign.desc': 'Complete navigation through local regulations',
    'services.import': 'Strategic and secure import',
    'services.import.desc': 'Optimized processes compliant with legislation',
    'services.download': 'Download Presentation',
    
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
    'contact.form.submitting': 'Sending...',
    'contact.direct': 'Direct contact',
    'contact.form.error': 'Please fill in all fields.',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.errorSending': 'Error sending message. Please try again.',
    'contact.form.errorTitle': 'Error',
    'contact.form.successTitle': 'Success!',
    
    // Footer
    'footer.home': 'Home',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 2B COMEX – Foreign Trade Specialists',

    // Fixed CTA
    'fixedCta.text': 'Contact us',

    // About
    'about.badge': 'About us',
    'about.title': 'Specialists in',
    'about.titleHighlight': 'Foreign Trade',
    'about.description': 'For over 20 years in the market, 2B COMEX is a reference in complete solutions for companies seeking to expand their business beyond national borders.',
    'about.compliance.title': 'Total Compliance',
    'about.compliance.description': 'We ensure that all processes strictly follow international and national regulations.',
    'about.agility.title': 'Agility and Efficiency',
    'about.agility.description': 'Optimized processes to accelerate your foreign trade operations.',
    'about.quote': 'Our mission is to connect Brazilian companies to the world and foreign companies to Brazil, with security, transparency and exceptional results.',
    'about.commitment': 'Our commitment',

    // Benefits
    'benefits.badge': 'Benefits',
    'benefits.title': 'Why choose',
    'benefits.titleHighlight': '2B COMEX',
    'benefits.agility.title': 'Agility',
    'benefits.agility.description': 'Optimized processes for maximum efficiency',
    'benefits.communication.title': 'Communication',
    'benefits.communication.description': 'Transparency and clarity at every step',
    'benefits.strategy.title': 'Strategy',
    'benefits.strategy.description': 'Customized solutions for each company',
    'benefits.security.title': 'Security',
    'benefits.security.description': 'Full compliance with regulations',

    // Services List
    'servicesList.badge': 'Services',
    'servicesList.title': 'Complete solutions for',
    'servicesList.titleHighlight': 'your global business',
    'servicesList.subtitle': 'We offer a complete range of specialized foreign trade services to meet all your company\'s needs.',
    'servicesList.internationalization': 'Company internationalization',
    'servicesList.internationalization.desc': 'Complete strategies for international business expansion',
    'servicesList.intelligence': 'Market intelligence',
    'servicesList.intelligence.desc': 'Detailed analysis of international markets and opportunities',
    'servicesList.training': 'Team training',
    'servicesList.training.desc': 'Specialized training in foreign trade',
    'servicesList.regimes': 'Special regimes',
    'servicesList.regimes.desc': 'Taking advantage of tax benefits and differentiated regimes',
    'servicesList.logistics': 'International logistics',
    'servicesList.logistics.desc': 'Complete solutions in transportation and storage',
    'servicesList.consulting': 'Document consulting',
    'servicesList.consulting.desc': 'Complete support with necessary documentation',

    // Services (for Industries)
    'services.industries.title': 'Service to various sectors',
    'services.industries.description': 'Specialized experience in multiple segments of the economy',
    'services.cta': 'Learn about our services'
  },
  es: {
    // Hero section
    'hero.title': 'Conectamos tu empresa al mercado global',
    'hero.subtitle': '20+ años de experiencia en comercio exterior con soluciones completas en exportación, importación e internacionalización.',
    'hero.cta': 'Hablar con un especialista',
    'hero.badge': 'Especialistas en Comercio Exterior',
    'hero.feature1': 'Consultoría Especializada',
    'hero.feature2': 'Procesos Ágiles',
    'hero.feature3': 'Resultados Garantizados',
    
    // O que fazemos
    'services.title': 'Qué hacemos',
    'services.export': 'Exportación de productos brasileños',
    'services.export.desc': 'Estrategias para llevar sus productos al mercado internacional',
    'services.foreign': 'Entrada de empresas extranjeras en Brasil',
    'services.foreign.desc': 'Navegación completa por las regulaciones locales',
    'services.import': 'Importación estratégica y segura',
    'services.import.desc': 'Procesos optimizados y conformes con la legislación',
    'services.download': 'Descargar Presentación',
    
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
    'contact.form.submitting': 'Enviando...',
    'contact.direct': 'Contacto directo',
    'contact.form.error': 'Por favor, complete todos los campos.',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.form.errorSending': 'Error al enviar mensaje. Inténtelo de nuevo.',
    'contact.form.errorTitle': 'Error',
    'contact.form.successTitle': '¡Éxito!',
    
    // Footer
    'footer.home': 'Inicio',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2025 2B COMEX – Especialistas en Comercio Exterior',

    // Fixed CTA
    'fixedCta.text': 'Contactanos',

    // About
    'about.badge': 'Sobre nosotros',
    'about.title': 'Especialistas en',
    'about.titleHighlight': 'Comercio Exterior',
    'about.description': 'Hace más de 20 años en el mercado, 2B COMEX es referencia en soluciones completas para empresas que buscan expandir sus negocios más allá de las fronteras nacionales.',
    'about.compliance.title': 'Cumplimiento Total',
    'about.compliance.description': 'Garantizamos que todos los procesos sigan rigurosamente las regulaciones internacionales y nacionales.',
    'about.agility.title': 'Agilidad y Eficiencia',
    'about.agility.description': 'Procesos optimizados para acelerar sus operaciones de comercio exterior.',
    'about.quote': 'Nuestra misión es conectar empresas brasileñas al mundo y empresas extranjeras a Brasil, con seguridad, transparencia y resultados excepcionales.',
    'about.commitment': 'Nuestro compromiso',

    // Benefits
    'benefits.badge': 'Ventajas',
    'benefits.title': 'Por qué elegir',
    'benefits.titleHighlight': '2B COMEX',
    'benefits.agility.title': 'Agilidad',
    'benefits.agility.description': 'Procesos optimizados para máxima eficiencia',
    'benefits.communication.title': 'Comunicación',
    'benefits.communication.description': 'Transparencia y claridad en cada etapa',
    'benefits.strategy.title': 'Estrategia',
    'benefits.strategy.description': 'Soluciones personalizadas para cada empresa',
    'benefits.security.title': 'Seguridad',
    'benefits.security.description': 'Cumplimiento total con regulaciones',

    // Services List
    'servicesList.badge': 'Servicios',
    'servicesList.title': 'Soluciones completas para',
    'servicesList.titleHighlight': 'su negocio global',
    'servicesList.subtitle': 'Ofrecemos una gama completa de servicios especializados en comercio exterior para atender todas las necesidades de su empresa.',
    'servicesList.internationalization': 'Internacionalización de empresas',
    'servicesList.internationalization.desc': 'Estrategias completas para expansión internacional de negocios',
    'servicesList.intelligence': 'Inteligencia de mercado',
    'servicesList.intelligence.desc': 'Análisis detallados de mercados internacionales y oportunidades',
    'servicesList.training': 'Entrenamiento de equipos',
    'servicesList.training.desc': 'Capacitación especializada en comercio exterior',
    'servicesList.regimes': 'Regímenes especiales',
    'servicesList.regimes.desc': 'Aprovechamiento de beneficios fiscales y regímenes diferenciados',
    'servicesList.logistics': 'Logística internacional',
    'servicesList.logistics.desc': 'Soluciones completas en transporte y almacenamiento',
    'servicesList.consulting': 'Consultoría documental',
    'servicesList.consulting.desc': 'Apoyo completo en la documentación necesaria',

    // Services (for Industries)
    'services.industries.title': 'Atención a diversos sectores',
    'services.industries.description': 'Experiencia especializada en múltiples segmentos de la economía',
    'services.cta': 'Conozca nuestros servicios'
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
