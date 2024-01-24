import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
// import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

import {Hero} from '~/components/Hero';
import {WhatMakesUsTick} from '~/partials/WhatMakesUsTick';
import {OurTeam} from '~/partials/OurTeam';
import {OurValues} from '~/partials/OurValues';
import {AtTheHeart} from '~/partials/AtTheHeart';
import {AboutOverlay} from '~/partials/TextOverlays';

const ABOUT_HANDLE = 'about';

export const headers = routeHeaders;

export const loader = async ({request, context: {storefront}}) => {
  const {page} = await storefront.query(PAGE_QUERY, {
    variables: {
      handle: ABOUT_HANDLE,
      language: storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.page({page, url: request.url});

  return json({page, seo});
};
export default function About() {
  const {page} = useLoaderData();
  return (
    <>
      <Hero
        heading={{
          useH1: 'true',
          content: page.title,
        }}
        description={{
          content: page.body,
        }}
      />
      <WhatMakesUsTick />
      <OurTeam />
      <OurValues />
      <AtTheHeart />
      <AboutOverlay />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query AboutPageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
	  title
	  body
      seo {
        description
        title
      }
    }
  }
`;
