import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import {SectionHeader} from '~/components/SectionHeader';

import Kimonix from '../../public/images/logo-kimonix.png';
import Slack from '../../public/images/logo-slack.png';
import Yotpo from '../../public/images/logo-Yotpo.png';
import Goptimize from '../../public/images/logo-google-optimize.png';
import Gtmetrix from '../../public/images/logo-gtmetrix.png';
import Github from '../../public/images/logo-github.png';
import Airtable from '../../public/images/logo-airtable.png';
import Lambdatest from '../../public/images/logo-lambdatest.png';
import Klaviyo from '../../public/images/logo-Klaviyo.png';

function toolsData() {
  return [
    {
      src: Kimonix,
      width: 359,
      height: 107,
      alt: 'Kimonix logo',
    },
    {
      src: Slack,
      width: 322,
      height: 96,
      alt: 'Slack logo',
    },
    {
      src: Yotpo,
      width: 336,
      height: 106,
      alt: 'Yotpo logo',
    },
    {
      src: Goptimize,
      width: 310,
      height: 118,
      alt: 'Google Optimize logo',
    },
    {
      src: Gtmetrix,
      width: 325,
      height: 91,
      alt: 'Gtmetrix logo',
    },
    {
      src: Github,
      width: 263,
      height: 72,
      alt: 'Github logo',
    },
    {
      src: Airtable,
      width: 330,
      height: 73,
      alt: 'Airtable logo',
    },
    {
      src: Lambdatest,
      width: 516,
      height: 82,
      alt: 'Lambdatest logo',
    },
    {
      src: Klaviyo,
      width: 277,
      height: 82,
      alt: 'Klaviyo logo',
    },
  ];
}

export function ToolsWeUse() {
  return (
    <section className="py-19">
      <div className="container">
        <SectionHeader pretitle="Tools we use" title="We're Experts In…" />
        <div className="-mx-6 border-b border-dark py-5 lg:mx-0 lg:px-3 lg:py-8">
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
              {toolsData().map((image, index) => (
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
        </div>
      </div>
    </section>
  );
}
