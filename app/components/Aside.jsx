import {IconClose} from './Icon';
/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 * @param {{
 *   children?: React.ReactNode;
 *   heading: React.ReactNode;
 *   id?: string;
 * }}
 */
export function Aside({children, heading, id = 'aside'}) {
  return (
    <div
      aria-modal
      className="drawer fixed left-0 top-0 z-50 flex h-full w-screen justify-end bg-slate-950/50 transition duration-300"
      id={id}
      role="dialog"
    >
      <button
        className="fixed bottom-0 left-0 right-0 top-0"
        onClick={() => {
          history.go(-1);
          window.location.hash = '';
        }}
      />
      <aside className="relative flex h-full w-[430px] max-w-[calc(100vw-60px)] flex-col overflow-hidden bg-white px-2 shadow transition-transform duration-300">
        <header className="relative flex items-center justify-between border-b border-borders-gray p-3">
          <h3 className="text-2xl">{heading}</h3>
          <CloseAside />
        </header>
        {children}
      </aside>
    </div>
  );
}

function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a
      className="text-dark hover:text-dark hover:opacity-70"
      href="#"
      onChange={() => history.go(-1)}
    >
      <span className="sr-only">Close cart drawer</span>
      <IconClose viewBox="0 0 15 15" className="h-5 w-5" />
    </a>
  );
}
