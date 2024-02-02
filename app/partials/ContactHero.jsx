import clsx from 'clsx';
import {useState, useRef, useEffect} from 'react';
import {InlineWidget} from 'react-calendly';

const Formaloo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://formaloo.me/istatic/js/main.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      id="formz-wrapper"
      data-formz-slug="43xqsH5a"
      data-formz-type="simple"
    />
  );
};
const contactTabs = [
  {
    label: 'Book A Call',
    content: (
      <InlineWidget url="https://calendly.com/fiftheffect/potential-partnerships-onsite?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3693ff" />
    ),
  },
  {
    label: (
      <>
        <span className="hidden md:inline">Send a </span>Message
      </>
    ),
    content: <Formaloo />,
  },
];
export function ContactHero({
  heading,
  description,
  secondaryHeading,
  secondaryDescription,
}) {
  const tabRefs = useRef({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index) => setSelectedIndex(index);
  const setIndex = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };
  const onKeyDown = (event) => {
    const count = contactTabs.length;
    const nextTab = () => setIndex((selectedIndex + 1) % count);
    const prevTab = () => setIndex((selectedIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    };

    const action = keyMap[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <section className="py-8 md:py-14">
      <div
        className="container flex flex-col justify-between gap-x-8 md:flex-row"
        aria-orientation="horizontal"
      >
        <div className="w-full md:w-1/2 lg:w-3/5">
          {heading && (
            <h1 className="mb-5 max-w-[18ch] text-5xl leading-solid md:text-6xl lg:text-7xl">
              {heading}
            </h1>
          )}
          {description && (
            <div
              className="max-w-[40ch] text-xl md:text-2xl"
              dangerouslySetInnerHTML={{__html: description}}
            ></div>
          )}
          <div className="flex justify-end md:justify-start">
            <div className="mt-8 grid w-full max-w-72 grid-cols-2 items-center gap-1 rounded border border-solid border-light-gray p-[2px] md:max-w-96 lg:mt-12">
              {contactTabs.map((tab, index) => (
                <button
                  key={`tab-${index}`}
                  onClick={() => handleClick(index)}
                  ref={(element) => (tabRefs.current[index] = element)}
                  onKeyDown={onKeyDown}
                  onFocus={() => setSelectedIndex(index)}
                  tabIndex={selectedIndex === index ? 0 : -1}
                  className={clsx(
                    selectedIndex === index
                      ? 'bg-secondary-accent'
                      : 'bg-borders',
                    'rounded px-4 py-2 text-center text-xs font-medium text-dark transition duration-300 hover:opacity-85 md:px-8 md:py-4 md:text-sm lg:text-base',
                  )}
                  role="tab"
                  aria-controls={`panel-id-${index}`}
                  aria-selected={selectedIndex === index}
                  id={`tab-id-${index}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <ContactSecondaryContent
            className="mt-14 hidden md:block"
            secondaryHeading={secondaryHeading}
            secondaryDescription={secondaryDescription}
          />
        </div>
        <div className="mt-9 md:mt-0 md:flex-1">
          {contactTabs.map((tab, index) => (
            <div
              key={`tabpanel-${index}`}
              hidden={selectedIndex !== index}
              role="tabpanel"
              aria-labelledby={`tab-id-${index}`}
              id={`panel-id-${index}`}
              tabIndex={0}
            >
              {tab.content}
            </div>
          ))}
        </div>
        <ContactSecondaryContent
          className="mt-8 block md:hidden"
          secondaryHeading={secondaryHeading}
          secondaryDescription={secondaryDescription}
        />
      </div>
    </section>
  );
}
const ContactSecondaryContent = ({
  className,
  secondaryHeading,
  secondaryDescription,
}) => {
  if (!secondaryHeading || !secondaryDescription) return;

  return (
    <div className={className}>
      {secondaryHeading && (
        <h3 className="mb-7 text-3xl font-bold leading-tight md:mb-3 md:text-2xl">
          {secondaryHeading}
        </h3>
      )}
      {secondaryDescription && (
        <div className="space-y-4 text-base leading-normal md:space-y-5 md:text-xl">
          {secondaryDescription}
        </div>
      )}
    </div>
  );
};
