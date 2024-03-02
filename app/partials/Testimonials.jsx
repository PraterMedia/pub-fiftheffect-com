import {useRef} from 'react';
import {useInView} from 'framer-motion';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import {SectionHeader} from '~/components/SectionHeader';

import westonTableLogo from '../../public/images/testimonial-weston.png';
import bcLogo from '../../public/images/testimonial-BC.png';
import caitlinLogo from '../../public/images/testimonial-caitlin.png';
import starsImg from '../../public/images/stars.png';
import {IconLongArrowLeft, IconLongArrowRight} from '~/components/Icon';

function testimonialsData() {
  return [
    {
      text: "The Fifth Effect team's sheer level of care and consideration to our team makes them feel like an extension of our internal team. They are extremely communicative and turn projects around at lightning speed. We could not imagine a better partnership!",
      client: 'WESTON TABLE',
      clientLogo: westonTableLogo,
    },
    {
      text: 'Fifth Effect is that rare gem of an agency that provides a true partnership with a get it down attitude. They are always happy to roll up their sleeves and help in any way possible. I would say they are the best secret weapon Buddy + Co. has.',
      client: 'BUDDY + CO.',
      clientLogo: bcLogo,
    },
    {
      text: 'Fifth Effect has an extensive set of skills & knowledge that have been a great asset to our company. They work quickly & communicate clearly to get each task completed efficiently with great attention to detail. Working with them is a true partnership!',
      client: 'Caitlin Wilson Design',
      clientLogo: caitlinLogo,
    },
  ];
}
export function Testimonials() {
  const animatedLinesRef = useRef(null);
  const isInView = useInView(animatedLinesRef, {once: true});
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeader pretitle="Testimonials" title="Ask Our Partners" />
        <div className="relative border-t border-primary-accent">
          <Splide
            aria-label="Testimonials"
            className="testimonials__splide pb-19 pt-9 md:pb-24 md:pt-20 lg:pb-19"
            hasTrack={false}
            options={{
              type: 'slide',
              rewind: true,
              autoHeight: true,
              perPage: 1,
            }}
          >
            <SplideTrack>
              {testimonialsData().map((item, index) => (
                <SplideSlide key={index}>
                  <div className="mx-auto lg:max-w-xl">
                    <img
                      className="mb-3 block h-auto w-28 md:w-32"
                      width="193"
                      loading="lazy"
                      src={starsImg}
                      alt="5 stars"
                    />
                    <p className="mb-4 md:leading-[1.75]">{item.text}</p>
                    <div className="flex flex-col-reverse justify-between gap-2 md:flex-row md:items-center">
                      <img
                        className="block h-10 w-28 object-contain object-left"
                        src={item.clientLogo}
                        loading="lazy"
                        alt={item.client}
                      />
                      <span className="uppercase">{item.client}</span>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div
              ref={animatedLinesRef}
              className="absolute bottom-10 left-0 right-0 flex justify-center lg:bottom-0"
            >
              <div className="relative w-1/2 lg:w-3/12">
                <ul className="splide__pagination"></ul>
                <span
                  style={{
                    right: isInView ? '0' : '100%',
                  }}
                  className="absolute left-0 right-0 top-0 ml-14 h-[0.5px] bg-primary-accent transition-all duration-500 lg:ml-24"
                ></span>
                <span
                  style={{
                    height: isInView ? '100%' : '0',
                  }}
                  className="absolute right-0 top-0 w-[0.5px] bg-primary-accent transition-all delay-500 duration-300"
                ></span>
              </div>
              <div className="relative h-5 w-1/2 md:h-8 lg:w-3/4">
                <span
                  style={{
                    width: isInView ? '100%' : '0',
                  }}
                  className="absolute bottom-0 left-0 h-[0.5px] bg-primary-accent transition-all delay-[800ms] duration-700"
                ></span>
              </div>
            </div>
            <div className="splide__arrows absolute bottom-0 left-0 mt-5 flex w-full items-center justify-between lg:static lg:mt-0 lg:block">
              <button className="splide__arrow splide__arrow--prev left-0 top-1/2 flex h-7 w-16 transform items-center justify-center rounded-full border border-solid border-gray bg-white lg:absolute lg:-translate-y-1/2">
                <span className="sr-only">Prev</span>
                <IconLongArrowLeft
                  width={27}
                  height={8}
                  className="h-2 w-auto"
                />
              </button>
              <button className="splide__arrow splide__arrow--next right-0 top-1/2 flex h-7 w-16 transform items-center justify-center rounded-full border border-solid border-gray bg-white lg:absolute lg:-translate-y-1/2">
                <span className="sr-only">Next</span>
                <IconLongArrowRight
                  width={27}
                  height={8}
                  className="h-2 w-auto"
                />
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </section>
  );
}
