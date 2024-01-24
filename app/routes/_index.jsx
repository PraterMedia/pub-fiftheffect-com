import {defer} from '@shopify/remix-oxygen';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {seoPayload} from '~/lib/seo.server';

import {Hero} from '~/components/Hero';
import {OurFriends} from '~/partials/Partners';
import {Services} from '~/partials/Services';
import {Partnership} from '~/partials/Partnership';
import {BeforeAfter} from '~/partials/BeforeAfter';
import {Testimonials} from '~/partials/Testimonials';
import {
  HomePrimaryOverlay,
  HomeSecondaryOverlay,
} from '~/partials/TextOverlays';
import {WorkWith} from '~/partials/WorkWith';

import splideStyle from '@splidejs/react-splide/css/core';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: splideStyle,
    },
  ];
};
export async function loader({params, context}) {
  const {language, country} = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }
  const seo = seoPayload.home();
  return defer({
    seo,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  });
}
export default function Homepage() {
  return (
    <>
      <Hero
        highlighted="true"
        heading={{
          useH1: 'true',
          content: "Unlock Your Shopify Store's True Potential",
        }}
        description={{
          content:
            'Accelerate growth with expert eCommerce optimization. Move swiftly with our dedicated team of Shopify Experts, designers, and strategists.',
        }}
        cta={{
          to: '/contact',
          content: "Let's Do Better, Together",
        }}
        media={{
          src: '/animations/homeHeroAnimation',
          type: 'lottie',
        }}
      />
      <OurFriends align="right" highlighted="true" />
      <Services />
      <HomePrimaryOverlay />
      <WorkWith />
      <Partnership />
      <BeforeAfter />
      <Testimonials />
      <HomeSecondaryOverlay />
    </>
  );
}
