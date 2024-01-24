import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';

import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

import {ContactHero} from '~/partials/ContactHero';
import {OurFriends} from '~/partials/Partners';

const CONTACT_HANDLE = 'contact';

export const headers = routeHeaders;

export const loader = async ({request, context: {storefront}}) => {
  const {page} = await storefront.query(PAGE_QUERY, {
    variables: {
      handle: CONTACT_HANDLE,
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

export default function Contact() {
  const {page} = useLoaderData();
  return (
    <>
      <ContactHero
        heading={page.title}
        description={page.body}
        secondaryHeading="We only take projects where we know we can help."
        secondaryDescription={
          <>
            <p>
              Scout's honor, we'll be direct and let you know if we're not a
              good fit. Sometimes that's the case, and that's okay.
            </p>
            <p>
              Message us or set up an appointment and let's find out the answer
              to that.
            </p>
            <p>We're looking forward to speaking with you.</p>
          </>
        }
      />
      <OurFriends align="left" />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query ContactPageDetails($language: LanguageCode, $handle: String!)
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
