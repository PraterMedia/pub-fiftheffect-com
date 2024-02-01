import {useState} from 'react';
import clsx from 'clsx';
import {motion, AnimatePresence} from 'framer-motion';
import {SectionHeader} from '~/components/SectionHeader';
import {
  IconDev,
  IconStrategic,
  IconDesign,
  IconOptimization,
  IconArrow,
} from '~/components/Icon';
import {Button} from '~/components/Button';

function getServices() {
  return [
    {
      icon: <IconDev className="h-10 w-10" />,
      title: 'Shopify Development',
      description:
        'Transform your vision into an experience that connects with users. We optimize features to deliver peak functionality. Get more from your store',
    },
    {
      icon: <IconOptimization className="h-10 w-10" />,
      title: 'Revenue Optimization',
      description:
        'Review data and respond accordingly. The results are higher conversion rates, less cart abandonment, and forward momentum for your business.',
    },
    {
      icon: <IconDesign className="h-10 w-10" />,
      title: 'Experience Design',
      description:
        'Customers come for a product, they come back because of a connection with your brand. We make users experience complete and cohesive.',
    },
    {
      icon: <IconStrategic className="h-10 w-10" />,
      title: 'Strategy & Support',
      description:
        "eCommerce is a continuous process of planning, improvement, and maintenance. We believe that there's always a chance to be better.",
    },
  ];
}
export function Services() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeader
          pretitle="How We Help"
          title="We're a full service Shopify agency."
        />
        <div className="mt-4 lg:mt-11 lg:max-w-2xl">
          {getServices().map((service, index) => (
            <div
              key={index}
              className="border-b border-gray"
              onMouseEnter={() => setOpen(index)}
              onMouseLeave={() => setOpen(null)}
            >
              <div className="flex cursor-pointer items-center gap-x-6 py-5 md:py-6">
                {service.icon}
                <h3 className="text-xl font-normal leading-tight md:text-2xl lg:text-4xl">
                  {service.title}
                </h3>
                <div className="relative ml-auto flex h-[17px] w-[17px] items-center justify-center">
                  <span className="block h-[1px] w-full bg-dark"></span>
                  <span
                    className={clsx(
                      open === index ? 'hidden' : 'block',
                      'absolute h-full w-[1px] bg-dark',
                    )}
                  ></span>
                </div>
              </div>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.2}}
                    className="lg:text-lg"
                  >
                    <p className="pb-4">{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="pt-8 lg:pt-19">
          <Button
            to="/capabilities"
            variant="inline"
            className="flex items-center gap-x-2"
          >
            Learn More
            <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
