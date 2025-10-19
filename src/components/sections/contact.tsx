import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Construyamos Juntos el Futuro de la Atención Farmacéutica
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Estoy buscando activamente una nueva oportunidad para aportar valor. Me encantaría conversar sobre cómo mis habilidades pueden beneficiar a su equipo.
          </p>
        </div>
        <div className="mx-auto mt-12 w-full max-w-md">
            <Card>
                <CardHeader>
                    <CardTitle>Ponte en Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-center gap-8">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                            <Instagram className="h-8 w-8 text-primary hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                            <Facebook className="h-8 w-8 text-primary hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <Linkedin className="h-8 w-8 text-primary hover:scale-110 transition-transform" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-4 border-t pt-6">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:abigailrojasdecuellar@gmail.com" className="text-lg hover:text-primary transition-colors">abigailrojasdecuellar@gmail.com</a>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
