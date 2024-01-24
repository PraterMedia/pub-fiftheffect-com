import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import {SectionHeader} from '~/components/SectionHeader';
import {IconLongArrowLeft, IconLongArrowRight} from '~/components/Icon';

import iconGrowth from '../../public/images/icon-growth.svg';
import iconCharting from '../../public/images/icon-charting.svg';
import iconSimplifying from '../../public/images/icon-simplifying.svg';

function capabilitiesData() {
  return [
    {
      icon: iconGrowth,
      title: 'Growth, Not Renovations',
      text: 'We understand that existing brand recognition is important, so we always craft upgrades with a scalpel, not a hatchet. Preserve the best while improving the rest.',
    },
    {
      icon: iconCharting,
      title: 'Charting a Course',
      text: "Don't respond to events, create them. We advise and guide our partners to ensure that they're always clear about what their next move should be.",
    },
    {
      icon: iconSimplifying,
      title: 'Simplifying User Experience',
      text: 'The best designs are simple, so our stores are built to maximize clarity. We streamline the purchasing process, limiting the friction that leads to cart abandonment.',
    },
  ];
}
export function OurCapabilities() {
  return (
    <section className="pb-32 pt-19">
      <div className="container">
        <SectionHeader title="Turning Possibilities Into Opportunities" />
        <div className="mt-8 md:mt-14">
          <Splide
            aria-label="Our Capabilities"
            className="our-capabilities__splide"
            hasTrack={false}
            options={{
              type: 'slide',
              rewind: true,
              autoHeight: true,
              pagination: false,
              perPage: 1,
              destroy: true,
              breakpoints: {
                767: {
                  destroy: false,
                },
              },
            }}
          >
            <SplideTrack>
              {capabilitiesData().map((item, index) => (
                <SplideSlide key={index}>
                  <div className="border border-dark p-5 md:border-0 md:p-0">
                    <img
                      className="mb-5 block h-auto w-10 md:w-8"
                      width="40"
                      loading="lazy"
                      src={item.icon}
                      alt={item.title}
                    />
                    <h3 className="mb-5 text-xl font-medium leading-tight md:mb-4 md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="font-light">{item.text}</p>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows mt-6 flex items-center justify-between md:hidden">
              <button className="splide__arrow splide__arrow--prev left-0 top-1/2 flex h-7 w-16 transform items-center justify-center rounded-full border border-gray bg-white lg:absolute lg:-translate-y-1/2">
                <span className="sr-only">Prev</span>
                <IconLongArrowLeft
                  width={27}
                  height={8}
                  className="h-2 w-auto"
                />
              </button>
              <button className="splide__arrow splide__arrow--next right-0 top-1/2 flex h-7 w-16 transform items-center justify-center rounded-full border border-gray bg-white lg:absolute lg:-translate-y-1/2">
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
