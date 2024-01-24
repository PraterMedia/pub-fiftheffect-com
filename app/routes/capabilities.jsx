import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
// import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

import {Hero} from '~/components/Hero';
import {OurCapabilities} from '~/partials/OurCapabilities';
import {RaiseTheBar} from '~/partials/RaiseTheBar';
import {WhatWeProvide} from '~/partials/WhatWeProvide';
import {ToolsWeUse} from '~/partials/ToolsWeUse';
import {OurStrategy} from '~/partials/OurStrategy';
import {OurProcess} from '~/partials/OurProcess';
import {Testimonials} from '~/partials/Testimonials';

import HeroImg150 from '../../public//images/ecommerce-product_xjqt2f_c_scale,w_150.jpg';
import HeroImg510 from '../../public//images/ecommerce-product_xjqt2f_c_scale,w_510.jpg';
import HeroImg765 from '../../public//images/ecommerce-product_xjqt2f_c_scale,w_765.jpg';
import HeroImg1047 from '../../public//images/ecommerce-product_xjqt2f_c_scale,w_1047.jpg';
import HeroImg1313 from '../../public//images/ecommerce-product_xjqt2f_c_scale,w_1313.jpg';
import HeroImg1434 from '../../public//images/ecommerce-product_xjqt2f_c_scale,w_1434.jpg';

import splideStyle from '@splidejs/react-splide/css/core';
import {CapabilitiesOverlay} from '~/partials/TextOverlays';
export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: splideStyle,
    },
  ];
};

const CAPABILITIES_HANDLE = 'capabilities';

export const headers = routeHeaders;

export const loader = async ({request, context: {storefront}}) => {
  const {page} = await storefront.query(PAGE_QUERY, {
    variables: {
      handle: CAPABILITIES_HANDLE,
      language: storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.page({page, url: request.url});

  return json({page, seo});
};
export default function Capabilities() {
  const {page} = useLoaderData();
  return (
    <>
      <Hero
        heading={{
          useH1: 'true',
          content:
            "It's More Than a Website, It's a Complete Customer Experience",
        }}
        description={{
          content:
            'We build, optimize, and maintain stores that help you build relationships with your customers.',
        }}
        cta={{
          to: '/contact',
          content: 'Schedule A Call',
        }}
        media={{
          src: HeroImg1434,
          srcSet: `${HeroImg150} 150w,
		  ${HeroImg510} 510w,
		  ${HeroImg765} 765w,
		  ${HeroImg1047} 1047w,
		  ${HeroImg1313} 1313w,
		  ${HeroImg1434} 1434w`,
          width: 1434,
          height: 800,
          sizes:
            '(min-width: 1241px) 510px, (min-width: 992px) calc(100vw - 710px), (min-width: 768px) calc(100vw - 440px), calc(100vw - 50px)',
        }}
      />
      <OurCapabilities />
      <RaiseTheBar />
      <WhatWeProvide />
      <ToolsWeUse />
      <OurStrategy />
      <OurProcess />
      <Testimonials />
      <CapabilitiesOverlay />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query CapabilitiesPageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
	  title
      seo {
        description
        title
      }
    }
  }
`;
