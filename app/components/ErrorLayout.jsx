import clsx from 'clsx';
import {IconLink} from './Icon';
import {Button} from './Button';

export function ErrorLayout({children, layout}) {
  const logo = layout?.shop.brand?.logo?.image?.url;
  const shopName = layout?.shop.name ?? 'Fiftheffect';
  const footerMenu = layout?.footerMenu;
  return (
    <>
      <div className="py-19 md:py-14">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
        <header className="container flex justify-center text-center">
          <a href="/" className="text-2xl uppercase leading-none text-dark">
            {logo ? (
              <img
                src={logo}
                alt={shopName}
                className="w-[187px] max-w-full"
                width={187}
                height={47}
              />
            ) : (
              shopName
            )}
          </a>
        </header>
        <main id="mainContent" className="container flex-grow text-center">
          {children}
          <Button className="mt-11 md:mt-11" variant="primary" to={'/'}>
            Return Home
          </Button>
        </main>
        {footerMenu && (
          <footer className="container mt-[72px] md:mt-12">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-4 md:gap-x-8">
              {(footerMenu?.items || []).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.to}
                    target={item.target}
                    className={clsx(
                      'text-sm tracking-wide md:text-base',
                      item.title.toLowerCase() === 'client login'
                        ? 'relative pr-3 md:-ml-4 md:border-l md:border-l-light-gray md:pl-4'
                        : '',
                    )}
                  >
                    {item.title.toLowerCase() === 'client login' && (
                      <IconLink
                        viewBox="0 0 8 8"
                        className="absolute right-0 top-0 h-2 w-2"
                      />
                    )}
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>
    </>
  );
}
