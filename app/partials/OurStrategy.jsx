import {useRef} from 'react';
import {useInView} from 'framer-motion';
import clsx from 'clsx';
import {SectionHeader} from '~/components/SectionHeader';
import {Button} from '~/components/Button';

import iconIdentify from '../../public/images/icon-identify.svg';
import iconCreate from '../../public/images/icon-create.svg';
import iconAdvise from '../../public/images/icon-advise.svg';
import {IconArrow} from '~/components/Icon';

export function OurStrategy() {
  return (
    <section className="bg-borders py-19">
      <div className="container">
        <SectionHeader
          pretitle="How We Deliver Results"
          title="Our Strategy"
          align="right"
        />
        <div className="flex flex-col gap-5 pt-5 md:block md:pt-0">
          <Strategy
            icon={iconIdentify}
            title="Identify The Human Element"
            description="Data is important, but the human connection is everything. We create an unmatched user experience by becoming customers ourselves, exploring stores from all angles."
            leftLine={false}
            index={0}
          />
          <Strategy
            className="mx-auto"
            icon={iconCreate}
            title="Create Seamless Products"
            description="Updates are more than details, they're the face of your brand. We create cohesive stores to every customer that visits. New features that feel like they've always been there."
            index={1}
          />
          <Strategy
            className="ml-auto"
            icon={iconAdvise}
            title="Advise Intelligent Growth"
            description="Straightforward, unbiased counsel that helps you make the best decisions. We're always looking down the road to help our partners reach their goals while avoiding any pitfalls."
            index={2}
          />
        </div>
        <div className="mt-8 md:mt-14">
          <Button
            to="/contact"
            variant="inlineAccent"
            className="flex items-center gap-x-2 md:justify-end"
          >
            Let's Talk Strategy
            <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Strategy({
  className,
  icon,
  title,
  description,
  leftLine = true,
  index = 0,
}) {
  const animatedLinesRef = useRef(null);
  const isInView = useInView(animatedLinesRef, {once: true});
  return (
    <div
      className={clsx(
        'relative items-start gap-5 border border-gray p-5 md:flex md:max-w-[560px] md:gap-8 md:border-0 md:p-10',
        className,
      )}
      ref={animatedLinesRef}
    >
      <img
        src={icon}
        loading="lazy"
        alt={title}
        className="float-left mr-3 h-7 w-7 object-contain md:mr-0 md:flex-none"
      />
      <div>
        <h3 className="mb-7 text-xl leading-tight md:mb-4 md:text-2xl">
          {title}
        </h3>
        <p className="leading-snug md:text-lg">{description}</p>
      </div>

      {leftLine && (
        <span
          style={{
            height: isInView ? '100%' : '0',
          }}
          className={clsx(
            'absolute left-0 top-0 hidden w-[0.5px] bg-dark transition-all duration-500 md:block',
            index === 1 && 'delay-[250ms]',
            index === 2 && 'delay-[1000ms]',
          )}
        />
      )}
      <span
        style={{
          width: isInView ? '100%' : '0',
        }}
        className={clsx(
          'absolute bottom-0 left-0 hidden h-[0.5px] bg-dark transition-all duration-500 md:block',
          index === 1 && 'delay-[750ms]',
          index === 2 && 'delay-[1500ms]',
        )}
      />
      <div className="clear-both"></div>
    </div>
  );
}
