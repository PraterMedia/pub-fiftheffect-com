import {useNonce} from '@shopify/hydrogen';
import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useMatches,
  useRouteError,
  useLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
} from '@remix-run/react';

import {ShopifySalesChannel, Seo} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {seoPayload} from '~/lib/seo.server';

import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import {Layout} from './components/Layout';

import {DEFAULT_LOCALE, parseMenu} from './lib/utils';
//import {useAnalytics} from './hooks/useAnalytics';

/**
 * This is important to avoid re-fetching root queries on sub-navigations
 * @type {ShouldRevalidateFunction}
 */
export const shouldRevalidate = ({formMethod, currentUrl, nextUrl}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export function links() {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
}

/**
 * @return {LoaderReturnData}
 */
export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data;
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, context}) {
  const layout = await getLayoutData(context);
  const seo = seoPayload.root({shop: layout.shop, url: request.url});

  return defer({
    layout,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: layout.shop.id,
    },
    seo,
  });
}

export default function App() {
  const nonce = useNonce();

  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  const locale = DEFAULT_LOCALE;
  //const hasUserConsent = true;
  //useAnalytics(hasUserConsent, locale);
  return (
    <html lang={locale.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout
          key={`${locale.language}-${locale.country}`}
          layout={data.layout}
        >
          <Outlet />
        </Layout>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const rootData = useRootLoaderData();
  const nonce = useNonce();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout {...rootData}>
          <div className="route-error">
            <h1>Oops</h1>
            <h2>{errorStatus}</h2>
            {errorMessage && (
              <fieldset>
                <pre>{errorMessage}</pre>
              </fieldset>
            )}
          </div>
        </Layout>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layoutMenus(
    $headerMenuHandle: String!
    $footerMenuHandle: String!
    $policiesMenuHandle: String!
  ) {
    shop {
      id
      name
      description
      primaryDomain {
        url
      }
      brand {
       logo {
         image {
          url
         }
       }
     }
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
	policiesMenu: menu(handle: $policiesMenuHandle) {
		id
		items {
			...MenuItem
			items {
			  ...MenuItem
			}
		}
	}
  }
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
`;

async function getLayoutData({storefront}) {
  const HEADER_MENU_HANDLE = 'main-menu';
  const FOOTER_MENU_HANDLE = 'footer';
  const POLICIES_MENU_HANDLE = 'policies';

  const data = await storefront.query(LAYOUT_QUERY, {
    variables: {
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
      policiesMenuHandle: POLICIES_MENU_HANDLE,
    },
  });

  invariant(data, 'No data returned from Shopify API');
  /*
		  Modify specific links/routes (optional)
		  @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
		  e.g here we map:
			- /blogs/news -> /news
			- /blog/news/blog-post -> /news/blog-post
			- /collections/all -> /products
		*/
  const customPrefixes = {BLOG: '', CATALOG: 'products'};

  const headerMenu = data?.headerMenu
    ? parseMenu(data.headerMenu, customPrefixes)
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(data.footerMenu, customPrefixes)
    : undefined;

  const policiesMenu = data?.policiesMenu
    ? parseMenu(data.policiesMenu, customPrefixes)
    : undefined;

  return {shop: data.shop, headerMenu, footerMenu, policiesMenu};
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@remix-run/react').ShouldRevalidateFunction} ShouldRevalidateFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
