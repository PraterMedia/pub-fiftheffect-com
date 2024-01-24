import {useLocation} from '@remix-run/react';
import {Header} from './Header';
import {Footer} from './Footer';
export function Layout({children, layout}) {
  const isHome = useIsHomePath();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
        <Header
          title={layout?.shop.name ?? 'Fiftheffect'}
          menu={layout?.headerMenu}
          logo={layout?.shop.brand?.logo?.image?.url}
          isHome={isHome}
        />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Footer
        title={layout?.shop.name ?? 'Fiftheffect'}
        primaryMenu={layout?.footerMenu}
        secondaryMenu={layout?.policiesMenu}
        logo={layout?.shop.brand?.logo?.image?.url}
      />
    </>
  );
}
function useIsHomePath() {
  const {pathname} = useLocation();
  return pathname === '/';
}
