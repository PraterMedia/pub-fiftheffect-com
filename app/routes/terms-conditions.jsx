import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

const TERMS_CONDITIONS_HANDLE = 'terms-conditions';

export const headers = routeHeaders;

export const loader = async ({request, context: {storefront}}) => {
  const {page} = await storefront.query(PAGE_QUERY, {
    variables: {
      handle: TERMS_CONDITIONS_HANDLE,
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
      pageType: AnalyticsPageType.policy,
    },
  });
};

export default function TermsConditions() {
  const {page} = useLoaderData();
  return (
    <article className="py-8 md:py-14">
      <div className="container max-w-[996px]">
        <h1 className="mb-4 border-b border-solid border-light-gray pb-1 text-5xl leading-solid tracking-wide md:mb-10 md:text-7xl">
          {page.title}
        </h1>
        <div
          className="prose break-words"
          dangerouslySetInnerHTML={{__html: page.body}}
        ></div>
      </div>
    </article>
  );
}

const PAGE_QUERY = `#graphql
  query TermsConditionsPageDetails($language: LanguageCode, $handle: String!)
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
