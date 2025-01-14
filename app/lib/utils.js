import {countries} from '~/data/countries';
export const DEFAULT_LOCALE = Object.freeze({
	...countries.default,
	pathPrefix: '',
  });
  
export function missingClass(string, prefix) {
	if (!string) {
		return true;
	}

	const regex = new RegExp(` ?${prefix}`, 'g');
	return string.match(regex) === null;
}
function resolveToFromType(
	{customPrefixes, pathname, type} = {
	  customPrefixes: {},
	},
  ) {
	if (!pathname || !type) return '';
  
	/*
		  MenuItemType enum
		  @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
		*/
	const defaultPrefixes = {
	  BLOG: 'blogs',
	  COLLECTION: 'collections',
	  COLLECTIONS: 'collections',
	  FRONTPAGE: 'frontpage',
	  HTTP: '',
	  PAGE: '',
	  CATALOG: 'collections/all',
	  PRODUCT: 'products',
	  SEARCH: 'search',
	  SHOP_POLICY: 'policies',
	};
  
	const pathParts = pathname.split('/');
	const handle = pathParts.pop() || '';
	const routePrefix = {
	  ...defaultPrefixes,
	  ...customPrefixes,
	};
  
	switch (true) {
	  // special cases
	  case type === 'FRONTPAGE':
		return '/';
  
	  case type === 'ARTICLE': {
		const blogHandle = pathParts.pop();
		return routePrefix.BLOG
		  ? `/${routePrefix.BLOG}/${blogHandle}/${handle}/`
		  : `/${blogHandle}/${handle}/`;
	  }
  
	  case type === 'COLLECTIONS':
		return `/${routePrefix.COLLECTIONS}`;
  
	  case type === 'SEARCH':
		return `/${routePrefix.SEARCH}`;
  
	  case type === 'CATALOG':
		return `/${routePrefix.CATALOG}`;
  
	  // common cases: BLOG, PAGE, COLLECTION, PRODUCT, SHOP_POLICY, HTTP
	  default:
		return routePrefix[type]
		  ? `/${routePrefix[type]}/${handle}`
		  : `/${handle}`;
	}
  }
  
/*
  Parse each menu link and adding, isExternal, to and target
*/
function parseItem(customPrefixes = {}) {
	return function (item) {
	  if (!item?.url || !item?.type) {
		// eslint-disable-next-line no-console
		console.warn('Invalid menu item.  Must include a url and type.');
		return null;
	  }
  
	  // extract path from url because we don't need the origin on internal to attributes
	  const {pathname} = new URL(item.url);
  
	  /*
				Currently the MenuAPI only returns online store urls e.g — xyz.myshopify.com/..
				Note: update logic when API is updated to include the active qualified domain
			  */
	  const isInternalLink = /\.myshopify\.com|shop\.fiftheffect\.com|checkout\.fiftheffect\.com/g.test(item.url);
	  
	  const parsedItem = isInternalLink
		? // internal links
		  {
			...item,
			isExternal: false,
			target: '_self',
			to: resolveToFromType({type: item.type, customPrefixes, pathname}),
		  }
		: // external links
		  {
			...item,
			isExternal: true,
			target: '_blank',
			to: item.url,
		  };
  
	  if ('items' in item) {
		return {
		  ...parsedItem,
		  items: item.items.map(parseItem(customPrefixes)).filter(Boolean),
		};
	  } else {
		return parsedItem;
	  }
	};
  }
/*
  Recursively adds `to` and `target` attributes to links based on their url
  and resource type.
  It optionally overwrites url paths based on item.type
*/
export function parseMenu(menu, customPrefixes = {}) {
  if (!menu?.items) {
    // eslint-disable-next-line no-console
    console.warn('Invalid menu passed to parseMenu');
    return null;
  }

  const parser = parseItem(customPrefixes);

  const parsedMenu = {
    ...menu,
    items: menu.items.map(parser).filter(Boolean),
  };

  return parsedMenu;
}
  