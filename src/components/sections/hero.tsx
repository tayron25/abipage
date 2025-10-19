import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const headshot = PlaceHolderImages.find(p => p.id === 'professional-headshot');

  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <p className="text-xl text-primary font-semibold md:text-2xl">
                Auxiliar de Farmacia
              </p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Génesis Abigail Rojas Herrera
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Comprometida con la eficiencia operativa y un cuidado excepcional del paciente.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#skills">Ver mis competencias</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contactar</Link>
              </Button>
            </div>
          </div>
          {headshot && (
            <div className="mx-auto w-full max-w-[400px] lg:max-w-[550px] flex justify-center">
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                width={400}
                height={400}
                className="aspect-square overflow-hidden rounded-full object-cover border-4 border-secondary shadow-lg"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
