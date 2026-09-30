import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section, Reveal } from "./ui";
import { PROFILE } from "./data";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
  ev.preventDefault();

  if (!validate()) return;

  try {
    await addDoc(collection(db, "messages"), {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      createdAt: new Date()
    });

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setTimeout(() => setSent(false), 5000);

  } catch (error) {
    console.error("Error sending message:", error);
  }
};

  const field = (k: keyof typeof form, label: string, type = "text", textarea = false) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{label}</label>
      {textarea ? (
        <textarea id={k} rows={4} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="w-full rounded-xl border bg-background/50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
      ) : (
        <input id={k} type={type} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="w-full rounded-xl border bg-background/50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
      )}
      {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect — I'm open to opportunities.">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            {[
              { Icon: Phone, label: "Phone", val: PROFILE.phone, href: `tel:${PROFILE.phone}` },
              { Icon: Mail, label: "Email", val: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { Icon: MapPin, label: "Location", val: PROFILE.location },
            ].map(({ Icon, label, val, href }) => (
              <div key={label} className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero text-white"><Icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                  {href ? <a href={href} className="break-words font-medium hover:text-primary">{val}</a> : <p className="font-medium">{val}</p>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {field("name", "Name")}
              {field("email", "Email", "email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message", "text", true)}
            <button type="submit" className="bg-gradient-hero inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
              <Send className="h-4 w-4" /> Send Message
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-5 w-5" /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
