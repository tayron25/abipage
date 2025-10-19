import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Syringe, HeartPulse, Droplets, Pill, ClipboardList, Computer, FileSpreadsheet, Smile, MessageCircle, ShieldCheck } from "lucide-react";

const technicalSkills = [
  { icon: <Syringe className="h-6 w-6 text-primary" />, text: "Administración de Inyectables" },
  { icon: <HeartPulse className="h-6 w-6 text-primary" />, text: "Monitorización de Glucosa y Presión Arterial" },
  { icon: <Droplets className="h-6 w-6 text-primary" />, text: "Colocación de Sueros" },
  { icon: <Pill className="h-6 w-6 text-primary" />, text: "Dispensación y conocimiento de medicamentos" },
];

const managementSkills = [
  { icon: <ClipboardList className="h-6 w-6 text-primary" />, text: "Gestión Rápida y Precisa de Inventario" },
  { icon: <Computer className="h-6 w-6 text-primary" />, text: "Manejo de Software de Farmacia" },
  { icon: <FileSpreadsheet className="h-6 w-6 text-primary" />, text: "Dominio de Microsoft Excel (Certificado)" },
];

const patientSkills = [
  { icon: <Smile className="h-6 w-6 text-primary" />, text: "Atención Empática y Personalizada" },
  { icon: <MessageCircle className="h-6 w-6 text-primary" />, text: "Comunicación Clara y Efectiva" },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, text: "Creación de un Entorno de Confianza" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Habilidades y Certificaciones</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un conjunto de competencias técnicas y humanas para ofrecer el mejor servicio.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Técnicas Farmacéuticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4">
                  {skill.icon}
                  <span className="font-medium">{skill.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Eficiencia y Gestión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {managementSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4">
                  {skill.icon}
                  <span className="font-medium">{skill.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Atención al Paciente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {patientSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4">
                  {skill.icon}
                  <span className="font-medium">{skill.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
