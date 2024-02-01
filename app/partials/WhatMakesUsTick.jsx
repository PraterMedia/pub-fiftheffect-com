import {useRef} from 'react';
import {useInView} from 'framer-motion';
import CountUp from 'react-countup';
import {SectionHeader} from '~/components/SectionHeader';
import {Button} from '~/components/Button';
import {IconArrow} from '~/components/Icon';

export function WhatMakesUsTick() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: true});
  return (
    <section className="pb-12 md:pb-16 lg:pt-9">
      <div ref={sectionRef} className="container">
        <div className="relative flex flex-wrap items-start justify-end md:pr-8 lg:flex-nowrap lg:pr-19">
          <div className="order-1 mr-auto md:order-none md:pt-10 lg:w-[462px] lg:max-w-[50%] lg:pt-0">
            <SectionHeader
              title="What Makes Us Tick?"
              description={
                <>
                  <span className="mb-4 mt-6 block text-base leading-snug md:text-lg">
                    The idea that customer experience can always be improved.
                    With Shopify, there's never a finish line, the playing field
                    is always expanding, and customer expectations are always
                    reaching new heights.
                  </span>
                  <span className="block text-base leading-snug md:text-lg">
                    We're thrilled by the challenge of staying two steps ahead
                    of trends and customers' expectations, showing everyone what
                    unparalleled CX can be.
                  </span>
                </>
              }
            />
            <div className="relative z-10 -mb-1 mt-11 hidden bg-white pb-1 pr-7 md:inline-block">
              <Button
                to="/contact"
                variant="inlineAccent"
                className="inline-flex items-center gap-x-2"
              >
                Let's Talk Strategy
                <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
              </Button>
            </div>
            <div
              className="absolute bottom-0 right-0 hidden h-[0.5px] bg-dark transition-all delay-1000 duration-700 md:block"
              style={{
                width: isInView ? '100%' : '0',
              }}
            ></div>
            <div
              className="absolute right-0 top-0 hidden w-[0.5px] bg-dark transition-all delay-300 duration-700 md:block"
              style={{
                height: isInView ? '100%' : '0',
              }}
            ></div>
          </div>
          <div className="relative -order-1 mx-auto grid w-full auto-cols-fr grid-cols-2 grid-rows-2 gap-x-11 gap-y-9 pb-12 pr-4 text-xl leading-none md:static md:pb-0 md:pr-0 lg:order-none  lg:ml-10 lg:w-auto">
            <div>
              <CountUp
                delay={0}
                start={0}
                end={95}
                duration={5}
                suffix="%"
                className="mb-1 block text-4xl leading-none text-primary-accent md:mb-3 md:text-6xl"
              />
              <span className="text-base leading-tight md:text-xl">
                Referral Rate
              </span>
            </div>
            <div>
              <CountUp
                delay={0}
                start={0}
                end={9.5}
                duration={5}
                suffix=" Years"
                decimals={1}
                className="mb-1 block text-4xl leading-none text-primary-accent md:mb-3 md:text-6xl"
              />
              <span className="text-base leading-tight md:text-xl">
                Average Experience
              </span>
            </div>
            <div>
              <CountUp
                delay={0}
                start={0}
                end={29}
                duration={5}
                suffix="+"
                className="mb-1 block text-4xl leading-none text-primary-accent md:mb-3 md:text-6xl"
              />
              <span className="text-base leading-tight md:text-xl">
                Stores Managed
              </span>
            </div>
            <div>
              <CountUp
                delay={0}
                start={0}
                end={9.1}
                duration={5}
                prefix="$"
                suffix=" M"
                decimals={1}
                className="mb-1 block text-4xl leading-none text-primary-accent md:mb-3 md:text-6xl"
              />
              <span className="text-base leading-tight md:text-xl">
                2022 Q1 Revenue Managed
              </span>
            </div>
            <div
              className="absolute right-0 top-0 w-[0.5px] bg-dark transition-all delay-300 duration-700 md:hidden"
              style={{
                height: isInView ? '100%' : '0',
              }}
            ></div>
          </div>
          <div className="-mt-3 flex w-full items-center justify-between gap-5 pb-12 md:hidden">
            <Button
              to="/contact"
              variant="inlineAccent"
              className="flex flex-shrink-0 items-center gap-x-2"
            >
              Let's Talk Strategy
              <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
            </Button>
            <div
              className="h-[0.5px] bg-dark transition-all delay-1000 duration-700"
              style={{
                width: isInView ? '100%' : '0',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
