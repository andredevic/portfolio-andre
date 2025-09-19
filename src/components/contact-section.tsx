import type React from 'react';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'andredev.fe@gmail.com',
      href: 'mailto:andredev.fe@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'WhatsApp',
      value: '+55 (61) 99615-5791',
      href: 'https://wa.me/5561996155701',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: '/in/andredevic',
      href: 'https://www.linkedin.com/in/andredevic/',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: '@andredevic',
      href: 'https://github.com/andredevic',
    },
  ];

  return (
    <section id="contact" className="bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-5xl text-white/85 md:text-4xl">
            Contact
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            lets rock our future working together
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-transparent bg-white/5 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-200">
                <MessageSquare className="h-6 w-6" />
                Send me a mail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-purple-200/60 bg-transparent text-white focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/70">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@exemplo.com"
                    required
                    className="border-purple-200/60 bg-transparent text-white focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/70">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea or opportunity..."
                    rows={5}
                    required
                    className="resize-none border-purple-200/60 bg-transparent text-white focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-300 text-accent-foreground hover:bg-purple-400/70"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-purple-200/60 bg-purple-200/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-200">
                  <MapPin className="h-6 w-6" />
                  Contact info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-accent/10"
                  >
                    <div className="text-accent transition-transform duration-200 group-hover:scale-110">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-white/80">
                        {contact.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-pink-300/50 via-slate-500 to-purple-500/50 tracking-tight text-slate-800">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Lets Work Together!</h3>
                <p className="leading-relaxed text-slate-800">
                  I’m always open to exploring new opportunities, exciting
                  projects, and collaborations. Get in touch, and let’s create
                  something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-purple-200/80 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 André Ferreira. Developed with ❤️ using React .
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
