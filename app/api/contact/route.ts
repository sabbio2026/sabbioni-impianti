import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, service, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
    }

    const { error } = await supabase.from("contacts").insert([
      { name, company, phone, email, service, message },
    ]);

    if (error) throw error;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Sabbioni Impianti <noreply@sabbioniimpianti.it>",
        to: "marzia@sabbioniimpianti.it",
        subject: `Nuova richiesta da ${name}${company ? ` — ${company}` : ""}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0F1117">
            <div style="background:#1A1F6B;padding:24px 32px;border-radius:12px 12px 0 0">
              <h1 style="color:white;margin:0;font-size:20px">Nuova richiesta di preventivo</h1>
              <p style="color:#8DC63F;margin:4px 0 0;font-size:13px">Sabbioni Impianti S.R.L.</p>
            </div>
            <div style="background:#F7F9FC;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#64748B;font-size:13px;width:140px">Nome</td><td style="padding:8px 0;font-weight:bold;font-size:14px">${name}</td></tr>
                ${company ? `<tr><td style="padding:8px 0;color:#64748B;font-size:13px">Azienda</td><td style="padding:8px 0;font-weight:bold;font-size:14px">${company}</td></tr>` : ""}
                <tr><td style="padding:8px 0;color:#64748B;font-size:13px">Telefono</td><td style="padding:8px 0;font-weight:bold;font-size:14px"><a href="tel:${phone}" style="color:#1A1F6B">${phone}</a></td></tr>
                <tr><td style="padding:8px 0;color:#64748B;font-size:13px">Email</td><td style="padding:8px 0;font-weight:bold;font-size:14px"><a href="mailto:${email}" style="color:#1A1F6B">${email}</a></td></tr>
                ${service ? `<tr><td style="padding:8px 0;color:#64748B;font-size:13px">Servizio</td><td style="padding:8px 0;font-weight:bold;font-size:14px">${service}</td></tr>` : ""}
                ${message ? `<tr><td style="padding:8px 0;color:#64748B;font-size:13px;vertical-align:top">Messaggio</td><td style="padding:8px 0;font-size:14px;line-height:1.6">${message}</td></tr>` : ""}
              </table>
            </div>
          </div>
        `,
      }).catch(() => null);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
