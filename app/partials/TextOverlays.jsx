import {Button} from '~/components/Button';
import {
  IconArrow,
  IconCapabilitiesOverlayLg,
  IconCapabilitiesOverlaySm,
  IconAboutOverlayLg,
  IconAboutOverlaySm,
  IconWorkOverlay,
  IconTriangle,
} from '~/components/Icon';

import angle1 from '../../public/images/blue-CTA-angle-01.png';
import angle2 from '../../public/images/blue-CTA-angle-02.png';
import angle3 from '../../public/images/blue-CTA-angle-03.png';

export function HomePrimaryOverlay() {
  return (
    <section className="bg-dark py-11 lg:mr-12">
      <div className="lg:ml-12">
        <div className="container">
          <div className="flex max-w-xl lg:max-w-3xl">
            <IconTriangle className="mr-5 h-8 w-8 text-primary-accent" />
            <div className="flex-1">
              <h2 className="mb-5 text-xl font-medium leading-tight text-white md:text-4xl lg:text-6xl">
                Provide the shopping experience users want before they have to
                ask.
              </h2>
              <Button
                to="/contact"
                variant="inline"
                className="flex items-center gap-x-2 text-white"
              >
                Create a New Experience
                <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSecondaryOverlay() {
  return (
    <section className="bg-primary-accent">
      <div className="container relative overflow-hidden py-7 md:py-20">
        <h2 className="mb-5 text-3xl font-medium leading-tight text-white md:mb-2 md:text-6xl">
          Ready to Work With Us?
        </h2>
        <p className="tracking-wide text-white md:text-lg">
          Awesome. We're excited too. Let's get to know each other.
        </p>
        <Button
          to="/contact"
          variant="inlineWhite"
          className="mt-5 flex items-center gap-x-2 md:mt-7"
        >
          Discover More
          <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
        </Button>
        <img
          src={angle1}
          loading="lazy"
          width="110"
          className="absolute right-0 top-0 mr-72 mt-6 hidden h-auto w-20 lg:block"
          aria-hidden="true"
          focusable="false"
          alt=""
        />
        <img
          src={angle2}
          loading="lazy"
          width="110"
          className="absolute bottom-0 right-0 mr-20 hidden w-44 md:block"
          aria-hidden="true"
          focusable="false"
          alt=""
        />
        <img
          src={angle3}
          loading="lazy"
          width="110"
          className="absolute bottom-0 right-0 mb-2 mr-6 hidden w-32 md:block"
          aria-hidden="true"
          focusable="false"
          alt=""
        />
      </div>
    </section>
  );
}
export function CapabilitiesOverlay() {
  return (
    <section className="relative bg-primary-accent">
      <div className="container relative overflow-hidden py-9 md:py-20">
        <h2 className="mb-5 text-3xl font-medium leading-tight text-white md:mb-2 md:text-6xl">
          Got questions?
        </h2>
        <p className="tracking-wide text-white md:text-lg">
          We sure hope so! We're ready to explain whatever you need to know.
        </p>
        <Button
          to="/contact"
          variant="inlineWhite"
          className="mt-5 flex items-center gap-x-2 md:mt-7"
        >
          Get Answers
          <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
        </Button>
        <IconCapabilitiesOverlayLg
          fill="none"
          stroke="#F3F8FF"
          width={453}
          height={270}
          className="absolute right-0 top-0 hidden h-full w-auto lg:block"
        />
      </div>
      <IconCapabilitiesOverlaySm
        fill="none"
        stroke="#F3F8FF"
        width={131}
        height={222}
        className="absolute right-0 top-0 h-full w-auto lg:hidden"
      />
    </section>
  );
}

export function WorkOverlay() {
  return (
    <section className="relative bg-dark">
      <div className="container relative overflow-hidden py-12 md:py-20">
        <div className="relative pl-10">
          <h2 className="mb-1 text-3xl font-medium leading-tight text-white md:text-6xl">
            Interested?
          </h2>
          <p className="tracking-wide text-white md:text-lg">
            That makes both of us
          </p>
          <IconWorkOverlay
            width={25}
            height={42}
            fill="none"
            stroke="#CCE4FF"
            className="absolute left-0 top-0 h-auto w-[23px]"
          />
        </div>
        <Button
          to="/contact"
          variant="inlineWhite"
          className="mt-7 flex items-center gap-x-2 hover:text-primary-accent md:mt-6 md:justify-end"
        >
          Let's Talk About It
          <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
export function AboutOverlay() {
  return (
    <section className="relative bg-tertiary-accent">
      <div className="container relative z-10 overflow-hidden py-10 md:py-20">
        <h2 className="mb-5 text-3xl font-medium leading-tight md:mb-2 md:text-6xl">
          Give your users a gift
        </h2>
        <p className="tracking-wide md:text-lg">
          Treat your users to an improved shopping experience they'll remember.
        </p>
        <Button
          to="/contact"
          variant="inline"
          className="mt-5 flex items-center gap-x-2 md:mt-7"
        >
          Let's Do Better, Together
          <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
        </Button>
        <IconAboutOverlayLg
          fill="none"
          width={239}
          height={270}
          className="absolute right-0 top-0 hidden h-full w-auto lg:block"
        />
      </div>
      <IconAboutOverlaySm
        fill="none"
        width={168}
        height={222}
        className="absolute right-0 top-0 h-full w-auto lg:hidden"
      />
    </section>
  );
}
