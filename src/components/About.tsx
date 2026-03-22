import { useState, useCallback, useEffect } from "react";
import { useContent } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Building2, Send, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

const About = () => {
  const content = useContent();
  const { ref, isInView } = useInView();
  const [sending, setSending] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, [content]);

  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setCaptchaInput("");
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(captchaInput) !== captcha.answer) {
      toast.error(content.about.form.captchaError);
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/liyoko8214@onbap.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Kontakt od ${formData.name}`,
          Meno: formData.name,
          Email: formData.email,
          "Telefón": formData.phone,
          "Spoločnosť": formData.company,
          "Správa": formData.message,
        }),
      });

      if (res.ok) {
        toast.success(content.about.form.successMessage);
        resetForm();
      } else {
        toast.error(content.about.form.errorMessage);
      }
    } catch {
      toast.error(content.about.form.errorMessage);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="about" className="py-24 relative bg-background-elevated/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.about.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.about.subtitle}
          </p>
        </div>

        {/* Unified Contact Block */}
        <Card className="glass rounded-2xl p-8 md:p-10 border-0 mb-12">
          <div className="grid lg:grid-cols-[1fr_1px_2.2fr] gap-8 lg:gap-10">
            {/* Left — Contact Info */}
            <div className="space-y-6 flex flex-col">
              <h3 className="text-2xl font-bold text-foreground">
                {content.about.contactInfoTitle}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{content.about.contact.company}</p>
                    <p className="text-foreground/70">IČO: {content.about.contact.ico}</p>
                    <p className="text-foreground/70">DIČ: {content.about.contact.dic}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{content.about.contact.address}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${content.about.contact.phone}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {content.about.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${content.about.contact.email}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {content.about.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-border/40" />

            {/* Right — Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {content.about.form.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={content.about.form.fields.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="glass border-border/30"
                  />
                  <Input
                    type="email"
                    placeholder={content.about.form.fields.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="glass border-border/30"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder={content.about.form.fields.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="glass border-border/30"
                  />
                  <Input
                    placeholder={content.about.form.fields.company}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="glass border-border/30"
                  />
                </div>
                <Textarea
                  placeholder={content.about.form.fields.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="glass border-border/30 resize-none"
                />

                {/* Simple Math CAPTCHA */}
                <div className="flex items-center gap-3 pt-1">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {content.about.form.captchaLabel}: {captcha.a} + {captcha.b} =
                  </span>
                  <Input
                    type="number"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    className="glass border-border/30 w-20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full glass-hover bg-primary hover:bg-primary-glow rounded-xl"
                  size="lg"
                >
                  {sending ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {sending ? content.about.form.sending : content.about.form.button}
                </Button>
              </form>
            </div>
          </div>
        </Card>

        {/* Map */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden glass">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d18.7698794!3d49.1987816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47145995c4b7663f:0xb13c387934e1c7e!2sAT%20Digital!5e0!3m2!1ssk!2ssk!4v1234567890!5m2!1ssk!2ssk`}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(1) contrast(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
