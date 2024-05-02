import feSeoMedia from "../../public/images/5e-studios-empowers-store-for-success.jpg"
function root({shop, url}) {
	return {
	  title: shop?.name,
	  titleTemplate: '%s',
	  description: truncate(shop?.description ?? ''),
	  url,
	  robots: {
		noIndex: false,
		noFollow: false,
	  },
	  jsonLd: {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: shop.name,
		logo: shop.brand?.logo?.image?.url,
		sameAs: [
		  'https://www.linkedin.com/company/fiftheffect/',
		  'https://instagram.com/fiftheffect',
		],
		url
	  },
	};
  }
function home() {
	return {
	  description: 'Create unique and functional Shopify stores that drive sales and keep customers coming back. Join forces with Fifth Effect to build something great!',
	  media: feSeoMedia,
	  robots: {
		noIndex: false,
		noFollow: false,
	  },
	  jsonLd: {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Home page',
	  },
	};
  }
  
  function page({page, url}) {
	return {
	  description: truncate(page?.seo?.description || ''),
	  title: page?.seo?.title ?? page?.title,
	  titleTemplate: '%s | Fifth Effect Studios',
	  url,
	  jsonLd: {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: page.title,
	  },
	};
  }
  function product({product, url}) {
	return {
	  description: truncate(product?.seo?.description || ''),
	  title: product?.seo?.title ?? product?.title,
	  titleTemplate: '%s | Fifth Effect Studios',
	  url,
	  jsonLd: {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.title,
		image: product.images?.[0]?.src,
		description: truncate(product?.description || ''),
		brand: {
		  '@type': 'Brand',
		  name: 'Fifth Effect Studios',
		},
	  },
	};
	  }
export const seoPayload = {
	home,
	page,
	product,
	root,
  };
  
  /**
   * Truncate a string to a given length, adding an ellipsis if it was truncated
   * @param str - The string to truncate
   * @param num - The maximum length of the string
   * @returns The truncated string
   * @example
   * ```js
   * truncate('Hello world', 5) // 'Hello...'
   * ```
   */
  function truncate(str, num = 155) {
	if (typeof str !== 'string') return '';
	if (str.length <= num) {
	  return str;
	}
	return str.slice(0, num - 3) + '...';
  }
  