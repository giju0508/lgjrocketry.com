import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
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
    <div className="space-y-8">
      <PageHeader
        eyebrow="Contact"
        title={contactContent.title}
        description={contactContent.subtitle}
      />

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="lg:col-span-2 rounded-[2rem] border border-orange-400/30 bg-black/25 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/36 bg-orange-400/12">
                <RiMailSendLine className="text-2xl text-orange-100" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
                  Direct Contact
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Reach Out
                </h2>
              </div>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                Email form, direct email, and phone contact are all available here.
              </p>
            </div>

            <div className="grid w-full gap-3 sm:max-w-sm">
              <div className="rounded-3xl border border-orange-400/24 bg-black/25 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="mt-2 block break-all text-base font-medium text-white transition hover:text-orange-100"
                >
                  {contactContent.email}
                </a>
              </div>
              <div className="rounded-3xl border border-orange-400/24 bg-black/25 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Phone
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {contactContent.phone}
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-orange-400/30 bg-black/25 p-6 backdrop-blur-xl">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
              Social
            </p>
            <h2 className="text-2xl font-semibold text-white">Profiles</h2>
          </div>

          <div className="mt-5 space-y-3">
            {contactContent.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-orange-400/22 bg-black/20 px-4 py-4 transition hover:border-orange-300/42 hover:bg-orange-400/[0.08]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-400/24 bg-black/25">
                  <social.icon className="text-2xl text-slate-300 transition group-hover:text-orange-100" />
                </div>
                <span className="text-sm font-semibold text-slate-200 transition group-hover:text-white">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-[2rem] border border-orange-400/30 bg-black/25 p-6 backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_240px]">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
                Message
              </p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Send a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-orange-400/22 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-orange-300/55 focus:bg-black/35"
                    placeholder="Steve"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-orange-400/22 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-orange-300/55 focus:bg-black/35"
                    placeholder="lgj@lgjrkt.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-2xl border border-orange-400/22 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-orange-300/55 focus:bg-black/35"
                  placeholder="Hello! I'd like to discuss a project..."
                />
              </div>

              {status.message ? (
                <p
                  className={`rounded-2xl border px-4 py-3 text-sm ${
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
                className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:min-w-[220px]"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-orange-400/24 bg-black/20 p-5">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Delivery Note
              </p>
              <p className="text-sm leading-7 text-slate-300">
                Messages are sent through EmailJS. If the form is unavailable, use the
                direct email address above.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
