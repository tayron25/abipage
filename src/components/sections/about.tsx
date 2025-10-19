import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const pharmacyImage = PlaceHolderImages.find(p => p.id === 'pharmacy-interior');
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {pharmacyImage && (
            <div className="order-2 lg:order-1">
              <Image
                src={pharmacyImage.imageUrl}
                alt={pharmacyImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-[3/2] shadow-lg"
                data-ai-hint={pharmacyImage.imageHint}
              />
            </div>
          )}
          <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-center lg:text-left">
                Mi Compromiso con la Salud
              </h2>
            </div>
            <div className="space-y-4 text-secondary-foreground text-center lg:text-left">
              <p>
                Desde joven, mi interés por la farmacología nació de una necesidad muy personal: el deseo de comprender y ayudar a mi familia con sus necesidades de salud. Esta motivación se convirtió en mi vocación. Hoy, como Auxiliar de Farmacia, he transformado esa pasión en un compromiso profesional para ofrecer un cuidado excepcional a cada persona que entra por la puerta.
              </p>
              <p>
                En mis seis meses de experiencia, he tenido el privilegio de aplicar mis conocimientos para no solo dispensar medicamentos, sino para ser un punto de apoyo y confianza. He visto cómo una explicación clara o un procedimiento realizado con cuidado puede aliviar la ansiedad de un paciente. Mi filosofía es simple: estoy aquí para ayudar a la gente. Cada día es una oportunidad para aplicar mi atención al detalle y mi empatía, asegurando que cada paciente reciba el tratamiento correcto y, sobre todo, se sienta tranquilo y bien atendido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
