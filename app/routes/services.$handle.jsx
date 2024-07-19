// import {useNonce} from '@shopify/hydrogen';
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
} from '@builder.io/sdk-react';
import {useLoaderData} from '@remix-run/react';

const apiKey = 'f538d2232def447ca4955883895023b0';

export const loader = async ({params, request}) => {
  const url = new URL(request.url);
  const urlPath = `/services/${params['handle'] || ''}`;

  const page = await fetchOneEntry({
    model: 'landing-page',
    apiKey: apiKey,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {urlPath},
  });

  if (!page && !isPreviewing(url.search)) {
    throw new Response('Page Not Found', {
      status: 404,
      statusText: 'Page not found in Builder.io',
    });
  }

  return {page};
};

// Define and render the page.
export default function Page() {
  // Use the useLoaderData hook to get the Page data from `loader` above.
  const {page} = useLoaderData();
  //   const nonce = useNonce();

  //   console.log(nonce);
  // Render the page content from Builder.io
  return <Content model="landing-page" apiKey={apiKey} content={page} />;
}
