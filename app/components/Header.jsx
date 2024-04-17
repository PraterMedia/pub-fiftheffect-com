import {Await, Link, NavLink} from '@remix-run/react';
import {useState, useEffect, useRef, Suspense} from 'react';
import clsx from 'clsx';
import {IconUser, IconMenu, IconClose, IconLink} from './Icon';

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
      <div className="container relative flex flex-wrap items-center py-2 md:py-9">
        <Logoelem className="max-w-[70%]">
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
            'absolute right-0 top-0 w-4/5 bg-white pt-[70px] shadow-header xs:w-1/2 md:static md:block md:w-auto md:bg-transparent md:pt-0 md:shadow-none md:ml-auto',
          )}
          id="navbar-header"
          ref={ref}
		  role="navigation"
        >
          <ul className="items-center px-4 pb-9 text-xl md:flex md:gap-4 md:p-0 md:text-base">
            {(menu?.items || []).map((item) => (
              <li
                key={item.id}
                className="border-b border-b-dark-gray px-2 py-3 md:border-0 md:p-0"
              >
                <NavLink
                  to={item.to}
                  target={item.target}
                  prefetch="intent"
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) =>
                    clsx(
                      'border-b py-1 text-dark transition duration-300 md:hover:text-dark',
                      item.title.toLowerCase() === 'client login'
                        ? 'hover:opacity-70 md:block md:border-l md:border-l-light-gray md:pl-4'
                        : 'hover:border-b-primary-accent',
                      isActive
                        ? 'border-b-primary-accent'
                        : 'border-b-transparent',
                    )
                  }
                >
                  {item.title.toLowerCase() === 'client login' ? (
                    <>
                      <IconUser
                        viewBox="0 0 16 16"
                        className="hidden h-4 w-4 md:block"
                      />
                      <span className="relative pr-3 md:hidden">
                        {item.title}
                        <IconLink
                          viewBox="0 0 8 8"
                          className="absolute right-0 top-0 h-2 w-2"
                        />
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
		<nav role="navigation" className="ml-auto md:ml-0 flex gap-x-3">
		<CartToggle cart={cart} />
			<button
			onClick={() => setIsOpen(!isOpen)}
			type="button"
			className="z-1 relative p-3 text-dark focus:outline-none focus:ring-2 focus:ring-dark md:hidden"
			aria-controls="navbar-header"
			aria-expanded={isOpen}
			>
			<span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
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