import clsx from 'clsx';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';

import {SectionHeader} from '~/components/SectionHeader';

import partnersShopify from '../../public/images/partners-shopify.png';
import partnersSearchanise from '../../public/images/partners-searchanise.svg';
import partnersAccessible from '../../public/images/partners-accessible.png';
import partnersBold from '../../public/images/partners-bold.png';
import partnersRecharge from '../../public/images/partners-recharge.png';
import partnersYopto from '../../public/images/yotpo-logo.svg';
import partnersGorgias from '../../public/images/partners-gorgias.png';

function OurPartnersSlider() {
  const images = [
    {
      src: partnersShopify,
      width: 275,
      height: 47,
      alt: 'Our Partners - Shopify',
    },
    {
      src: partnersSearchanise,
      width: 275,
      height: 38,
      alt: 'Trusted by Searchanise',
    },
    {
      src: partnersAccessible,
      width: 275,
      height: 54,
      alt: 'Our Partners - accessible',
    },
    {
      src: partnersBold,
      width: 275,
      height: 84,
      alt: 'Our Partners - bold',
    },
    {
      src: partnersRecharge,
      width: 275,
      height: 70,
      alt: 'Our Partners - Recharge',
    },
    {
      src: partnersYopto,
      width: 275,
      height: 98,
      alt: 'Our Partners - Yopto',
    },
    {
      src: partnersGorgias,
      width: 275,
      height: 64,
      alt: 'Our Partners - gorgias',
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
              className="block h-auto max-h-6 w-full object-contain lg:max-h-9"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
export function OurFriends({align = 'left', highlighted = false}) {
  return (
    <section className={clsx(highlighted ? 'bg-borders' : '', 'pb-8 md:pb-19')}>
      <div className="container">
        <SectionHeader
          pretitle="trusted by"
          title="Our Friends"
          align={align}
          hideTitleMobile={true}
        />
        <div className="-mx-6 border-b border-dark pb-5 lg:mx-0 lg:px-3 lg:pb-8">
          <OurPartnersSlider />
        </div>
      </div>
    </section>
  );
}
