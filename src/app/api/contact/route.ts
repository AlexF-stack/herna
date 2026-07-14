import { brandAssets } from "@/content/brand";
import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();
  const honeypot = String(payload.website || "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  if (name.length > 120 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
  }

  const subject = `HERNA — Contact de ${name}`;
  const formspreeId =
    process.env.FORMSPREE_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID;

  try {
    if (formspreeId) {
      const form = new FormData();
      form.set("name", name);
      form.set("email", email);
      form.set("message", message);
      form.set("_subject", subject);

      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
      }

      return NextResponse.json({ ok: true, provider: "formspree" });
    }

    /* Default: deliver to HERNA inbox via FormSubmit (confirm email once) */
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(brandAssets.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: subject,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      },
    );

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, provider: "formsubmit" });
  } catch {
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
