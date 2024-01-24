import {useRef} from 'react';
import {useInView} from 'framer-motion';
import clsx from 'clsx';
import {SectionHeader} from '~/components/SectionHeader';

import IconFashion from '../../public/images/icon-fashion.svg';
import IconDesign from '../../public/images/icon-design_1.svg';
import IconHealth from '../../public/images/icon-health.svg';
import IconCollabs from '../../public/images/icon-collabs.svg';
import IconHospitality from '../../public/images/icon-Hospitality.svg';
import IconMedical from '../../public/images/icon-Medical.svg';

function familiarThingsData() {
  return [
    {
      icon: IconFashion,
      title: 'Fashion and accessories',
      description: 'mid-market to designer goods',
    },
    {
      icon: IconDesign,
      title: 'Interior and exterior design',
      description: 'home decor, furniture, and lifestyle accessories',
    },
    {
      icon: IconHealth,
      title: 'Health and fitness',
      description: 'supplements and athletic wear',
    },
    {
      icon: IconCollabs,
      title: 'Collabs and merch',
      description: 'be better together',
    },
    {
      icon: IconHospitality,
      title: 'Hospitality and cuisine',
      description: 'food, beverage, and service',
    },
    {
      icon: IconMedical,
      title: 'Medical supplies',
      description: 'devices and wearables',
    },
  ];
}

export function FamiliarThings() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: true});
  return (
    <div className="container">
      <div className="border-t border-r-dark pb-19 pt-8 md:border-0">
        <div ref={sectionRef}>
          <div className="relative pb-6 md:pb-11">
            <SectionHeader
              title="A Few Things We're Familiar With"
              description="Check out some of the industries that we've helped over years:"
              descriptionStyle="lg"
              className="max-w-[390px]"
            />
            <div
              style={{
                width: isInView ? '50%' : '0',
                opacity: isInView ? '1' : '0',
              }}
              className="absolute left-1/2 right-0 top-0 hidden h-[0.5px] w-1/2 bg-primary-accent transition-all duration-500 md:block"
            ></div>
            <div
              style={{
                height: isInView ? '100%' : '0',
                opacity: isInView ? '1' : '0',
              }}
              className="absolute right-0 top-0 hidden w-[0.5px] bg-primary-accent transition-all delay-[500ms] duration-500 md:block"
            ></div>
          </div>
          <div className="md:grid md:grid-cols-3">
            {familiarThingsData().map((feature, index) => (
              <div
                key={index}
                className={clsx(
                  index < 3
                    ? 'md:border-b md:pb-10 md:pt-7 lg:pb-20 lg:pt-10'
                    : 'md:pb-7 md:pt-10 lg:pb-10 lg:pt-20',
                  index != 5 ? 'md:border-r' : '',
                  index == 3 ? 'md:border-l' : '',
                  'flex items-center py-3 transition-all duration-500 md:block md:border-0 md:border-primary-accent md:px-5 lg:px-8',
                )}
                style={{
                  transitionDelay: `${index * 100 + 500}ms`,
                  borderColor: isInView
                    ? 'var(--clr-primary-accent)'
                    : 'transparent',
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="mr-4 h-10 w-10 object-contain transition-all duration-500 md:mb-5 md:mr-0"
                  style={{
                    opacity: isInView ? '1' : '0',
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 100 + 500}ms`,
                  }}
                />
                <div>
                  <h3
                    className="mb-1 text-xl font-normal transition-all duration-500 md:mb-5 lg:text-2xl"
                    style={{
                      opacity: isInView ? '1' : '0',
                      transform: isInView
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                      transitionDelay: `${index * 150 + 500}ms`,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-base font-light leading-normal tracking-wide transition-all duration-500 md:text-lg"
                    style={{
                      opacity: isInView ? '1' : '0',
                      transform: isInView
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                      transitionDelay: `${index * 200 + 500}ms`,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
