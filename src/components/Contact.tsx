
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white textured-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-slate-700 font-opensans">
            Preencha o formulário ao lado ou fale conosco por WhatsApp. Nossa equipe responde rápido.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <Card className="scroll-animate shadow-2xl border-0">
            <CardContent className="p-10">
              <form className="space-y-8">
                <div>
                  <Input 
                    placeholder="Seu nome completo"
                    className="h-14 text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Seu e-mail"
                    className="h-14 text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Telefone (opcional)"
                    className="h-14 text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Sua mensagem"
                    rows={6}
                    className="resize-none text-lg font-opensans border-2 border-slate-200 focus:border-orange-500 rounded-xl"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-14 text-lg font-montserrat font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Informações de Contato */}
          <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-montserrat font-bold text-slate-900 mb-6">
                  Fale conosco diretamente
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
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">IG</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-slate-900">Instagram</p>
                      <p className="text-slate-700 font-opensans">@2bcomex</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
                <h4 className="font-montserrat font-bold text-slate-900 mb-3 text-lg">
                  🚀 Resposta rápida garantida
                </h4>
                <p className="text-slate-700 font-opensans leading-relaxed">
                  Nossa equipe responde todas as mensagens em até 2 horas úteis. 
                  Sua expansão internacional não pode esperar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
