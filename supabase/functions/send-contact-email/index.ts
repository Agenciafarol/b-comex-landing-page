
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormData = await req.json();

    console.log("Recebendo dados do formulário:", { name, email, phone });

    // Enviar email para comercial@2bcomex.com.br
    const emailResponse = await resend.emails.send({
      from: "2B Comex <noreply@resend.dev>",
      to: ["comercial@2bcomex.com.br"],
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <h2>Nova mensagem de contato recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Enviado através do site da 2B Comex</em></p>
      `,
    });

    console.log("Email enviado com sucesso:", emailResponse);

    // Enviar email de confirmação para o remetente
    await resend.emails.send({
      from: "2B Comex <noreply@resend.dev>",
      to: [email],
      subject: "Recebemos sua mensagem - 2B Comex",
      html: `
        <h2>Obrigado pelo contato, ${name}!</h2>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <p>Nossa equipe responderá o mais rápido possível.</p>
        <br>
        <p>Atenciosamente,<br><strong>Equipe 2B Comex</strong></p>
        <hr>
        <p><em>Este é um email automático, não responda esta mensagem.</em></p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Email enviado com sucesso!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao enviar email", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
