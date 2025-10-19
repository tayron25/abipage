export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Mi Compromiso con la Salud</h2>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-6 pt-8 text-lg text-secondary-foreground text-center">
          <p>
            Desde joven, mi interés por la farmacología nació de una necesidad muy personal: el deseo de comprender y ayudar a mi familia con sus necesidades de salud. Esta motivación se convirtió en mi vocación. Hoy, como Auxiliar de Farmacia, he transformado esa pasión en un compromiso profesional para ofrecer un cuidado excepcional a cada persona que entra por la puerta.
          </p>
          <p>
            En mis seis meses de experiencia, he tenido el privilegio de aplicar mis conocimientos para no solo dispensar medicamentos, sino para ser un punto de apoyo y confianza. He visto cómo una explicación clara o un procedimiento realizado con cuidado puede aliviar la ansiedad de un paciente. Mi filosofía es simple: estoy aquí para ayudar a la gente. Cada día es una oportunidad para aplicar mi atención al detalle y mi empatía, asegurando que cada paciente reciba el tratamiento correcto y, sobre todo, se sienta tranquilo y bien atendido.
          </p>
        </div>
      </div>
    </section>
  );
}
