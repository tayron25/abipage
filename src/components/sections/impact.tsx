import { CheckCircle2 } from "lucide-react";

const impacts = [
  {
    title: "Fidelización de Pacientes",
    description: "Reconocida por una técnica de inyección excepcional que llevó a pacientes recurrentes a solicitar específicamente mis servicios, demostrando un alto nivel de confianza y satisfacción del cliente."
  },
  {
    title: "Eficiencia Operativa",
    description: "Demostrada capacidad para realizar inventarios de manera rápida y precisa, contribuyendo a la optimización de los procesos internos de la farmacia."
  },
  {
    title: "Calidad en el Servicio",
    description: "Constantemente elogiada por una atención empática y atenta, mejorando la experiencia general del paciente en la farmacia."
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Resultados que Marcan la Diferencia</h2>
            <p className="max-w-[900px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Logros concretos que reflejan mi compromiso y eficacia en el entorno farmacéutico.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 sm:grid-cols-1 md:gap-12">
          {impacts.map((impact, index) => (
            <div key={index} className="flex items-start gap-6">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">{impact.title}</h3>
                <p className="text-muted-foreground">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
