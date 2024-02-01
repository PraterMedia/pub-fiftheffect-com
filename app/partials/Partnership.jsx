import clsx from 'clsx';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';

import {IconLongArrowLeft, IconLongArrowRight} from '~/components/Icon';

import IconReach from '../../public/images/Icons---Reach.svg';
import IconGears from '../../public/images/Icons---Gears.svg';
import IconSay from '../../public/images/Icons---Say.svg';
import IconQuality from '../../public/images/Icons---Quality.svg';
import IconShopify from '../../public/images/Icons---Shopify.svg';

function getPartnership() {
  return [
    {
      icon: IconReach,
      title: 'Extending Your Reach',
      description:
        "We're teammates, not temporary contractors. Let's cover more ground & produce better outcomes, together.",
    },
    {
      icon: IconGears,
      title: 'Shift Gears Seamlessly',
      description:
        "We're always at your side and never playing catchup to your vision as it grows. Don't worry about changes, we'll keep up.",
    },
    {
      icon: IconSay,
      title: 'On Time, Every Time',
      description:
        "We never let our partners worry about their project's deadline because we're always on schedule.",
    },
    {
      icon: IconQuality,
      title: 'In-House Quality Control',
      description:
        "We're fully remote, so we're wherever you need us to be. Consider us your go-to for multiplying your team's talent.",
    },
    {
      icon: IconShopify,
      title: 'Ongoing Relationships',
      description:
        "If you can dream it, we'll help you get there. We love partnering with brands that are striving to become more.",
    },
  ];
}

export function Partnership() {
  return (
    <div className="bg-borders py-19">
      <div className="container">
        <div className="mb-5 text-3xl lg:hidden">
          <p>What Partnership means to us</p>
        </div>
        <Splide
          aria-label="What Partnership means to us"
          options={{
            type: 'slide',
            rewind: true,
            arrows: true,
            pagination: false,
            autoHeight: true,
            fixedWidth: '92%',
            perPage: 1,
            perMove: 1,
            destroy: true,
            breakpoints: {
              1023: {
                destroy: false,
                gap: 16,
              },
            },
          }}
          className="partnership__splide"
          hasTrack={false}
        >
          <SplideTrack>
            <li className="hidden items-center justify-center border-b border-r border-dark px-8 pb-20 pt-10 lg:flex">
              <h2 className="text-center text-2xl font-light leading-solid text-primary-accent">
                <span className="inline-block align-middle">What </span>
                <span className="ml-1 inline-block align-middle text-6xl font-normal">
                  Partnership{' '}
                </span>
                <span className="block text-dark">means to us</span>
              </h2>
            </li>
            {getPartnership().map((feature, index) => (
              <SplideSlide
                key={index}
                className={clsx(
                  index < 2
                    ? 'lg:border-b lg:pb-20 lg:pt-10'
                    : 'lg:pb-10 lg:pt-20',
                  index != 1 && index != 4 ? 'lg:border-r' : '',
                  index == 2 ? 'lg:border-l' : '',
                  'border border-dark p-5 lg:w-auto lg:border-0 lg:px-8',
                )}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="mb-5 h-10 w-10 object-contain"
                />
                <h3 className="mb-5 text-2xl">{feature.title}</h3>
                <p className="leading-normal">{feature.description}</p>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows mt-8 flex justify-between lg:hidden">
            <button className="splide__arrow splide__arrow--prev flex h-7 w-16 items-center justify-center rounded-full border border-gray">
              <span className="sr-only">Prev</span>
              <IconLongArrowLeft width={27} height={8} className="h-2 w-auto" />
            </button>
            <button className="splide__arrow splide__arrow--next flex h-7 w-16 items-center justify-center rounded-full border border-gray">
              <IconLongArrowRight
                width={27}
                height={8}
                className="h-2 w-auto"
              />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
}
