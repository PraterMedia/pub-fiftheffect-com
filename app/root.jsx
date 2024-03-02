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
import {Layout} from './components/Layout';
import {ErrorLayout} from './components/ErrorLayout';
import {NotFound} from './components/NotFound';
import {GenericError} from './components/GenericError';
import {DriftChat, Accessibe} from './components/ExternalScripts';

import {DEFAULT_LOCALE, parseMenu} from './lib/utils';
import {useAnalytics} from './hooks/useAnalytics';

import fiAppleTouch from '../public/icons/apple-touch-icon.png';
import fi32 from '../public/icons/favicon-32x32.png';
import fi16 from '../public/icons/favicon-16x16.png';
import fiMask from '../public/icons/safari-pinned-tab.svg';
import favicon from '../public/icons/favicon.ico';

import HelveticaBold from './styles/fonts/HelveticaNeueLTPro-bold.woff';
import HelveticaMedium from './styles/fonts/HelveticaNeueLTPro-medium.woff';
import HelveticaLight from './styles/fonts/HelveticaNeueLTPro-light.woff';
import Helvetica from './styles/fonts/HelveticaNeueLTPro.woff';

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
    {
      rel: 'preconnect',
      href: 'https://js.driftt.com',
    },
    {
      rel: 'preload',
      type: 'font/woff',
      as: 'font',
      crossOrigin: 'anonymous',
      href: Helvetica,
    },
    {
      rel: 'preload',
      type: 'font/woff',
      as: 'font',
      crossOrigin: 'anonymous',
      href: HelveticaLight,
    },
    {
      rel: 'preload',
      type: 'font/woff',
      as: 'font',
      crossOrigin: 'anonymous',
      href: HelveticaMedium,
    },
    {
      rel: 'preload',
      type: 'font/woff',
      as: 'font',
      crossOrigin: 'anonymous',
      href: HelveticaBold,
    },
    {rel: 'apple-touch-icon', sizes: '180x180', href: fiAppleTouch},
    {rel: 'icon', sizes: '32x32', type: 'image/png', href: fi32},
    {rel: 'icon', sizes: '16x16', type: 'image/png', href: fi16},
    {rel: 'manifest', href: '/icons/manifest.json'},
    {rel: 'mask-icon', href: fiMask, color: '#5bbad5'},
    {rel: 'shortcut icon', href: favicon},
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
  const hasUserConsent = true;
  useAnalytics(hasUserConsent, locale);
  return (
    <html lang={locale.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <Seo />
        <Meta />
        <Links />
        <DriftChat />
        <Accessibe />
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
  const locale = DEFAULT_LOCALE;
  const rootData = useRootLoaderData();
  const nonce = useNonce();

  const routeError = useRouteError();
  const isRouteError = isRouteErrorResponse(routeError);

  let title = 'Error';

  if (isRouteError) {
    title = 'Not found';
  }

  return (
    <html lang={locale.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <title>{title}</title>
        <Meta />
        <Links />
        <DriftChat />
      </head>
      <body>
        {/* <ErrorLayout
          key={`${locale.language}-${locale.country}`}
          layout={rootData.layout}
        > */}
        {isRouteError ? (
          <>{routeError.status === 404 ? <NotFound /> : <GenericError />}</>
        ) : (
          <GenericError />
        )}
        {/* </ErrorLayout> */}
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
