import {useRef} from 'react';
import {useInView} from 'framer-motion';
import clsx from 'clsx';

import {SectionHeader} from '~/components/SectionHeader';

import IconAgencies from '../../public/images/Icon---Marketing-Agencies.svg';
import IconInHouse from '../../public/images/Icon---In-house-Teams.svg';
import IconYoung from '../../public/images/Icon---Young-Companies.svg';
import IconBrands from '../../public/images/Icon---Established-Brands.svg';
import IconEntrepreneurs from '../../public/images/Icon---Entrepreneurs.svg';
import IconPassionate from '../../public/images/Icon---Passionate-People.svg';

function getPartners() {
  return [
    {
      icon: IconAgencies,
      title: 'Marketing Agencies',
      description: 'blending branding and development',
    },
    {
      icon: IconInHouse,
      title: 'In-house Teams',
      description: "expediting their project's completion",
    },
    {
      icon: IconYoung,
      title: 'Young Companies',
      description: 'scaling up and building out',
    },
    {
      icon: IconBrands,
      title: 'Established Brands',
      description: 'creating new growth through improved customer experience',
    },
    {
      icon: IconEntrepreneurs,
      title: 'Entrepreneurs',
      description: 'looking for a competitive edge',
    },
    {
      icon: IconPassionate,
      title: 'Passionate People',
      description: 'looking to collaborate with those who share their vision',
    },
  ];
}
export function WorkWith() {
  const animatedLinesRef = useRef(null);
  const isInView = useInView(animatedLinesRef, {once: true});
  const partners = getPartners();
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeader
          pretitle="Who we work with"
          title="Our Partners Are"
          align="right"
        />
        <div className="mt-1 lg:flex">
          <div className="w-full font-light leading-tight md:text-lg lg:max-w-[43%] lg:text-xl">
            <p>From all industries and stages of growth</p>
            <div
              ref={animatedLinesRef}
              className="relative mt-[10px] max-w-[90%] pb-[10px] pt-[10px] md:max-w-[640px] md:pb-[15px] md:pr-16"
            >
              <p>Committed to setting the bar higher</p>
              <span
                className="absolute left-0 top-0 h-[1px] w-0 bg-primary-accent transition-all delay-300 duration-700"
                style={{
                  width: isInView ? '100%' : '0',
                }}
              ></span>
              <span
                className="absolute bottom-0 right-0 top-0 h-0 w-[1px] bg-primary-accent transition-all delay-1000 duration-700"
                style={{
                  height: isInView ? '100%' : '0',
                }}
              ></span>
            </div>
          </div>
          <div className="pl-6 pt-6 md:grid md:grid-cols-2 md:gap-x-10 md:pl-0 md:pt-4 lg:-ml-4 lg:pt-28">
            {partners.map((partner, index) => (
              <div
                className={clsx(
                  index === partners.length - 1 ? '' : 'mb-9',
                  'flex gap-x-5 sm:gap-x-8',
                )}
                key={index}
              >
                <img
                  src={partner.icon}
                  alt={partner.title}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="mb-2 h-10 w-10 shrink-0 object-contain"
                />
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-normal leading-tight lg:text-2xl">
                    {partner.title}
                  </h3>
                  <p className="font-light md:text-lg">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
