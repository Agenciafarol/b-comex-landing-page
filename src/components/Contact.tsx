
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!",
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro",
        description: "Houve um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-white textured-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-700 font-opensans">{t('contact.subtitle')}</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <Card className="scroll-animate shadow-2xl border-0">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.name')} 
                    className="h-14 text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.email')} 
                    className="h-14 text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.phone')} 
                    className="h-14 text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl" 
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.message')} 
                    rows={6} 
                    className="resize-none text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl" 
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-14 text-lg font-montserrat font-semibold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Enviando...' : t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Informações de Contato */}
          <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-montserrat font-bold text-slate-900 mb-6">
                  {t('contact.direct.title')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-slate-900">WhatsApp</p>
                      <p className="text-slate-700 font-opensans">(47) 90167-9196</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">@</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-slate-900">E-mail</p>  
                      <p className="text-slate-700 font-opensans">comercial@2bcomex.com.br</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://instagram.com/2bcomex" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover-lift cursor-pointer transition-transform duration-200 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">IG</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-slate-900">Instagram</p>
                      <p className="text-slate-700 font-opensans">@2bcomex</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
                <h4 className="font-montserrat font-bold text-slate-900 mb-3 text-lg">{t('contact.guarantee.title')}</h4>
                <p className="text-slate-700 font-opensans leading-relaxed">{t('contact.guarantee.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
