import {Await, Link, NavLink} from '@remix-run/react';
import {useState, useEffect, useRef, Suspense} from 'react';
import clsx from 'clsx';
import {IconUser, IconMenu, IconClose, IconLink, IconArrow} from './Icon';

export function Header({menu, title, logo, isHome, cart}) {
  const Logoelem = isHome ? `h1` : `div`;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <header role="banner" className="sticky top-0 z-20 bg-white">
      <div className="container relative flex flex-wrap items-center py-2 md:py-[.875rem]">
        <Logoelem className="max-w-[70%] md:max-w-[150px] lg:max-w-[70%]">
          <Link
            className="text-2xl uppercase leading-none text-dark"
            to="/"
            prefetch="intent"
          >
            {logo ? (
              <img
                src={logo}
                alt={title}
                className="w-[187px] max-w-full"
                width={187}
                height={47}
              />
            ) : (
              title
            )}
          </Link>
        </Logoelem>
        <nav
          className={clsx(
            isOpen ? 'block' : 'hidden',
            'absolute right-0 top-0 w-4/5 bg-white pt-[70px] shadow-header xs:w-1/2 md:static md:ml-auto md:block md:w-auto md:bg-transparent md:pt-0 md:shadow-none',
          )}
          id="navbar-header"
          ref={ref}
          role="navigation"
        >
          <ul className="flex flex-col px-4 pb-6 md:flex-row md:items-center md:gap-3 md:p-0 lg:gap-8">
            {(menu?.items || []).map((item) => (
              <li
                key={item.id}
                className={clsx(
                  'border-b border-b-dark-gray px-2 py-3 md:border-0 md:p-0',
                  item.title.toLowerCase() === 'book a call' &&
                    'order-last border-b-0 px-0 pb-0 pt-6 md:order-none',
                )}
              >
                <NavLink
                  to={item.to}
                  target={item.target}
                  prefetch="intent"
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) =>
                    clsx(
                      'text-dark transition duration-300',
                      item.title.toLowerCase() === 'client login' ||
                        item.title.toLowerCase() === 'book a call'
                        ? 'py-1 md:hover:text-dark lg:rounded lg:border lg:border-solid lg:px-7 lg:pb-[13px] lg:pt-3 lg:font-medium lg:leading-none lg:hover:border-dark lg:hover:bg-dark lg:hover:text-white'
                        : 'border-b py-1 md:hover:text-dark',
                      item.title.toLowerCase() === 'book a call' &&
                        'block rounded border border-solid border-secondary-accent bg-secondary-accent px-2 py-3 font-medium hover:bg-dark md:inline md:py-2 lg:ml-3 lg:border-secondary-accent',
                      item.title.toLowerCase() === 'client login' &&
                        'border-b border-b-transparent md:rounded md:border md:border-solid md:border-dark md:bg-white md:px-2 md:py-2 md:font-medium md:hover:bg-dark lg:-ml-4 lg:border-dark lg:bg-white',
                      item.title.toLowerCase() !== 'client login' &&
                        item.title.toLowerCase() !== 'book a call'
                        ? isActive
                          ? 'border-b-primary-accent'
                          : 'border-b-transparent hover:border-b-primary-accent'
                        : '',
                    )
                  }
                >
                  {item.title.toLowerCase() === 'client login' ||
                  item.title.toLowerCase() === 'book a call' ? (
                    <>
                      <span
                        className={clsx(
                          'relative inline-flex items-center gap-1',
                          item.title.toLowerCase() === 'client login'
                            ? 'pr-3 md:pr-0'
                            : '',
                        )}
                      >
                        {item.title}
                        {item.title.toLowerCase() === 'client login' ? (
                          <IconLink
                            viewBox="0 0 8 8"
                            className="absolute right-0 top-0 h-2 w-2 md:hidden"
                          />
                        ) : (
                          <IconArrow
                            viewBox="0 0 19 12"
                            className="h-5 w-5 md:hidden"
                          />
                        )}
                      </span>
                    </>
                  ) : (
                    item.title
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav role="navigation" className="ml-auto flex gap-x-3 md:ml-0">
          {cart && <CartToggle cart={cart} />}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="z-1 relative p-3 text-dark focus:outline-none focus:ring-2 focus:ring-dark md:hidden"
            aria-controls="navbar-header"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? 'Close menu' : 'Open menu'}
            </span>
            {isOpen ? (
              <IconClose viewBox="0 0 15 15" className="h-5 w-5" />
            ) : (
              <IconMenu viewBox="0 0 16 14" className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
/**
 * @param {{count: number}}
 */
function CartBadge({count}) {
  return <a href="#cart-aside">Cart {count}</a>;
}
