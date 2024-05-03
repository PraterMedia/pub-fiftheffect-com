import {useLocation, Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Aside} from '~/components/Aside';
import {CartMain} from '~/components/Cart';
import {Header} from './Header';
import {Footer} from './Footer';
export function Layout({cart, children, layout}) {
  const isHome = useIsHomePath();
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
        {cart && <CartAside cart={cart} />}
        <Header
          title={layout?.shop.name ?? 'Fiftheffect'}
          menu={layout?.headerMenu}
          logo={layout?.shop.brand?.logo?.image?.url}
          isHome={isHome}
          cart={cart ?? null}
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
/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}
function useIsHomePath() {
  const {pathname} = useLocation();
  return pathname === '/';
}
