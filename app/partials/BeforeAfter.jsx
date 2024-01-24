import {useState} from 'react';
import clsx from 'clsx';
import CountUp from 'react-countup';

import compressionsaleLogo from '../../public/images/compressionsale.png';
import compressionsaleLogoLarge from '../../public/images/compressionsale-p-500.png';
import compressionsaleBefore from '../../public/images/CompressionSale-before.png';
import compressionsaleAfter from '../../public/images/CompressionSale-after.png';
import {IconLongArrowRight} from '~/components/Icon';

export function BeforeAfter() {
  const [detailsState, setDetailsState] = useState(false);
  return (
    <section className="py-19">
      <div className="container">
        {/* Grid */}
        <div className="flex flex-col lg:flex-row lg:gap-x-14">
          {/* Left */}
          <div className="relative lg:w-3/5 lg:pt-14">
            {/* Logo */}
            <img
              src={compressionsaleLogoLarge}
              loading="lazy"
              width={327}
              height={57}
              sizes="(max-width: 767px) 100vw, 218px"
              srcSet={`${compressionsaleLogoLarge} 500w, ${compressionsaleLogo} 654w`}
              alt="Compressionsale"
              className="mb-9 max-w-[80%] lg:ml-36 lg:w-56"
            />
            {/* lINES */}
            <div className="absolute top-16 hidden w-80 lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="356"
                height="60"
                viewBox="0 0 356 60"
                fill="none"
                className="h-auto w-full"
              >
                <line
                  x1="-6.89407e-09"
                  y1="8.50098"
                  x2="116"
                  y2="8.50098"
                  stroke="#3693FF"
                />
                <path d="M8 0.000976562L8 60.001" stroke="#3693FF" />
              </svg>
            </div>

            <div className="flex justify-between md:block lg:pl-24">
              {/* Desktop text */}
              <div className="hidden space-y-6 text-justify tracking-wide md:block">
                <p>
                  Compression Sale reached out to us after experiencing a
                  misfire while migrating to Shopify. After we launched their
                  new store, they saw a 4.66% increase in their conversion rate
                  and a $10.3 million increase in their revenue in the first
                  year.
                </p>
                <p>
                  What first looked like some small fixes turned into a full
                  revamp of their store's layout and design. We were also happy
                  to provide consulting services on how to improve customer
                  experience and get the most out of the Shopify platform.
                </p>
              </div>
              {/* Counter */}
              <div className="mt-5 border-l border-dark pl-8 text-3xl text-primary-accent md:border-0 md:pl-0 md:text-center md:text-6xl lg:mt-16 lg:text-start">
                <CountUp
                  delay={2}
                  end={4.66}
                  duration={5}
                  prefix="+"
                  suffix=" %"
                  decimal=","
                  decimals={2}
                />
              </div>
              {/* Counter details */}
              <div className="mt-3 max-w-[185px] font-light text-dark md:max-w-none md:text-center lg:max-w-[185px] lg:text-start lg:text-xl">
                1-year Conversion Rate Improvement
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="mt-8 flex justify-center lg:mt-0 lg:w-2/5 lg:items-center">
            {/* Before */}
            <div className="flex-1 lg:flex-auto">
              <h3 className="mb-4 text-center text-xs font-normal lg:text-start lg:text-xl">
                Before
              </h3>
              <div className="shadow-lg">
                <img
                  src={compressionsaleBefore}
                  loading="lazy"
                  width={368}
                  height={969}
                  alt=" CompressionSale before"
                  className="w-full"
                />
              </div>
            </div>
            {/* Arrow */}
            <div className="self-start px-3 lg:hidden">
              <IconLongArrowRight className="w-10" />
            </div>
            {/* After */}
            <div className="flex-1 lg:-ml-5 lg:flex-auto">
              <h3 className="mb-4 text-center text-xs font-normal lg:text-start lg:text-xl">
                After
              </h3>
              <div className="shadow-lg">
                <img
                  src={compressionsaleAfter}
                  loading="lazy"
                  width={434}
                  height={1128}
                  alt=" CompressionSale after"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          {/* Desktop text */}
          <div className="md:hidden">
            <details
              onToggle={() => {
                setDetailsState(!detailsState);
              }}
              className="mt-8 border-b border-light-gray pb-4"
            >
              <summary className="list-none text-end">
                <span className="sr-only">See more</span>
                <span className="inline-block cursor-pointer rounded-full border border-light-gray px-5 py-1">
                  <span className="relative flex h-[17px] w-[17px] items-center justify-center">
                    <span className="block h-[1px] w-full bg-dark"></span>
                    <span
                      className={clsx(
                        detailsState ? 'hidden' : 'block',
                        'absolute h-full w-[1px] bg-dark',
                      )}
                    ></span>
                  </span>
                </span>
              </summary>
              <div className="mt-5 space-y-4 text-justify tracking-wide">
                <p>
                  Compression Sale reached out to us after experiencing a
                  misfire while migrating to Shopify. After we launched their
                  new store, they saw a 4.66% increase in their conversion rate
                  and a $10.3 million increase in their revenue in the first
                  year.
                </p>
                <p>
                  What first looked like some small fixes turned into a full
                  revamp of their store's layout and design. We were also happy
                  to provide consulting services on how to improve customer
                  experience and get the most out of the Shopify platform.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
