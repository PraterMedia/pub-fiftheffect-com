import {Link, NavLink} from '@remix-run/react';
import {useState} from 'react';
import clsx from 'clsx';
import {IconUser, IconMenu, IconClose} from './Icon';

export function Header({menu, title, logo, isHome}) {
  const Logoelem = isHome ? `h1` : `div`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header role="banner" className="sticky top-0 z-20 bg-white">
      <div className="container relative flex flex-wrap items-center justify-between py-6 md:py-9">
        <Logoelem>
          <Link
            className="text-2xl uppercase leading-none text-dark"
            to="/"
            prefetch="intent"
          >
            {logo ? (
              <img
                src={logo}
                alt={title}
                className="w-[116px] md:w-[187px]"
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
            'absolute right-0 top-0 w-1/2 bg-white pt-[88px] tracking-normal shadow-header md:static md:block md:w-auto md:bg-transparent md:pt-0 md:shadow-none',
          )}
          id="navbar-header"
        >
          <ul className="px-4 py-9 text-sm md:flex md:gap-8 md:p-0 md:text-base">
            {(menu?.items || []).map((item) => (
              <li
                key={item.id}
                className="border-b border-b-dark-gray px-2 py-3 md:border-0 md:p-0"
              >
                <NavLink
                  to={item.to}
                  target={item.target}
                  prefetch="intent"
                  className={({isActive}) =>
                    clsx(
                      'border-b py-1 text-dark transition duration-300 md:hover:text-dark',
                      item.title.toLowerCase() === 'account'
                        ? 'hover:opacity-70'
                        : 'hover:border-b-primary-accent',
                      isActive
                        ? 'border-b-primary-accent'
                        : 'border-b-transparent',
                    )
                  }
                >
                  {item.title.toLowerCase() === 'account' ? (
                    <IconUser viewBox="0 0 24 24" className="h-6 w-6" />
                  ) : (
                    item.title
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="z-1 relative p-3 text-dark focus:outline-none focus:ring-2 focus:ring-dark md:hidden"
          aria-controls="navbar-header"
          aria-expanded={isOpen}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? (
            <IconClose viewBox="0 0 15 15" />
          ) : (
            <IconMenu viewBox="0 0 16 14" />
          )}
        </button>
      </div>
    </header>
  );
}
