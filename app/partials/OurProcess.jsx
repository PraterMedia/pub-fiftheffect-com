import {Fragment} from 'react';
import clsx from 'clsx';
import {
  IconProcessArrowRight,
  IconProcessArrowBottom,
  IconProcessRepeat,
} from '~/components/Icon';
import {SectionHeader} from '~/components/SectionHeader';
import arrowMobile from '../../public/images/process-bottom-arrow-mobile.png';

function circlesData() {
  return [
    {
      name: 'Discover',
      color: '#00244d',
    },
    {
      name: 'Define',
      color: '#003c80',
    },
    {
      name: 'Create',
      color: '#0053b3',
    },
    {
      name: 'Test',
      color: '#006be6',
    },
    {
      name: 'Launch',
      color: '#3693ff',
    },
  ];
}
export function OurProcess() {
  return (
    <section className="py-19">
      <div className="container">
        <SectionHeader pretitle="What Drives US" title="Our Process" />
        <div className="max-w-[630px] space-y-3 md:space-y-7 md:text-xl">
          <p>
            We are a tight-knit, laser-focused unit with one purpose, helping
            our clients connect with customers and achieve their goals.
          </p>
          <p>
            We listen to your needs and get to work executing a plan of action
            that meets and exceeds expectations. More than one-off results,
            we're capable of working with your vision as it expands.
          </p>
        </div>
        <div className="relative mx-auto max-w-[360px] pt-10 sm:max-w-[980px] md:pt-16">
          <div className="grid auto-cols-1fr grid-cols-process grid-rows-process items-center justify-center sm:flex">
            {circlesData().map((circle, index) => (
              <Fragment key={index}>
                <div
                  className={clsx(
                    'relative z-10 flex aspect-square w-full max-w-none flex-shrink flex-grow-0 basis-auto items-center justify-center rounded-full border border-solid bg-white text-[5vw] sm:col-start-auto sm:col-end-auto sm:row-start-auto sm:row-end-auto sm:w-[13vw] sm:max-w-[148px] sm:text-[3vw] md:text-[19px] lg:text-2xl',
                    index === 2 &&
                      'col-start-3 col-end-4 row-start-3 row-end-4',
                    index === 3 &&
                      'col-start-3 col-end-4 row-start-5 row-end-6',
                    index === 4 &&
                      'col-start-3 col-end-4 row-start-7 row-end-[8]',
                  )}
                  style={{borderColor: circle.color}}
                >
                  <p>{circle.name}</p>
                </div>
                {index < circlesData().length - 1 && (
                  <>
                    <IconProcessArrowRight
                      className={clsx(
                        'mx-2 h-auto w-[53px] max-w-[40px] sm:mx-1 md:max-w-[5vw] lg:max-w-[10vw]',
                        index >= 1 && 'hidden sm:block',
                      )}
                    />
                  </>
                )}
                {index >= 1 && index < circlesData().length - 1 && (
                  <IconProcessArrowBottom
                    className={clsx(
                      'col-start-3 col-end-4 my-2 h-auto w-[4px] justify-self-center sm:col-start-auto sm:col-end-auto sm:row-start-auto sm:row-end-auto sm:hidden',
                      index === 1 && 'row-start-2 row-end-3',
                      index === 2 && 'row-start-5 row-end-4',
                      index === 3 && 'row-start-7 row-end-6',
                    )}
                  />
                )}
              </Fragment>
            ))}
            <img
              src={arrowMobile}
              loading="lazy"
              alt="Repeat"
              className="col-start-1 col-end-4 row-start-2 row-end-[9] mx-auto my-1 h-auto w-full max-w-[61%] self-center object-contain sm:hidden"
            />
          </div>
          <div className="mx-auto mt-4 hidden max-w-[86%] sm:block">
            <IconProcessRepeat className="h-auto w-full" />
            <div className="absolute bottom-0 left-0 right-0 mb-1 text-center text-[2.7vw] md:mb-4 md:text-lg">
              Repeat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
