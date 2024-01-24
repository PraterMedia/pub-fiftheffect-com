import {useRef} from 'react';
import {useInView} from 'framer-motion';
import {Button} from '~/components/Button';
import {IconArrow} from '~/components/Icon';
import {SectionHeader} from '~/components/SectionHeader';

export function RaiseTheBar() {
  const animatedLinesRef = useRef(null);
  const isInView = useInView(animatedLinesRef, {once: true});
  return (
    <section className="bg-borders py-19">
      <div className="container relative z-10 max-w-[620px]">
        <SectionHeader
          title="Raise The Bar Higher"
          description="Expect more from your Shopify store, we'll make sure it delivers"
        />
        <div className="mt-6">
          <Button
            to="/contact"
            variant="inline"
            className="flex items-center gap-x-2"
          >
            Schedule a Call
            <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        ref={animatedLinesRef}
        className="-mt-5 hidden justify-center px-5 md:flex"
      >
        <div className="relative w-1/12 lg:w-1/5 xl:w-3/12">
          <span
            style={{
              width: isInView ? '100%' : '0',
            }}
            className="absolute left-0 top-0 h-[0.5px] bg-primary-accent transition-all duration-500"
          ></span>
          <span
            style={{
              height: isInView ? '100%' : '0',
            }}
            className="absolute right-0 top-0 w-[0.5px] bg-primary-accent transition-all delay-500 duration-300"
          ></span>
        </div>
        <div className="relative h-6 flex-1 md:h-10 lg:h-20">
          <span
            style={{
              width: isInView ? '100%' : '0',
            }}
            className="absolute bottom-0 left-0 h-[0.5px] bg-primary-accent transition-all delay-[800ms] duration-700"
          ></span>
        </div>
      </div>
    </section>
  );
}
