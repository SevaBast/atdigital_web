import { useState } from "react";
import { content } from "@/content/content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Building2, Send } from "lucide-react";
import { toast } from "sonner";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Kontakt od ${formData.name}`);
    const body = encodeURIComponent(
      `Meno: ${formData.name}\nEmail: ${formData.email}\nTelefón: ${formData.phone}\nSpoločnosť: ${formData.company}\n\nSpráva:\n${formData.message}`
    );
    
    window.location.href = `mailto:${content.about.contact.email}?subject=${subject}&body=${body}`;
    
    toast.success("Otváram váš e-mailový klient...");
  };

  return (
    <section id="about" className="py-24 relative bg-background-elevated/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {content.about.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="glass rounded-2xl p-8 border-0 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Kontaktné informácie
            </h3>
            
            <div className="space-y-4">
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
          </Card>

          {/* Contact Form */}
          <Card className="glass rounded-2xl p-8 border-0">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {content.about.form.title}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <Textarea
                placeholder={content.about.form.fields.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="glass border-border/30 resize-none"
              />
              <Button
                type="submit"
                className="w-full glass-hover bg-primary hover:bg-primary-glow rounded-xl"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                {content.about.form.button}
              </Button>
            </form>
          </Card>
        </div>

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
