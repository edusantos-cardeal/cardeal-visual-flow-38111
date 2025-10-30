"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}
interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}
const Logos3 = ({
  heading = "Trusted by these companies",
  logos = []
}: Logos3Props) => {
  return <section className="py-8">
      {heading && <div className="container flex flex-col items-center text-center mb-8">
          <h2 className="text-4xl font-montserrat font-black uppercase">
            {heading}
          </h2>
        </div>}
      <div className="pt-4 py-px">
        <div className="relative mx-auto flex items-center justify-center">
          <Carousel opts={{
          loop: true
        }} plugins={[AutoScroll({
          playOnInit: true,
          speed: 1
        })]}>
            <CarouselContent className="ml-0">
              {logos.map(logo => <CarouselItem key={logo.id} className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="mx-10 flex shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all">
                    <img src={logo.image} alt={logo.description} className={logo.className || "h-20 w-auto object-contain"} />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>;
};
export { Logos3 };