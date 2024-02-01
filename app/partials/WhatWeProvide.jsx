import {SectionHeader} from '~/components/SectionHeader';

import IconDev from '../../public/images/icon-dev.svg';
import IconRevenue from '../../public/images/icon-revenue.svg';
import IconDesign from '../../public/images/icon-design.svg';
import IconStrategy from '../../public/images/icon-strategic.svg';

function servicesData() {
  return [
    {
      icon: IconDev,
      title: 'Shopify Development',
      text: 'Transform your vision into an experience that connects with users. We optimize features to deliver peak functionality. Get more from your store',
      list: [
        'New Features & Functionality',
        'Shopify Plus Scripts & Checkout',
        'App Integration & Compatibility',
        'Custom App Development',
        'Accessibility & Compliance',
      ],
    },
    {
      icon: IconRevenue,
      title: 'Revenue Optimization',
      text: 'Review data and respond accordingly. The results are higher conversion rates, less cart abandonment, and forward momentum for your business.',
      list: [
        'Conversion Optimization & Strategy',
        'User & Heatmap Testing',
        'A/B Testing & Personalization',
        'Performance Optimization',
        'Funnel & Abandonment Audits',
      ],
    },
    {
      icon: IconDesign,
      title: 'Experience Design',
      text: "Customers come for a product, they come back because of a connection with your brand. We make users' experience complete and cohesive.",
      list: [
        'Responsive Web Design',
        'Proactive CX Design',
        'UI/UX Design',
        'eCommerce Branding',
        'Asset Design & Production',
      ],
    },
    {
      icon: IconStrategy,
      title: 'Strategy & Support',
      text: "eCommerce is a continuous process of planning, improvement, and maintenance. We believe that there's always a chance to be better.",
      list: [
        'Creative & Conceptual Planning',
        'Flexible Design & Development Hours',
        'Functionality & Performance Testing',
        'Continuous Improvement Audits',
        'Reliable & Responsive Support',
      ],
    },
  ];
}

export function WhatWeProvide() {
  return (
    <section className="py-19">
      <div className="container">
        <SectionHeader pretitle="Our Services" title="What We Provide" />
        <div className="mt-7 grid grid-cols-1 gap-14 md:mt-14 md:grid-cols-2 lg:gap-y-28">
          {servicesData().map((item, index) => (
            <div key={index}>
              <div className="mb-6 flex items-center gap-6">
                <img
                  className="h-auto w-8"
                  width="30"
                  loading="lazy"
                  src={item.icon}
                  alt={item.title}
                />
                <h3 className="text-xl leading-tight lg:text-2xl">
                  {item.title}
                </h3>
              </div>
              <p className="md:text-lg">{item.text}</p>
              <ul className="mt-8 list-none md:mt-10 md:text-lg">
                {item.list.map((listItem, index) => (
                  <li
                    key={index}
                    className={index === item.length - 1 ? '' : 'mb-3'}
                  >
                    - {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
