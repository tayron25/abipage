import { Button } from "@/components/ui/button";
import { Linkedin, Mail, User } from "lucide-react";
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center justify-center gap-8 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Construyamos Juntos el Futuro de la Atención Farmacéutica
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estoy buscando activamente una nueva oportunidad para aportar valor. Me encantaría conversar sobre cómo mis habilidades pueden beneficiar a su equipo.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center">
              <div className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-center">Información de Contacto</h3>
                  <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-primary" />
                          <span>Génesis Abigail Rojas Herrera</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <a href="mailto:abigailrojasdecuellar@gmail.com" className="hover:text-primary transition-colors">abigailrojasdecuellar@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-3">
                          <Linkedin className="h-5 w-5 text-primary" />
                          <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Perfil de LinkedIn</Link>
                      </div>
                  </div>
              </div>
              <Button asChild size="lg" className="w-full max-w-xs">
                  <a href="/genesis-rojas-cv.pdf" download>Descargar mi CV</a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
