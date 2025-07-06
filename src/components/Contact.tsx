
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Vamos conversar?
          </h2>
          <p className="text-xl text-slate-700">
            Preencha o formulário ao lado ou fale conosco por WhatsApp. Nossa equipe responde rápido.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Seu nome completo"
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Seu e-mail"
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Telefone (opcional)"
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Sua mensagem"
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold"
                >
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Informações de Contato */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Fale conosco diretamente
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">W</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">WhatsApp</p>
                      <p className="text-slate-700">(47) 90167-9196</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">@</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">E-mail</p>  
                      <p className="text-slate-700">comercial@2bcomex.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Instagram</p>
                      <p className="text-slate-700">@2bcomex</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-slate-900 mb-2">
                  🚀 Resposta rápida garantida
                </h4>
                <p className="text-slate-700">
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
