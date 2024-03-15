import {Link} from '@remix-run/react';
import {useState, useEffect} from 'react';
import clsx from 'clsx';
import {IconLink} from './Icon';
import {Button} from './Button';

export function ErrorLayout({children, layout}) {
  const [vh, setVh] = useState('100vh');
  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight);
    };
    updateVh();
    window.addEventListener('resize', updateVh);

    return () => window.removeEventListener('resize', updateVh);
  }, []);
  const logo = layout?.shop.brand?.logo?.image?.url;
  const shopName = layout?.shop.name ?? 'Fiftheffect';
  const footerMenu = layout?.footerMenu;
  return (
    <>
      <div
        className="flex min-h-[100vh] flex-col py-12"
        style={{minHeight: vh}}
      >
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
        <header className="container flex justify-center text-center">
          <Link
            to="/"
            prefetch="intent"
            className="text-2xl uppercase leading-none text-dark"
          >
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
          </Link>
        </header>
        <main
          id="mainContent"
          className="container w-full flex-grow text-center"
        >
          {children}
          <Button className="mt-7" variant="primary" to={'/'}>
            Return Home
          </Button>
        </main>
        {footerMenu && (
          <footer className="container mt-[72px] md:mt-12">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-4 md:gap-x-8">
              {(footerMenu?.items || []).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    target={item.target}
                    prefetch="intent"
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
                  </Link>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>
    </>
  );
}
