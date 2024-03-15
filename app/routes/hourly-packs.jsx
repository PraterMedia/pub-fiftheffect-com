import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

import {Hero} from '~/components/Hero';
import {StripePricingTable} from '~/components/StripePricingTable';

const PRICING_HANDLE = 'hourly-packs';

export const headers = routeHeaders;

export const loader = async ({request, context: {storefront}}) => {
  const {page} = await storefront.query(PAGE_QUERY, {
    variables: {
      handle: PRICING_HANDLE,
      language: storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.page({page, url: request.url});

  return json({
    page,
    seo,
    analytics: {
      pageType: AnalyticsPageType.page,
    },
  });
};
export default function Work() {
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
      <StripePricingTable />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query WorkPageDetails($language: LanguageCode, $handle: String!)
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
