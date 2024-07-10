import {CartForm, Image, Money} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {useVariantUrl} from '~/lib/variants';
import {IconMinus, IconPlus, IconTrash} from './Icon';
import clsx from 'clsx';

/**
 * @param {CartMainProps}
 */
export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return cartHasItems ? (
    <>
      <CartDetails cart={cart} layout={layout} />
      <CartSummary layout={layout}>
        {/* <CartDiscounts discountCodes={cart.discountCodes} /> */}
        <CartCheckoutActions checkoutUrl={cart.checkoutUrl} cost={cart.cost} />
      </CartSummary>
    </>
  ) : (
    <CartEmpty hidden={linesCount} layout={layout} />
  );
}

/**
 * @param {CartMainProps}
 */
function CartDetails({layout, cart}) {
  return (
    <main className="flex-1 overflow-auto px-3">
      <CartLines lines={cart?.lines} layout={layout} />
    </main>
  );
}

/**
 * @param {{
 *   layout: CartMainProps['layout'];
 *   lines: CartApiQueryFragment['lines'] | undefined;
 * }}
 */
function CartLines({lines, layout}) {
  if (!lines) return null;

  return (
    <div aria-labelledby="cart-lines" className="flex flex-col">
      <table>
        <thead role="rowgroup">
          <tr role="row">
            <th id="CartDrawer-ColumnProductImage" role="columnheader">
              <span className="sr-only">Product image</span>
            </th>
            <th id="CartDrawer-ColumnProduct" scope="col" role="columnheader">
              <span className="sr-only">Product</span>
            </th>
            <th id="CartDrawer-ColumnRemove" scope="col" role="columnheader">
              <span className="sr-only">Remove</span>
            </th>
            <th id="CartDrawer-ColumnQuantity" role="columnheader">
              <span className="sr-only">Quantity and Total</span>
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {lines.nodes.map((line, index) => (
            <CartLineItem
              key={line.id}
              line={line}
              layout={layout}
              index={index}
              last={index === lines.nodes.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * @param {{
 *   layout: CartMainProps['layout'];
 *   line: CartLine;
 * }}
 */
function CartLineItem({layout, line, index, last}) {
  const {id, merchandise, lineId, sellingPlanAllocation} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <tr
      key={id}
      id={`CartDrawer-Item-${index}`}
      className={clsx(
        !last && 'border-b border-borders-gray pb-5',
        'grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(2,auto)] gap-2',
      )}
      role="row"
    >
      <td
        className="relative row-start-1 row-end-3 w-20 pt-5 md:w-[100px]"
        role="cell"
        headers="CartDrawer-ColumnProductImage"
      >
        <Link
          prefetch="intent"
          to={lineItemUrl}
          aria-hidden="true"
          tabIndex="-1"
          className="absolute left-0 top-0 h-full w-full"
          onClick={() => {
            if (layout === 'aside') {
              // close the drawer
              window.location.href = lineItemUrl;
            }
          }}
        ></Link>
        {image && (
          <Image
            alt={title}
            //   aspectRatio="1/1"
            data={image}
            height={100}
            loading="lazy"
            width={100}
            className="h-auto max-w-full"
          />
        )}
      </td>
      <td
        className="col-start-2 col-end-4 pl-3 pt-5"
        role="cell"
        headers="CartDrawer-ColumnProduct"
      >
        <Link
          prefetch="intent"
          to={lineItemUrl}
          className="block font-bold leading-tight text-dark"
          onClick={() => {
            if (layout === 'aside') {
              // close the drawer
              window.location.href = lineItemUrl;
            }
          }}
        >
          {product.title}
        </Link>
        <ul>
          {sellingPlanAllocation && (
            <li key={sellingPlanAllocation.sellingPlan.name} className="mt-1">
              <small className="text-xs leading-snug text-gray">
                {sellingPlanAllocation.sellingPlan.name}
              </small>
            </li>
          )}
          {selectedOptions.map((option) =>
            option.name == 'Title' && option.value == 'Default Title' ? (
              ''
            ) : (
              <li key={option.name} className="mt-1">
                <small className="text-sm font-medium leading-snug text-dark">
                  {option.name}: {option.value}
                </small>
              </li>
            ),
          )}
        </ul>
      </td>
      <td
        className="pt-5 text-right"
        role="cell"
        headers="CartDrawer-ColumnRemove"
      >
        <div className="hidden md:block">
          <CartLineRemoveButton lineIds={[lineId]} />
        </div>
      </td>

      <td
        className="col-start-2 col-end-5 pl-3"
        role="cell"
        headers="CartDrawer-ColumnQuantity"
      >
        <div className="flex flex-wrap items-end justify-between gap-2">
          <CartLineQuantity line={line} />
          <div className="ml-auto pb-[.15rem] md:hidden">
            <CartLineRemoveButton lineIds={[lineId]} />
          </div>
          <CartLinePrice line={line} />
        </div>
      </td>
    </tr>
  );

  return (
    <li key={id} className="cart-line">
      <div>
        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}

/**
 * @param {{checkoutUrl: string}}
 */
function CartCheckoutActions({checkoutUrl, cost}) {
  if (!checkoutUrl) return null;

  return (
    <div>
      <a href={checkoutUrl} target="_self">
        Continue to Checkout
        {cost?.subtotalAmount?.amount ? (
          <>
            {' '}
            • <Money data={cost?.subtotalAmount} as="span" />{' '}
          </>
        ) : (
          ''
        )}
      </a>
      <br />
    </div>
  );
}

/**
 * @param {{
 *   children?: React.ReactNode;
 *   cost: CartApiQueryFragment['cost'];
 *   layout: CartMainProps['layout'];
 * }}
 */
export function CartSummary({layout, children = null}) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';

  return (
    <div aria-labelledby="cart-summary" className={className}>
      {children}
    </div>
  );
}

/**
 * @param {{lineIds: string[]}}
 */
function CartLineRemoveButton({lineIds, className}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
      className={className}
    >
      <button
        type="submit"
        className="text-gray transition-colors duration-300 hover:text-dark"
      >
        <span className="sr-only">Remove</span>
        <IconTrash className="h-5 w-5" />
      </button>
    </CartForm>
  );
}

/**
 * @param {{line: CartLine}}
 */
function CartLineQuantity({line}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div>
      <strong className="mb-1 block text-sm font-medium text-dark">
        Quantity:
      </strong>
      <div className="flex items-center rounded-[2px] border border-borders-gray">
        <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <button
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            name="decrease-quantity"
            className="flex h-8 w-9 items-center justify-center text-gray transition-colors duration-300 hover:text-dark disabled:text-borders-gray"
            value={prevQuantity}
          >
            <IconMinus className="h-[2px] w-[13px]" />
          </button>
        </CartLineUpdateButton>
        <span className="pointer-events-none flex h-8 w-12 items-center justify-center border-l border-r border-borders-gray text-gray">
          {quantity}
        </span>
        <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
          <button
            aria-label="Increase quantity"
            name="increase-quantity"
            className="flex h-8 w-9 items-center justify-center text-gray transition-colors duration-300 hover:text-dark disabled:text-borders-gray"
            value={nextQuantity}
          >
            <IconPlus className="h-[14px] w-[15px]" />
          </button>
        </CartLineUpdateButton>
      </div>
    </div>
  );
}

/**
 * @param {{
 *   line: CartLine;
 *   priceType?: 'regular' | 'compareAt';
 *   [key: string]: any;
 * }}
 */
function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <Money
      withoutTrailingZeros
      {...passthroughProps}
      data={moneyV2}
      className="w-full pb-[.35rem] font-medium text-dark md:w-auto"
    />
  );
}

/**
 * @param {{
 *   hidden: boolean;
 *   layout?: CartMainProps['layout'];
 * }}
 */
export function CartEmpty({hidden = false, layout = 'aside'}) {
  return (
    <div hidden={hidden}>
      <br />
      <p>
        Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
        started!
      </p>
      <br />
      <Link
        to="/collections"
        onClick={() => {
          if (layout === 'aside') {
            window.location.href = '/collections';
          }
        }}
      >
        Continue shopping →
      </Link>
    </div>
  );
}

/**
 * @param {{
 *   discountCodes: CartApiQueryFragment['discountCodes'];
 * }}
 */
function CartDiscounts({discountCodes}) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div>
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div>
          <input type="text" name="discountCode" placeholder="Discount code" />
          &nbsp;
          <button type="submit">Apply</button>
        </div>
      </UpdateDiscountForm>
    </div>
  );
}

/**
 * @param {{
 *   discountCodes?: string[];
 *   children: React.ReactNode;
 * }}
 */
function UpdateDiscountForm({discountCodes, children}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

/**
 * @param {{
 *   children: React.ReactNode;
 *   lines: CartLineUpdateInput[];
 * }}
 */
function CartLineUpdateButton({children, lines}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}

/** @typedef {CartApiQueryFragment['lines']['nodes'][0]} CartLine */
/**
 * @typedef {{
 *   cart: CartApiQueryFragment | null;
 *   layout: 'page' | 'aside';
 * }} CartMainProps
 */

/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineUpdateInput} CartLineUpdateInput */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
