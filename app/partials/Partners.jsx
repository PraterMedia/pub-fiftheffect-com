import clsx from 'clsx';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';

import {SectionHeader} from '~/components/SectionHeader';

import partnersShopify from '../../public/images/partner-shopify.svg';
import partnersIntelligems from '../../public/images/partner-intelligems.svg';
import partnersHeatmap from '../../public/images/partner-heatmap.svg';
import partnersHotjar from '../../public/images/partner-hotjar.svg';
import partnersLoop from '../../public/images/partner-loop.svg';
import partnersAftersell from '../../public/images/partner-aftersell.svg';
import partnersAccessibe from '../../public/images/partner-accessibe.png';
import partnersBold from '../../public/images/partner-bold.svg';
import partnersRecharge from '../../public/images/partner-recharge.png';
import partnersGorgias from '../../public/images/partner-gorgias.png';

function OurPartnersSlider() {
  const images = [
    {
      src: partnersShopify,
      width: 173,
      height: 29,
      alt: 'Our Partners - Shopify',
    },
    {
      src: partnersIntelligems,
      width: 157,
      height: 29,
      alt: 'Our Partners - Intelligems',
    },
    {
      src: partnersHeatmap,
      width: 156,
      height: 31,
      alt: 'Our Partners - Heatmap',
    },
    {
      src: partnersHotjar,
      width: 95,
      height: 25,
      alt: 'Our Partners - Hotjar',
    },
    {
      src: partnersLoop,
      width: 70,
      height: 21,
      alt: 'Our Partners - Loop',
    },
    {
      src: partnersAftersell,
      width: 143,
      height: 23,
      alt: 'Our Partners - AfterSell',
    },
    {
      src: partnersAccessibe,
      width: 157,
      height: 31,
      alt: 'Our Partners - accessiBe',
    },
    {
      src: partnersBold,
      width: 109,
      height: 37,
      alt: 'Our Partners - Bold',
    },
    {
      src: partnersRecharge,
      width: 114,
      height: 33,
      alt: 'Our Partners - Recharge',
    },
    {
      src: partnersGorgias,
      width: 133,
      height: 35,
      alt: 'Our Partners - Gorgias',
    },
  ];

  return (
    <Splide
      aria-label="Our Partners"
      className="our-friends__splide"
      hasTrack={false}
      extensions={{AutoScroll}}
      options={{
        type: 'loop',
        arrows: false,
        pagination: false,
        drag: false,
        autoWidth: true,
        perPage: 1,
        autoScroll: {
          speed: 0.5,
        },
        destroy: true,
        breakpoints: {
          1023: {
            destroy: false,
            gap: 50,
          },
          767: {
            gap: 40,
          },
        },
      }}
    >
      <SplideTrack>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image.src}
              loading="lazy"
              width={image.width}
              height={image.height}
              alt={image.alt}
              className="block h-6 w-auto object-contain"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
export function OurFriends({
  align = 'left',
  highlighted = false,
  hideTitleMobile = true,
}) {
  return (
    <section className={clsx(highlighted ? 'bg-borders' : '', 'pb-8 md:pb-19')}>
      <div className="container">
        <SectionHeader
          pretitle="trusted by"
          title="Our Friends"
          align={align}
          hideTitleMobile={hideTitleMobile}
        />
        <div className="-mx-6 border-b border-dark pb-5 lg:mx-0 lg:px-3 lg:pb-8">
          <OurPartnersSlider />
        </div>
      </div>
    </section>
  );
}
