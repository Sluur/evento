import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-patter bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Junta a las personas, crea recuerdos: ¡todo con nuestra
              plataforma!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Organiza y disfruta de eventos inolvidables con nuestra
              plataforma: fácil, eficiente y diseñada para conectar y celebrar
              al máximo. ¡Haz que cada momento cuente!{" "}
            </p>
            <Button
              size="lg"
              asChild
              className="button w-full sm:w-fit font-extrabold text-white"
            >
              <Link href="#events">Ver Eventos</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Elegidos por cientos de Eventos</h2>
        <div className="flex w-full flex-col gap-5 md:flex-grow">
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}
