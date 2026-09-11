import { useState } from "react";
import { RiArrowRightUpLine, RiMailSendLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import PageHeader from "../components/ui/PageHeader";
import { contactContent } from "../content/siteContent";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((previous) => ({ ...previous, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured right now. Please use the email address on this page.",
      });
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: "New Contact Message (Portfolio)",
          name: form.name,
          time: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
          message: form.message,
          email: form.email,
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus({ type: "success", message: "Message sent successfully." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      <PageHeader
        eyebrow="Contact"
        title={contactContent.title}
        description={contactContent.subtitle}
      />

      <section className="grid gap-10 border-t border-white/10 pt-8 sm:pt-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <article className="space-y-8">
          <div className="space-y-3">
            <RiMailSendLine className="text-3xl text-orange-200" aria-hidden="true" />
            <h2 className="text-2xl font-semibold text-white">Reach Out</h2>
            <p className="max-w-sm text-base leading-7 text-slate-300">
              Email form, direct email, and phone contact are all available here.
            </p>
          </div>

          <dl className="space-y-5">
            <div>
              <dt className="text-sm font-medium text-slate-400">Email</dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${contactContent.email}`}
                  className="break-all text-lg font-medium text-orange-200 underline decoration-orange-300/30 underline-offset-4 transition hover:text-orange-100 hover:decoration-orange-100"
                >
                  {contactContent.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-400">Phone</dt>
              <dd className="mt-1.5 text-lg font-medium text-white">
                {contactContent.phone}
              </dd>
            </div>
          </dl>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-base font-semibold text-white">Social Profiles</h3>
            <div className="mt-3 divide-y divide-white/10">
              {contactContent.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3.5 text-slate-300 transition hover:text-orange-100"
                >
                  <social.icon className="shrink-0 text-2xl" aria-hidden="true" />
                  <span className="flex-1 text-base font-medium">{social.name}</span>
                  <RiArrowRightUpLine
                    className="shrink-0 text-lg text-slate-500 transition group-hover:text-orange-200"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </article>

        <div className="space-y-6 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
          <h2 className="text-2xl font-semibold text-white">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-orange-300/70 focus:bg-white/[0.05] focus:ring-2 focus:ring-orange-300/15"
                  placeholder="Steve"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-orange-300/70 focus:bg-white/[0.05] focus:ring-2 focus:ring-orange-300/15"
                  placeholder="lgj@lgjrkt.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-orange-300/70 focus:bg-white/[0.05] focus:ring-2 focus:ring-orange-300/15"
                placeholder="Hello! I'd like to discuss a project..."
              />
            </div>

            {status.message ? (
              <p
                role="status"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                    : "border-orange-400/20 bg-orange-400/10 text-orange-100"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[180px]"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <p className="text-sm leading-6 text-slate-400">
            If the form is unavailable, please use the direct email address on this page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
