import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, User } from "lucide-react";
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
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <Card>
                <CardHeader>
                    <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <User className="h-6 w-6 text-primary" />
                        <span className="text-lg">Génesis Abigail Rojas Herrera</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:abigailrojasdecuellar@gmail.com" className="text-lg hover:text-primary transition-colors">abigailrojasdecuellar@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Linkedin className="h-6 w-6 text-primary" />
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">Perfil de LinkedIn</Link>
                    </div>
                </CardContent>
            </Card>
            <div className="flex flex-col items-center justify-center space-y-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>¿Listo para conversar?</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <p className="text-muted-foreground">
                            Descarga mi currículum para ver mi experiencia en detalle.
                        </p>
                        <Button asChild size="lg" className="w-full">
                            <a href="/genesis-rojas-cv.pdf" download>Descargar mi CV</a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}