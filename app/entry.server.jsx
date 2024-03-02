import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {EntryContext} remixContext
 */
export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  let {nonce, header, NonceProvider} = createContentSecurityPolicy({
    frameSrc: ['https://calendly.com', 'https://js.driftt.com'],
    imgSrc: [
      'self',
      'https://cdn.shopify.com',
      'https://shopify.com',
      'localhost:*',
      'data:',
    ],
  });
  header = header.replaceAll(
    'https://cdn.shopify.com',
    'https://cdn.shopify.com https://fonts.gstatic.com https://fonts.googleapis.com https://formaloo.me https://js.driftt.com https://acsbapp.com',
  );
  header = header.replaceAll(
    'https://monorail-edge.shopifysvc.com',
    'https://monorail-edge.shopifysvc.com https://api.formaloo.me https://cdn.acsbapp.com https://acsbapp.com',
  );
  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

/** @typedef {import('@shopify/remix-oxygen').EntryContext} EntryContext */
