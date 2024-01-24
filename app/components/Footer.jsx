import {Link, NavLink} from '@remix-run/react';
import {
  IconAccessibility,
  IconArrow,
  IconInstagram,
  IconLinkedin,
} from './Icon';
export function Footer({primaryMenu, secondaryMenu, title, logo}) {
  return (
    <footer className="bg-borders py-14">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-y-8 gap-x-5">
        <div className="col-span-full lg:col-auto">
          <Link
            className="text-dark text-2xl uppercase leading-none inline-block"
            to="/"
            prefetch="intent"
          >
            {logo ? (
              <img
                src={logo}
                alt={title}
                className="md:w-[162px] w-[134px]"
                width={187}
                height={47}
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
            className="items-center gap-2 font-bold hidden md:flex"
          >
            <span>Schedule a Call</span>
            <IconArrow viewBox="0 0 19 12" className="w-5 h-5" />
          </Link>
          <a href="mailto:hello@fiftheffect.com" className="text-sm">
            hello@fiftheffect.com
          </a>
        </div>
        <div className="pb-3 md:hidden self-end">
          <Link
            to="/contact"
            prefetch="intent"
            className="flex items-center gap-2 font-bold"
          >
            <span>Schedule a Call</span>
            <IconArrow viewBox="0 0 19 12" className="w-5 h-5" />
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
        <div className="row-start-3 row-span-2 md:row-auto col-start-2 md:col-span-full lg:col-start-2 lg:col-span-3">
          <div className="flex items-center flex-wrap justify-between">
            <div className="grow">
              <h3 className="mb-2 md:mb-0">Explore</h3>
              <ul className="flex flex-col md:flex-row flex-wrap gap-y-1 md:gap-y-0 md:gap-x-8">
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
        <div className="md:hidden mt-4 col-span-full">
          <FooterBottom menu={secondaryMenu} />
        </div>
      </div>
    </footer>
  );
}

function FooterBottom({menu}) {
  return (
    <>
      <div className="flex items-center justify-center md:justify-end gap-5">
        <a
          href="https://www.instagram.com/fiftheffect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Instagram</span>
          <IconInstagram viewBox="0 0 20 19" className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/fiftheffect/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Linkedin</span>
          <IconLinkedin viewBox="0 0 19 19" className="w-5 h-5" />
        </a>
        <span className="border-r self-stretch border-light-gray"></span>
        <button data-acsb-custom-trigger="true">
          <span className="sr-only">Accessibility</span>
          <IconAccessibility viewBox="0 0 18 20" className="w-5 h-5" />
        </button>
      </div>
      <ul className="flex flex-wrap gap-4 justify-center md:justify-end mt-2 md:mt-5">
        {(menu?.items || []).map((item) => (
          <li key={item.id}>
            <Link
              to={item.to}
              target={item.target}
              prefetch="intent"
              className="text-xs underline text-light-gray hover:text-dark"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
