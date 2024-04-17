/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, context}) {
	console.log('loader', context.customerAccount);
  return context.customerAccount.login();
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
