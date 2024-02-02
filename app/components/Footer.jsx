import {Link, NavLink} from '@remix-run/react';
import {
  IconAccessibility,
  IconArrow,
  IconInstagram,
  IconLinkedin,
} from './Icon';

import hydrogenLogo from '../../public/images/shopify-hydrogen.svg';
export function Footer({primaryMenu, secondaryMenu, title, logo}) {
  return (
    <footer className="bg-borders py-14">
      <div className="container grid grid-cols-2 grid-rows-1 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-full lg:col-auto">
          <Link
            className="inline-block text-2xl uppercase leading-none text-dark"
            to="/"
            prefetch="intent"
          >
            {logo ? (
              <img
                src={logo}
                alt={title}
                className="w-[134px] md:w-[162px]"
                width={187}
                height={47}
                loading="lazy"
              />
            ) : (
              title
            )}
          </Link>
          <p className="mt-7 leading-5">
            Made with ❤️
            <span className="md:block">in Detroit</span>
          </p>
        </div>
        <div className="pb-3 md:pb-0">
          <h3 className="mb-2 md:mb-0">Let's Talk</h3>
          <Link
            to="/contact"
            prefetch="intent"
            className="hidden items-center gap-2 font-bold md:flex"
          >
            <span>Schedule a Call</span>
            <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
          </Link>
          <a href="mailto:hello@fiftheffect.com" className="text-sm">
            hello@fiftheffect.com
          </a>
        </div>
        <div className="self-end pb-3 md:hidden">
          <Link
            to="/contact"
            prefetch="intent"
            className="flex items-center gap-2 font-bold"
          >
            <span>Schedule a Call</span>
            <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
          </Link>
        </div>
        <div>
          <h3 className="mb-2 md:mb-0">Let's Brainstorm</h3>
          <Link to="/capabilities" prefetch="intent" className="text-sm">
            What should we build?
          </Link>
        </div>
        <div>
          <h3 className="mb-2 md:mb-0">Let's Team Up</h3>
          <Link to="/careers" prefetch="intent" className="text-sm">
            See open positions
          </Link>
        </div>
        <div className="hidden self-end lg:block">
          <img
            src={hydrogenLogo}
            alt="Powered by Shopify Hydrogen"
            className="h-auto w-[99px] md:w-[192px]"
            width={192}
            height={22}
            loading="lazy"
          />
        </div>
        <div className="col-start-2 row-span-2 row-start-3 md:col-span-full md:row-auto lg:col-span-3 lg:col-start-2">
          <div className="flex flex-wrap items-center justify-between">
            <div className="grow">
              <h3 className="mb-2 md:mb-0">Explore</h3>
              <ul className="flex flex-col flex-wrap gap-y-1 md:flex-row md:gap-x-8 md:gap-y-0">
                {(primaryMenu?.items || []).map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      target={item.target}
                      prefetch="intent"
                      className="text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <FooterBottom menu={secondaryMenu} />
            </div>
          </div>
        </div>
        <div className="col-span-full mt-4 md:hidden">
          <FooterBottom menu={secondaryMenu} />
        </div>
        <div className="col-span-full -mt-3 lg:hidden">
          <img
            src={hydrogenLogo}
            alt="Powered by Shopify Hydrogen"
            className="mx-auto h-auto w-[99px] md:mx-0 md:w-[192px]"
            width={192}
            height={22}
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterBottom({menu}) {
  return (
    <>
      <div className="flex items-center justify-center gap-5 md:justify-end">
        <a
          href="https://www.instagram.com/fiftheffect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Instagram</span>
          <IconInstagram viewBox="0 0 20 19" className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/fiftheffect/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Linkedin</span>
          <IconLinkedin viewBox="0 0 19 19" className="h-5 w-5" />
        </a>
        <span className="self-stretch border-r border-light-gray"></span>
        <button data-acsb-custom-trigger="true">
          <span className="sr-only">Accessibility</span>
          <IconAccessibility viewBox="0 0 18 20" className="h-5 w-5" />
        </button>
      </div>
      <ul className="mt-2 flex flex-wrap justify-center gap-4 md:mt-5 md:justify-end">
        {(menu?.items || []).map((item) => (
          <li key={item.id}>
            <Link
              to={item.to}
              target={item.target}
              prefetch="intent"
              className="text-xs text-light-gray underline hover:text-dark"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
