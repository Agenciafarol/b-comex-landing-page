
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Mail, Instagram } from 'lucide-react';
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
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Sucesso!",
        description: "Mensagem enviada com sucesso!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Erro ao enviar mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-2b-blue text-center mb-16">
          {t('contact.title')}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('contact.form.name')} 
                className="h-12"
                required
              />
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('contact.form.email')} 
                className="h-12"
                required
              />
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('contact.form.message')} 
                rows={5}
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-2b-orange hover:bg-orange-600 text-white h-12 text-lg font-medium"
              >
                {isSubmitting ? 'Enviando...' : t('contact.form.submit')}
              </Button>
            </form>
          </div>
          
          {/* Contato direto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-2b-blue mb-8">
              {t('contact.direct')}
            </h3>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/5547991679196" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-green-50 rounded-lg hover-scale border border-green-100"
              >
                <MessageCircle className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <p className="text-gray-600">(47) 99167-9196</p>
                </div>
              </a>
              
              <a 
                href="mailto:comercial@2bcomex.com.br"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover-scale border border-blue-100"
              >
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">E-mail</p>
                  <p className="text-gray-600">comercial@2bcomex.com.br</p>
                </div>
              </a>
              
              <a 
                href="https://instagram.com/2bcomex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-pink-50 rounded-lg hover-scale border border-pink-100"
              >
                <Instagram className="w-6 h-6 text-pink-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Instagram</p>
                  <p className="text-gray-600">@2bcomex</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
