import nodemailer from "nodemailer";
import type { ContactInput } from "@/lib/contact-store";

type ContactMailRecord = ContactInput & {
  id: string;
  createdAt: string;
  ip: string;
};

type MailConfig = {
  receiver: string;
  user: string;
  password: string;
};

const MAIL_NOT_CONFIGURED = "MAIL_NOT_CONFIGURED";

let transporter: nodemailer.Transporter | null = null;

export function getMailConfiguration() {
  const user = process.env.GMAIL_SMTP_USER?.trim();
  const password = process.env.GMAIL_SMTP_APP_PASSWORD?.trim();
  const receiver =
    process.env.CONTACT_RECEIVER_EMAIL?.trim() || process.env.GMAIL_SMTP_USER?.trim();

  if (!user || !password || !receiver) {
    return null;
  }

  return { user, password, receiver } satisfies MailConfig;
}

export async function sendContactNotification(record: ContactMailRecord) {
  const config = getMailConfiguration();

  if (!config) {
    throw new Error(MAIL_NOT_CONFIGURED);
  }

  const mailer = getTransporter(config);

  await mailer.sendMail({
    from: `"Portfolio John Heshima" <${config.user}>`,
    to: config.receiver,
    replyTo: `${record.name} <${record.email}>`,
    subject: `[Portfolio] ${record.service} · ${record.name}`,
    text: buildTextBody(record),
    html: buildHtmlBody(record),
  });
}

export function isMailConfigurationError(error: unknown) {
  return error instanceof Error && error.message === MAIL_NOT_CONFIGURED;
}

function getTransporter(config: MailConfig) {
  if (transporter) {
    return transporter;
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user,
      pass: config.password,
    },
  });

  return transporter;
}

function buildTextBody(record: ContactMailRecord) {
  const serviceLine = record.serviceDetail
    ? `${record.service} — ${record.serviceDetail}`
    : record.service;

  return [
    "Nouvelle demande recue depuis le portfolio.",
    "",
    `Besoin : ${serviceLine}`,
    `Nom : ${record.name}`,
    `Email : ${record.email}`,
    `Entreprise : ${record.company || "Non renseignee"}`,
    `Date : ${formatRecordDate(record.createdAt)}`,
    `IP : ${record.ip}`,
    "",
    "Message :",
    record.message,
  ].join("\n");
}

function buildHtmlBody(record: ContactMailRecord) {
  const messageHtml = escapeHtml(record.message).replace(/\n/g, "<br />");
  const serviceValue = record.serviceDetail
    ? `${escapeHtml(record.service)} — ${escapeHtml(record.serviceDetail)}`
    : escapeHtml(record.service);
  const summaryItems = [
    { label: "Nom", value: escapeHtml(record.name) },
    { label: "Email", value: escapeHtml(record.email) },
    { label: "Entreprise", value: escapeHtml(record.company || "Non renseignee") },
    { label: "Besoin", value: serviceValue },
    { label: "Date", value: escapeHtml(formatRecordDate(record.createdAt)) },
    { label: "IP", value: escapeHtml(record.ip) },
  ];

  return `
    <div style="margin:0; padding:32px 16px; background:#f3f7f7; font-family:Arial, Helvetica, sans-serif; color:#0f172a;">
      <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
        Nouvelle demande portfolio : ${serviceValue} par ${escapeHtml(record.name)}
      </div>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:720px; margin:0 auto; border-collapse:separate;">
        <tr>
          <td style="padding:0;">
            <div style="overflow:hidden; border:1px solid #dbe7e8; border-radius:24px; background:#ffffff; box-shadow:0 20px 50px rgba(15, 23, 42, 0.08);">
              <div style="padding:28px 32px; background:linear-gradient(135deg, #0f6c74 0%, #0a565d 100%); color:#ffffff;">
                <div style="display:inline-block; padding:6px 12px; border-radius:999px; background:rgba(255,255,255,0.14); font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">
                  Nouveau message
                </div>
                <h1 style="margin:18px 0 8px; font-size:28px; line-height:1.2; font-weight:700;">
                  Demande recue depuis le portfolio
                </h1>
                <p style="margin:0; font-size:15px; line-height:1.7; color:rgba(255,255,255,0.88);">
                  Un visiteur a soumis une nouvelle prise de contact. Les informations essentielles sont resumes ci-dessous.
                </p>
              </div>

              <div style="padding:28px 32px 32px;">
                <div style="margin-bottom:24px; padding:18px 20px; border:1px solid #dbe7e8; border-radius:18px; background:#f8fbfb;">
                  <div style="font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#0f6c74; margin-bottom:8px;">
                    Besoin identifie
                  </div>
                  <div style="font-size:22px; line-height:1.35; font-weight:700; color:#0f172a;">
                    ${serviceValue}
                  </div>
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate; border-spacing:0 10px; margin-bottom:24px;">
                  <tbody>
                    ${summaryItems
                      .map(
                        ({ label, value }) => `
                          <tr>
                            <td style="width:168px; padding:14px 16px; border:1px solid #e2e8f0; border-right:none; border-radius:14px 0 0 14px; background:#f8fafc; font-size:12px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#475569;">
                              ${label}
                            </td>
                            <td style="padding:14px 16px; border:1px solid #e2e8f0; border-radius:0 14px 14px 0; background:#ffffff; font-size:14px; color:#0f172a;">
                              ${value}
                            </td>
                          </tr>
                        `,
                      )
                      .join("")}
                  </tbody>
                </table>

                <div style="margin-bottom:24px;">
                  <div style="margin-bottom:10px; font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#0f6c74;">
                    Message
                  </div>
                  <div style="padding:20px; border:1px solid #dbe7e8; border-radius:18px; background:#fcfefe; font-size:15px; line-height:1.8; color:#334155;">
                    ${messageHtml}
                  </div>
                </div>

                <div style="padding-top:8px;">
                  <a href="mailto:${encodeURIComponent(record.email)}" style="display:inline-block; padding:14px 22px; border-radius:999px; background:#0f6c74; color:#ffffff; text-decoration:none; font-size:14px; font-weight:700;">
                    Repondre a ${escapeHtml(record.name)}
                  </a>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function formatRecordDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Kinshasa",
  }).format(date);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
