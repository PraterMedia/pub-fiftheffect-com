import {useRef} from 'react';
import {useInView} from 'framer-motion';
import {SectionHeader} from '~/components/SectionHeader';
import iconClarity from '../../public/images/icon-clarity.svg';
import iconHonesty from '../../public/images/icon-honesty.svg';
import iconEfficiency from '../../public/images/icon-efficiency.svg';
import iconQuality from '../../public/images/icon-quality.svg';
import iconReliability from '../../public/images/icon-reliability.svg';
import iconCommunication from '../../public/images/icon-communication.svg';

function getOurValues() {
  return [
    {
      icon: iconClarity,
      title: 'Clarity',
      description:
        'We explain and clarify, so clients understand each step of our work.',
    },
    {
      icon: iconHonesty,
      title: 'Honesty',
      description: 'We say what we mean and mean what we say, every time.',
    },
    {
      icon: iconEfficiency,
      title: 'Efficiency',
      description:
        'We save time and money through our experience and expertise.',
    },
    {
      icon: iconQuality,
      title: 'Quality',
      description:
        "We stand behind our work. It's not the Fifth Effect until it's perfect.",
    },
    {
      icon: iconReliability,
      title: 'Reliability',
      description: 'We believe your word matters so we never over-promise.',
    },
    {
      icon: iconCommunication,
      title: 'Consistency',
      description:
        'We consider each project top priority. There are no exceptions.',
    },
  ];
}
export function OurValues() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: true});
  return (
    <section className="py-12 md:py-16">
      <div ref={sectionRef} className="container">
        <div className="flex flex-wrap items-center gap-x-10">
          <div className="lg:w-[310px]">
            <SectionHeader
              title="Our Values"
              description={
                <>
                  <span className="mt-6 block text-base leading-snug md:text-lg">
                    Beyond what a company does, it's important to know who they
                    are. These are the values that guide us.
                  </span>
                </>
              }
            />
          </div>
          <div className="relative order-3 mt-14 flex-1 pt-6 lg:order-none lg:py-14">
            <figure className="lg:pl-24">
              <blockquote>
                <p className="text-base font-light italic leading-normal text-gray md:text-xl">
                  Customer obsession is not just listening to customers.
                  Customer obsession is also inventing on their behalf. Because
                  it's not their job to invent for themselves; and so you need
                  to be an inventor and a pioneer.
                </p>
              </blockquote>
              <figcaption className="mb-6 mt-5">
                <cite className="text-xl font-light italic text-gray">
                  - Jeff Bezos
                </cite>
              </figcaption>
            </figure>

            <div
              className="h-[0.5px] bg-dark transition-all delay-1000 duration-700"
              style={{
                width: isInView ? '100%' : '0',
              }}
            ></div>
            <div
              className="absolute right-0 top-0 w-[0.5px] bg-dark transition-all delay-300 duration-700 lg:left-[70px] lg:right-auto"
              style={{
                height: isInView ? '100%' : '0',
              }}
            ></div>
            <div
              className="absolute right-0 top-0 h-[0.5px] bg-dark transition-all delay-1000 duration-700 lg:hidden"
              style={{
                width: isInView ? '80%' : '0',
              }}
            ></div>
          </div>
          <div className="mt-10 grid w-full grid-cols-2 flex-wrap justify-between gap-x-8 gap-y-14 lg:flex lg:gap-y-20">
            {getOurValues().map((value, index) => (
              <div key={index} className="lg:max-w-[270px]">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="mb-4 block h-10 w-10 object-cover"
                  loading="lazy"
                  width={40}
                  height={40}
                />
                <h3 className="mb-4 text-xl leading-tight lg:text-2xl">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
